import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import KakaoMap from '@components/KakaoMap';
import ArroundKakaoMap from '@components/ArroundKakaoMap';

const buttons = [{ id: 0 }, { id: 1 }, { id: 2 }];

const MainModal = () => {
  const [idx, setIdx] = useState<number>(1);
  const renderContent = () => {
    switch (idx) {
      case 0:
        return <p className="text-[14px] font-semibold">도랑이</p>;
      case 1:
        return (
          <Fragment>
            <p className="text-[14px] font-semibold">내 숙소</p>
            {/* 숙소설정을 안한경우 예외처리 필요 */}
            {/* 좌표를 인자로 받아서 표기하도록 수정필요 */}
            <KakaoMap
              lat={33.55635}
              lng={126.795841}
              css={'w-[321px] h-[458px] mt-4 mb-4'}
            />
          </Fragment>
        );
      case 2:
        return (
          <Fragment>
            <p className="text-[14px] font-semibold">내 숙소 주변 둘러보기</p>
            <ArroundKakaoMap
              lat={33.55635}
              lng={126.795841}
              css={'w-[321px] h-[500px] mt-4 mb-4'}
            />
          </Fragment>
        );
    }
  };

  const renderButtons = () => {
    return buttons.map((button) => (
      <button
        key={button.id}
        onClick={() => setIdx(button.id)}
        className={`w-3.5 h-3.5 rounded-full ${
          idx === button.id ? 'bg-primary-orange' : 'bg-gray-lg'
        }`}
      />
    ));
  };

  return (
    <Fragment>
      <div className="flex flex-col h-auto mt-4 mx-5 p-5 border-solid border border-gray rounded-xl">
        <div className="flex-grow">{renderContent()}</div>
        <div className="flex justify-center space-x-2">{renderButtons()}</div>
      </div>
    </Fragment>
  );
};

export default MainModal;
