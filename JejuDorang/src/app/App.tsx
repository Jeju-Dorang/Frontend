import { Routes, Route, useLocation } from 'react-router-dom';
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
import RecommendStay from './RecommendStay/page';

function App() {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<string>('');
  const location = useLocation();


  useEffect(() => {
    // Footer에 넘길 currentPage
    const pathSegments : string[] = location.pathname.split('/');
    const currentPagePath = pathSegments[1];
    if (currentPagePath === '' || currentPagePath ==='settingDorang') {
      setCurrentPage('/')
    } else {
      setCurrentPage(currentPagePath)
    }

    // 특정 경로에서 Footer를 숨기기
    if (location.pathname === '/login' || location.pathname === '/auth/kakao/callback') {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
  }, [location]);



  return (
    // <BrowserRouter>
      <div className="flex justify-center items-center w-full min-h-screen bg-background">
        <div className="w-full h-full min-h-screen max-w-[402px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] custom:rounded-[20px] flex flex-col">
          <div className="flex-grow overflow-y-auto ">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
              <Route path="/settingDorang" element={<SettingDorang />} />
              <Route
                path="/dorang"
                element={<Dorang setIsNavVisible={setIsNavVisible} />}
              />
              <Route
                path="/stay/recommend"
                element={
                  <PrivateRoute>
                    <RecommendStay />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          {isNavVisible && <Footer currentPage = {currentPage}/>}
        </div>
      </div>
    // </BrowserRouter>
  );
}

export default App;
