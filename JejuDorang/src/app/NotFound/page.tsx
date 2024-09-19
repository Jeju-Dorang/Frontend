import errorPage from '#img/errorPage.webp';

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white">
      <img
        src={errorPage}
        className="w-full h-auto max-h-[calc(100vh-40px)]"
        alt="404 Error"
      />
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
