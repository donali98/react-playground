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
        <div className="container mx-auto max-w-lg p-5">
            <h1 className="text-center mb-4 text-2xl font-bold">Lista de Tarjetas</h1>
            <div className="input-container flex gap-2 mb-5">
                <input
                    type="text"
                    className="form-control flex-1 p-2 border border-gray-300 rounded"
                    placeholder="Escribe algo..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                    className="btn btn-primary bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                    onClick={handleAddCard}
                >
                    Agregar
                </button>
            </div>

            {cards.map((card, index) => (
                <CardItem key={index} text={card} onDelete={() => handleDeleteCard(index)} />
            ))}
        </div>
    );
};

export default App;
