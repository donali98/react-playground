import React, { useState } from 'react';
import CardItem from './components/CardIntem';
import InputItem from './components/InputItem';
import ButtonItem from './components/ButtonItem';
import { useTranslation } from 'react-i18next';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [cards, setCards] = useState([]);
  const { t } = useTranslation();

  const handleAddCard = () => {
    if (inputValue.trim()) {
      setCards([...cards, inputValue]);
      setInputValue(''); // Limpia el input después de agregar
    }
  };

  const handleDeleteCard = (index) => {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
  };

  return (
    <div className="container mx-auto max-w-lg p-5">
      <h1 className="text-center mb-4 text-2xl font-bold">
        {t('project_title')}
      </h1>
      <div className="input-container flex gap-2 mb-5">
        <InputItem
          placeholder="Escribe algo"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <ButtonItem onClick={handleAddCard}></ButtonItem>
      </div>

      {cards.map((card, index) => (
        <CardItem
          key={index}
          text={card}
          onDelete={() => handleDeleteCard(index)}
        />
      ))}
    </div>
  );
};

export default App;
