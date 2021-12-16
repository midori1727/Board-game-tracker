import { useState } from 'react';
import './CreateNewGame.css';
import Header from '../Header/Header';
import DefaultButton from '../Button/DefaultButton';

import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const formItemLayout = {
	labelCol: {
	  xs: { span: 24 },
	  sm: { span: 4 },
	},
	wrapperCol: {
	  xs: { span: 24 },
	  sm: { span: 20 },
	},
};

const formItemLayoutWithOutLabel = {
wrapperCol: {
	xs: { span: 24, offset: 0 },
	sm: { span: 20, offset: 4 },
},
};


const CreateNewGame = () => {

	const [title, setTitle] = useState('');
	const [scenario, setScenario] = useState('');
	const [member, setMember] = useState([]);

	const handleChangeTitle = (e) => {
		console.log(e.target.value)
		setTitle(e.target.value);
	}

	const handleChangeScenario = (e) => {
		console.log(e.target.value)
		setScenario(e.target.value);
	}

	const handleChangeMember = (e) => {
		console.log(e.target.value)
		setMember(e.target.value);
		console.log(member)
	}


	const onFinish = values => {
		console.log('Received values of form:', values);
	};

	return(
		<>
		<header>
			<Header />
		</header>
		<h1>Create New Game</h1>
		<form>
			<label>
				Title:
				<input className="inputTitle" type="text" value={title} onChange={handleChangeTitle} />
				<p>{title}</p>
			</label>
			<label>
				Scenario:
				<input className="inputScenario" type="text" value={scenario} onChange={handleChangeScenario} />
				<p>{scenario}</p>
			</label>
			{/* <label>
				Member:
				<input type="text" value={member} onChange={handleChangeMember}/>
			</label>
			<p>+ Add new member</p> */}

			<Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
			<Form.List
				name="names"
				// rules={[
				//   {
				//     validator: async (_, names) => {
				//       if (!names || names.length < 2) {
				//         return Promise.reject(new Error('At least 2 passengers'));
				//       }
				//     },
				//   },
				// ]}
			>
				{(fields, { add, remove }, { errors }) => (
				<>
					{fields.map((field, index) => (
					<Form.Item
						{...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
						label={index === 0 ? 'Member' : ''}
						required={false}
						key={field.key}
					>
					<Form.Item
					{...field}
					validateTrigger={['onChange', 'onBlur']}
					rules={[
						{
						required: true,
						whitespace: true,
						message: "Please input members's name or delete this field.",
						},
					]}
					noStyle
					>
					<Input placeholder="member name" style={{ width: '60%' }} onChange={handleChangeMember}/>
					</Form.Item>
						{fields.length > 1 ? (
						<MinusCircleOutlined
							className="dynamic-delete-button"
							onClick={() => remove(field.name)}
						/>
						) : null}
					</Form.Item>
					))}
					<Form.Item>
						<Button
							type="dashed"
							onClick={() => add()}
							style={{ width: '60%' }}
							icon={<PlusOutlined />}
						>
						Add member
						</Button>
					{/* <Button
						type="dashed"
						onClick={() => {
						add('The head item', 0);
						}}
						style={{ width: '60%', marginTop: '20px' }}
						icon={<PlusOutlined />}
					>
						Add field at head
					</Button> */}
					<Form.ErrorList errors={errors} />
					</Form.Item>
				</>
				)}
			</Form.List>
			{/* <Form.Item>
				<Button type="primary" htmlType="submit">
				Submit
				</Button>
			</Form.Item> */}
		</Form>

			<DefaultButton ButtonName="ADD"/>
		</form>
		</>
	)
};

export default CreateNewGame;