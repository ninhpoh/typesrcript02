import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../slices/languageSlice';
import { translations } from '../slices/languageSlice';

const Bt06
 = () => {
  const lang = useSelector((state: any) => state.language.lang);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguage(e.target.value));
  };

  const t = translations[lang];

  return (
    <div>
      <label>{t.switchLabel}</label>
      <select value={lang} onChange={handleChange}>
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>
      <p>{t.academy}</p>
    </div>
  );
};

export default Bt06;