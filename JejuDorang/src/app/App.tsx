import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Main/page';
import SettingDorang from './SettingDorang/page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/settingDorang" element={<SettingDorang />}></Route>
        {/* <Route path="/dorang" element={<Dorang />}></Route> */}
        {/* <Route path="/activitiy" element={<Activitiy />}></Route> */}
        {/* <Route path="/stay" element={<Stay />}></Route> */}
        {/* <Route path="/mypage" element={<MyPage />}></Route> */}
        {/* <Route path="/record" element={<Record />}></Route> */}
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
