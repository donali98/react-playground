import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';

// eslint-disable-next-line react/prop-types
const Modal = ({isOpen, onClose, onSubmit, value, onChange}) => {
  const {t} = useTranslation();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg w-96">
        <h2 className="text-xl mb-4">{t('update_card')}</h2>
        <input
          type="text"
          className="form-control w-full p-2 border border-gray-300 rounded"
          value={value}
          onChange={onChange}
        />
        <div className="mt-4 flex justify-end gap-2">
          <button
            className="btn bg-gray-500 text-white p-2 rounded hover:bg-gray-700"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="btn bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            onClick={onSubmit}
          >
            {t('update_text')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
