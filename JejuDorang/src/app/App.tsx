<<<<<<< HEAD
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
=======
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { useAuthStore } from '@states/useAuthStore';
>>>>>>> 2cf21a4fb447938483f77fad1a671e63834aebef
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
<<<<<<< HEAD
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
=======
  const [isNavVisible, setIsNavVisible] = useState(true);
  const { accessToken, refreshToken } = useAuthStore();

  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    if (!accessToken && !refreshToken) {
      return <Navigate to="/login" replace />;
    }
    return <Fragment>{children}</Fragment>;
  };

  return (
    <BrowserRouter>
>>>>>>> 2cf21a4fb447938483f77fad1a671e63834aebef
      <div className="flex justify-center items-center w-full min-h-screen bg-background">
        <div className="w-full h-full min-h-screen max-w-[402px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] custom:rounded-[20px] flex flex-col">
          <div className="flex-grow overflow-y-auto">
            <Routes>
<<<<<<< HEAD
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
              <Route path="/mypage/allDiaries" element={<AllDiaries />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          {isNavVisible && <Footer currentPage = {currentPage}/>}
        </div>
      </div>
    // </BrowserRouter>
=======
              <Route path="/login" element={<Login />} />
              <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Main />
                  </PrivateRoute>
                }
              />
              <Route
                path="/settingDorang"
                element={
                  <PrivateRoute>
                    <SettingDorang />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dorang"
                element={
                  <PrivateRoute>
                    <Dorang setIsNavVisible={setIsNavVisible} />
                  </PrivateRoute>
                }
              />
              <Route
                path="/activity"
                element={
                  <PrivateRoute>
                    <Activity />
                  </PrivateRoute>
                }
              />
              <Route
                path="/stay"
                element={
                  <PrivateRoute>
                    <Stay />
                  </PrivateRoute>
                }
              />
              <Route
                path="/record"
                element={
                  <PrivateRoute>
                    <Record />
                  </PrivateRoute>
                }
              />
              <Route
                path="/mypage"
                element={
                  <PrivateRoute>
                    <MyPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/mypage/edit"
                element={
                  <PrivateRoute>
                    <EditMyPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/allDiaries"
                element={
                  <PrivateRoute>
                    <AllDiaries />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          {isNavVisible && <Footer />}
        </div>
      </div>
    </BrowserRouter>
>>>>>>> 2cf21a4fb447938483f77fad1a671e63834aebef
  );
}

export default App;
