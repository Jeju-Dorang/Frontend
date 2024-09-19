import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Main from './Main/page';
import NotFound from './NotFound/page';
import SettingDorang from './SettingDorang/page';
import Activity from './Activity/page';
import Login from './Login/page';
import Dorang from './Dorang/page';
import Footer from '@components/Footer';
import Stay from './Stay/page';
import Record from './Record/page';
import KakaoCallback from './KakaoCallback/page';
import MyPage from './MyPage/page';
import EditMyPage from './EditMyPage/page';
import AllDiaries from './AllDiaries/page';

function App() {
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    // 특정 경로에서 Footer를 숨기고 싶은 경우 조건 설정
    if (location.pathname === '/login' || location.pathname === '/auth/kakao/callback') {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
  }, [location.pathname]);

  return (
    <BrowserRouter>
      <div className="flex justify-center items-center w-full min-h-screen bg-background">
        <div className="w-full h-full min-h-screen max-w-[402px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] custom:rounded-[20px] flex flex-col">
          <div className="flex-grow overflow-y-auto">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
              <Route path="/settingDorang" element={<SettingDorang />} />
              <Route
                path="/dorang"
                element={<Dorang setIsNavVisible={setIsNavVisible} />}
              />
              <Route path="/activity" element={<Activity />} />
              <Route path="/stay" element={<Stay />} />
              <Route path="/record" element={<Record />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/mypage/edit" element={<EditMyPage />} />
              <Route path="/allDiaries" element={<AllDiaries />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          {isNavVisible && <Footer />}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
