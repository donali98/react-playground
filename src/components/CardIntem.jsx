import React from 'react';

// eslint-disable-next-line react/prop-types
const CardItem = ({ text, onDelete, onEdit }) => {
  return (
    <div className="card p-4 border border-gray-300 rounded mb-2 flex justify-between items-center">
      <div className="card-body flex justify-between w-full items-center">
        <span>{text}</span>
        <div className="flex gap-2">
          <button
            className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
            onClick={onDelete}
          >
            Eliminar
          </button>
          <button
            className="bg-green-500 text-white p-2 rounded hover:bg-green-700"
            onClick={onEdit}
          >
            Actualizar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
