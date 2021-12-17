import React, { useState, useEffect } from 'react';
import './RegPage.css';
import { Form, Input, Select } from 'antd';
import { Redirect } from 'react-router-dom';
import { addUser } from '../../api/dumMyApi';

interface Props {
  onClick?: any;
}
const { Option } = Select;

export const RegForm = (props: Props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [id, setId] = useState('');

  const handleRegButtonClick = props.onClick;

  useEffect(() => {
    setId('');
  }, []);

  const handleRegButton = (firstName: string, lastName: string, email: string, title: string, gender: string, phone: string) => {
    const user = {
      firstName,
      lastName,
      email,
      title,
      gender,
      phone,
    };

    // @ts-ignore
    addUser(user, (response) => setId(response.id));
    handleRegButtonClick();
  };

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <div>
      <div className="reg-page">
        <Form>
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              {
                required: true,
                message: 'Please input your First Name',
                pattern: /[A-Z][a-z]+/g,
              },
            ]}
          >
            <Input onChange={(event) => setFirstName(event.target.value)} />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
                message: 'Please input your Last Name',
                pattern: /[A-Z][a-z]+/g,
              },
            ]}
          >
            <Input onChange={(event) => setLastName(event.target.value)} />
          </Form.Item>
          <Form.Item
            name="title"
            label="Title"
            rules={[
              {
                message: 'Please select title!',
              },
            ]}
          >
            // @ts-ignore
            <Select
              onChange={(value) => {
                // @ts-ignore
                setTitle(value);
              }}
              placeholder="select your title"
            >
              <Option value="mr">mr</Option>
              <Option value="ms">ms</Option>
              <Option value="mrs">mrs</Option>
              <Option value="miss">miss</Option>
              <Option value="dr">dr</Option>
              <Option value="">none</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                message: 'Please select gender!',
              },
            ]}
          >
            <Select
              onChange={(value) => {
                // @ts-ignore
                setGender(value);
              }}
              placeholder="select your gender"
            >
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input onChange={(event) => setEmail(event.target.value)} />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[
              {
                pattern: /[0-9]+/g,
                message: 'Please input your phone',
              },
            ]}
          >
            <Input onChange={(event) => setPhone(event.target.value)} />
          </Form.Item>
        </Form>
      </div>
      <div className="footer">
        <button className="reg-button" type="button" onClick={() => handleRegButton(firstName, lastName, email, title, gender, phone)}>Отправить</button>
      </div>
      {id && <Redirect to={`/user/${id}`} />}
    </div>
  );
};
