import { Link } from 'react-router-dom';

const InvalidLocation = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[460px] bg-gray-100">
      <span className="text-7xl mb-4">🙏</span>
      <p className="text-lg font-semibold text-gray-dg">
        앗! 위치를 찾을 수 없어요.
      </p>
      <p className="text-sm text-gray-dg mt-2">숙소를 설정해주세요.</p>
      <div className="absolute bottom-4 right-4">
        <Link to="/stay" className="text-gray-dg hover:underline text-sm">
          숙소 정하러 가기
        </Link>
      </div>
    </div>
  );
};

export default InvalidLocation;
