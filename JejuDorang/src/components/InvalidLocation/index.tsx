const InvalidLocation = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[460px] bg-gray-100">
      <span className="text-7xl mb-4">🙏</span>
      <p className="text-lg font-semibold text-gray-dg">
        앗! 위치를 찾을 수 없어요.
      </p>
      <p className="text-sm text-gray-dg mt-2">숙소를 설정해주세요.</p>
    </div>
  );
};

export default InvalidLocation;
