import React, { useEffect, useState } from 'react';
import './RegForm.css';
import { Form, Input, Radio, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/registerUser';

const RegForm = ({ darkTheme, id, redirect, addNewUser, preventRedirect }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    const user = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      dateOfBirth: dateOfBirth,
      email: email,
      phone: phone,
    };

    addNewUser(user);
  };

  const handleFailedValidation = () => {
    alert('Ошибка заполнения формы! Введите корректные данные!');
  };

  useEffect(() => {
    preventRedirect();
  }, []);

  return (
    <div className="reg-form__page">
      <div className={`reg-form__container ${darkTheme && 'reg-form_dark'}`}>
        <Form onFinish={handleSubmit} onFinishFailed={handleFailedValidation}>
          <h2>Регистрация</h2>
          <Form.Item
            name="firstName"
            label="Имя"
            rules={[
              {
                required: true,
                message: 'Только латинские и русские буквы',
                pattern: /^[a-zA-Zа-яА-яёЁ]+$/,
              },
            ]}
          >
            <Input placeholder="Введите имя" onChange={(event) => setFirstName(event.target.value)} />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Фамилия"
            rules={[
              {
                required: true,
                message: 'Только латинские и русские буквы',
                pattern: /^[a-zA-Zа-яА-яёЁ]+$/,
              },
            ]}
          >
            <Input placeholder="Введите фамилию" onChange={(event) => setLastName(event.target.value)} />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Пол"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Radio.Group onChange={(event) => setGender(event.target.value)}>
              <Radio value="male">Мужской</Radio>
              <Radio value="female">Женский</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="dateOfBirth"
            label="Дата рождения"
            rules={[
              {
                message: 'Введите дату рождения в формате ГГГГ-ММ-ДД',
                pattern: /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/,
              },
            ]}
          >
            <Input placeholder="ГГГГ-ММ-ДД" onChange={(event) => setDateOfBirth(event.target.value)} />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'Введите корректный  E-mail!',
              },
              {
                required: true,
                message: 'Введите корректный E-mail!',
              },
            ]}
          >
            <Input placeholder="example@example.com" onChange={(event) => setEmail(event.target.value)} />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Телефон"
            rules={[
              {
                required: true,
                message: 'Введите корректный номер телефона',
                pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
              },
            ]}
          >
            <Input placeholder="Введите номер телефона" onChange={(event) => setPhone(event.target.value)} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Зарегистрироваться
            </Button>
          </Form.Item>
        </Form>
        <div className="reg-form__auth">
          Уже есть аккаунт? <Link to={'/auth'}>Войти</Link>
        </div>
      </div>
      {redirect && <Navigate to={`/users/${id}`} />}
    </div>
  );
};

export default connect(
  (state) => ({
    id: state.newUser.newUserId,
    redirect: state.newUser.redirect,
    darkTheme: state.theme.darkTheme,
  }),
  (dispatch) => bindActionCreators(actions, dispatch)
)(RegForm);
