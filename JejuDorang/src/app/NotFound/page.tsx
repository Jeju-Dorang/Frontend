import errorPage from '#img/errorPage.webp';
<<<<<<< HEAD

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white">
      <img
        src={errorPage}
        className="w-full h-auto max-h-[calc(100vh-40px)]"
        alt="404 Error"
      />
=======
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
      <img
        src={errorPage}
        className="w-full h-auto max-h-[calc(100vh-120px)] object-cover"
        alt="404 Error"
      />
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 font-semibold rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1"
      >
        Go To Main
      </Link>
>>>>>>> 2cf21a4fb447938483f77fad1a671e63834aebef
      <a
        href="http://www.freepik.com"
        className="mt-4 text-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Designed by Freepik
      </a>
    </div>
  );
};

export default NotFound;
