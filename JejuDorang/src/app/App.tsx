import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import Main from './Main/page';
import SettingDorang from './SettingDorang/page';
import Activity from './Activity/page';
import Login from './Login/page';
import Dorang from './Dorang/page';
import Footer from '@components/Footer';
import { useState } from 'react';
import Stay from './Stay/page';
import Record from './Record/page';
import KakaoCallback from './KakaoCallback/page';
import MyPage from './MyPage/page';
import EditMyPage from './EditMyPage/page';
import AllDiaries from './AllDiaries/page';


function App() {
  const [isNavVisible, setIsNavVisible] = useState(true);

  return (
    <div className="flex justify-center items-center w-full h-full bg-background">
      <div className="w-full h-full max-w-[402px] max-h-[874px] overflow-y-auto bg-white rounded-[20px] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <BrowserRouter>
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
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          {isNavVisible && <Footer />}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
