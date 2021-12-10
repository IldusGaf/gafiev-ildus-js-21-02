import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import i18next from 'i18next';

const LanguageChanger = () => {
  const handleChangeLanguage = (e) => {
    i18next.changeLanguage(e.currentTarget.value);
  };
  return (
    <div className="language-buttons">
      <Button value="en" onClick={handleChangeLanguage}>
        EN
      </Button>
      <Button value="ru" onClick={handleChangeLanguage}>
        RU
      </Button>
    </div>
  );
};

export default LanguageChanger;
