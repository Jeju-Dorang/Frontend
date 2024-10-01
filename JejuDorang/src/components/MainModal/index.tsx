import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { useAuthStore } from '@states/useAuthStore';
import { Link } from 'react-router-dom';
import KakaoMap from '@components/KakaoMap';
import ArroundKakaoMap from '@components/ArroundKakaoMap';
import MainDorang from '@components/MainDorang';

const buttons = [{ id: 0 }, { id: 1 }, { id: 2 }];

const MainModal = () => {
  const [idx, setIdx] = useState<number>(1);
  const renderContent = () => {
    switch (idx) {
      case 0:
        return (
          <Fragment>
            <p className="text-[14px] pb-[11px] font-semibold">도랑이</p>
            <MainDorang />
          </Fragment>
        );
      case 1:
        return (
          <Fragment>
            <div className="flex justify-between">
              <p className="text-[14px] font-semibold">내 숙소</p>
              <Link
                to="/stay"
                className="text-gray-dg hover:underline text-sm pr-[5px]"
              >
                숙소 추천받기
              </Link>
            </div>
            <KakaoMap
              lat={useAuthStore.getState().lodging.lat}
              lng={useAuthStore.getState().lodging.lng}
              css={'h-[458px] mt-4 mb-4'}
            />
          </Fragment>
        );
      case 2:
        return (
          <Fragment>
            <div className="flex justify-between">
              <p className="text-[14px] font-semibold">내 숙소 주변 둘러보기</p>
              <Link
                to="/stay"
                className="text-gray-dg hover:underline text-sm pr-[5px]"
              >
                숙소 추천받기
              </Link>
            </div>
            <ArroundKakaoMap
              lat={useAuthStore.getState().lodging.lat}
              lng={useAuthStore.getState().lodging.lng}
              css={'h-[458px] mt-4 mb-4'}
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
        className={`w-3.5 h-3.5 rounded-full hover:shadow-md hover:bg-gray-dg ${
          idx === button.id ? 'bg-primary-orange' : 'bg-gray-lg'
        }`}
      />
    ));
  };

  return (
    <div className="flex flex-col h-auto mt-4 mx-5 border-solid border border-gray rounded-xl overflow-hidden">
      <div
        className="flex-grow overflow-auto"
        style={{ maxHeight: 'calc(100vh - 200px)' }}
      >
        <div className="p-5">{renderContent()}</div>
      </div>
      <div className="flex justify-center space-x-2 p-2 border-t border-gray-200">
        {renderButtons()}
      </div>
    </div>
  );
};

export default MainModal;
