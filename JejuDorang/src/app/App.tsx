import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Main/page';
import SettingDorang from './SettingDorang/page';
import Activity from './Activity/page';
import Login from './Login/page';
import Dorang from './Dorang/page';
import Footer from '@components/Footer';
import { useState } from 'react';




function App() {
  const [isNavVisible, setIsNavVisible] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/kakao/callback" element={<Main />} />
        <Route path="/settingDorang" element={<SettingDorang />} />
        <Route path="/dorang" element={<Dorang setIsNavVisible={setIsNavVisible}/>}></Route>
        <Route path="/activity" element={<Activity />} />
        {/* <Route path="/stay" element={<Stay />}></Route> */}
        {/* <Route path="/mypage" element={<MyPage />}></Route> */}
        {/* <Route path="/record" element={<Record />}></Route> */}
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
      {/* 챗봇 페이지에서만 footer 제외 */}
      {isNavVisible && <Footer />}
    </BrowserRouter>
  );
}

export default App;
