import React, { useState } from 'react';
import './EditUser.css';
import { Upload, Button, Form, Input, Radio } from 'antd';

import { UPLOAD_URL, UPLOAD_API_KEY } from '../../constants/imgbbApi';

const EditUser = ({ darkTheme, user, updateUserData, closeEditor }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [gender, setGender] = useState(user.gender);
  const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth);
  const [picture, setPicture] = useState(user.picture);
  const [phone, setPhone] = useState(user.phone);
  const [upload, setUpload] = useState('');

  const uploadProps = {
    action: UPLOAD_URL,
    data: {
      key: UPLOAD_API_KEY,
      image: upload,
    },
    beforeUpload: (file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const img = reader.result.replace(/^.*,/, '');
          setUpload(img);
          resolve(true);
        };
      });
    },
    onChange: (info) => {
      if (info.file.status === 'done') {
        setPicture(info.file.response.data.display_url);
      } else if (info.file.status === 'error') {
        alert('Ошибка загрузки фотографии!');
        console.log(info.event);
      }
    },
  };

  const handlePhotoDelete = () => {
    setPicture('');
  };

  const handleSubmit = () => {
    const updatedUser = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      dateOfBirth: dateOfBirth,
      picture: picture,
      phone: phone,
    };

    updateUserData(user.id, updatedUser);
    closeEditor();
  };

  const handleFailedValidation = () => {
    alert('Ошибка заполнения формы! Введите корректные данные!');
  };

  return (
    <div className={`edit ${darkTheme && 'edit_dark'}`}>
      <figure>
        <img src={user.picture} alt="Нет фото" />
      </figure>
      <div className="edit__img-buttons">
        <Upload {...uploadProps}>
          <Button>Обновить фотографию</Button>
        </Upload>
        <Button onClick={handlePhotoDelete}>Удалить фотографию</Button>
      </div>
      <Form onFinish={handleSubmit} onFinishFailed={handleFailedValidation}>
        <Form.Item
          name="firstName"
          label="Имя"
          rules={[
            {
              message: 'Только латинские и русские буквы',
              pattern: /^[a-zA-Zа-яА-яёЁ]+$/,
            },
          ]}
        >
          <Input defaultValue={user.firstName} onChange={(event) => setFirstName(event.target.value)} />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Фамилия"
          rules={[
            {
              message: 'Только латинские и русские буквы',
              pattern: /^[a-zA-Zа-яА-яёЁ]+$/,
            },
          ]}
        >
          <Input defaultValue={user.lastName} onChange={(event) => setLastName(event.target.value)} />
        </Form.Item>
        <Form.Item name="gender" label="Пол">
          <Radio.Group
            defaultValue={user.gender === 'male' ? 'male' : 'female'}
            onChange={(event) => setGender(event.target.value)}
          >
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
          <Input defaultValue={user.dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)} />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Телефон"
          rules={[
            {
              message: 'Укажите корректный номер телефона',
              pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
            },
          ]}
        >
          <Input defaultValue={user.phone} onChange={(event) => setPhone(event.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditUser;
