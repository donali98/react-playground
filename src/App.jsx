import React, {useState} from 'react';
import CardItem from './components/CardIntem';
import InputItem from './components/InputItem';
import ButtonItem from './components/ButtonItem';
import ModalItem from './components/ModalItem';
import {useTranslation} from 'react-i18next';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');
  const {t} = useTranslation();

  const handleAddCard = () => {
    if (inputValue.trim()) {
      setCards([...cards, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteCard = (index) => {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
  };

  const handleEditCard = (index) => {
    setEditIndex(index);
    setEditValue(cards[index]);
    setIsModalOpen(true);
  };

  const handleUpdateCard = () => {
    const newCards = [...cards];
    newCards[editIndex] = editValue;
    setCards(newCards);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto max-w-lg p-5">
      <h1 className="text-center mb-4 text-2xl font-bold">
        {t('project_title')}
      </h1>

      <div className="input-container flex gap-2 mb-5">
        <InputItem
          placeholder={t('placeholder_write_something')}
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
          onEdit={() => handleEditCard(index)}
        />
      ))}

      <ModalItem
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onSubmit={handleUpdateCard}
      />
    </div>
  );
};

export default App;
