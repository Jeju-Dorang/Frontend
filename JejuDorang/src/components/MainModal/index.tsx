import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import KakaoMap from '@components/KakaoMap';

const buttons = [
  { id: 0, label: '도랑이' },
  { id: 1, label: '내 숙소' },
  { id: 2, label: '내 숙소 주변 둘러보기' },
];

const MainModal = () => {
  const [idx, setIdx] = useState<number>(1);

  const renderContent = () => {
    switch (idx) {
      case 0:
        return <p className="text-sm font-semibold">도랑이</p>;
      case 1:
        return (
          <Fragment>
            <p className="text-sm font-semibold">내 숙소</p>
            {/* 숙소설정을 안한경우 예외처리 필요 */}
            {/* 좌표를 인자로 받아서 표기하도록 수정필요 */}
            <KakaoMap lat={33.55635} lng={126.795841} css="mt-4 mb-4 " />
          </Fragment>
        );
      case 2:
        return <p className="text-sm font-semibold">내 숙소 주변 둘러보기</p>;
    }
  };

  const renderButtons = () => {
    return buttons.map((button) => (
      <button
        key={button.id}
        onClick={() => setIdx(button.id)}
        className={`w-4 h-4 rounded-full ${
          idx === button.id ? 'bg-primary-orange' : 'bg-gray-lg'
        }`}
      />
    ));
  };

  return (
    <Fragment>
      <div className="flex flex-col h-auto mt-4 mx-5 p-5 border-solid border border-gray rounded-xl">
        {renderContent()}
        <div className="flex justify-center space-x-2">{renderButtons()}</div>
      </div>
    </Fragment>
  );
};

export default MainModal;
