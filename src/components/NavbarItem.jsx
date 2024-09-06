import {Link} from 'react-router-dom';

const NavbarItem = () => {
  return (
    <nav className="bg-blue-600 p-4 w-full shadow-lg">
      <ul className="flex space-x-8 justify-start items-center">
        <li
          className="px-4 py-2 rounded-md hover:bg-blue-500 
        transition duration-300"
        >
          <Link
            to="/"
            className="text-white hover:text-gray-200 text-lg font-semibold"
          >
            Inicio
          </Link>
        </li>
        <li
          className="px-4 py-2 rounded-md hover:bg-blue-500 transition
         duration-300"
        >
          <Link
            to="/chart"
            className="text-white hover:text-gray-200 text-lg font-semibold"
          >
            Gráfica
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarItem;
