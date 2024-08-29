import React, { useState } from "react";
import CardItem from "./components/CardIntem";

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [cards, setCards] = useState([]);

    const handleAddCard = () => {
        if (inputValue.trim()) {
            setCards([...cards, inputValue]);
            setInputValue(""); // Limpia el input después de agregar
        }
    };

    const handleDeleteCard = (index) => {
        const newCards = cards.filter((_, i) => i !== index);
        setCards(newCards);
    };

    return (
        <div className="container">
            <h1 className="text-center mb-4">Lista de Tarjetas</h1>
            <div className="input-container">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Escribe algo..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleAddCard}>
                    Agregar
                </button>
            </div>  z

            {cards.map((card, index) => (
                <CardItem key={index} text={card} onDelete={() => handleDeleteCard(index)} />
            ))}
        </div>
    );
};

export default App;
