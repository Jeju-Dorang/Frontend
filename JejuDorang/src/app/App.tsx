import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Main/page';
import SettingDorang from './SettingDorang/page';
import Activity from './Activity/page';
import Dorang from './Dorang/page';
import Footer from '@components/Footer';
import Stay from './Stay/page';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/settingDorang" element={<SettingDorang />}></Route>
        <Route path="/dorang" element={<Dorang />}></Route>
        <Route path="/activity" element={<Activity />}></Route>
        <Route path="/stay" element={<Stay />}></Route>
        {/* <Route path="/mypage" element={<MyPage />}></Route> */}
        {/* <Route path="/record" element={<Record />}></Route> */}
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
