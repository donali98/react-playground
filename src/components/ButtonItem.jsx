import React from 'react';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
const AddButton = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <button
      className="btn btn-primary bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      onClick={onClick}
    >
      {t('add_button_text')}
    </button>
  );
};

export default AddButton;
