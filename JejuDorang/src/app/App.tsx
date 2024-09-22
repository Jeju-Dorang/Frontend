import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { useAuthStore } from '@states/useAuthStore';
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
      <div className="flex justify-center items-center w-full min-h-screen bg-background">
        <div className="w-full h-full min-h-screen max-w-[402px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] custom:rounded-[20px] flex flex-col">
          <div className="flex-grow overflow-y-auto">
            <Routes>
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
          {isNavVisible && <Footer />}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
