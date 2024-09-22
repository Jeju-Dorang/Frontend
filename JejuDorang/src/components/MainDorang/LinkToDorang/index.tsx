import { Link } from 'react-router-dom';

const LinkToDorang = () => {
  return (
    <div className="flex justify-end mt-2">
      <Link
        className="font-semibold text-[12px] text-gray-dg hover:underline hover:text-primary-orange"
        to={'/dorang'}
      >
        도랑이랑 대화하러가기
      </Link>
    </div>
  );
};

export default LinkToDorang;
