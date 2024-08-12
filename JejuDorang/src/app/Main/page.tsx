import AchievementBox from '@components/AchievementBox';
import Profile from '@components/Profile/index';
import StayBox from '@components/StayBox';

const Main = () => {
  return (
    <>
      <Profile name="손성호" email="shson1217@naver.com" dDay={27} />
      <hr />
      <StayBox
        name = '카세로지'
        distance = '530m'
        location = '제주특별자치도 서귀포시 표선면 가시로 383'
        description = '표선에 위치한 럭셔리 호텔, 레스토랑 및 바/라운지 이용 가능'
        />
      <AchievementBox
        achievement='흑돼지 킬러'
        content='제주의 명물, 흑돼지! 이정도 먹었으면 당신은 흑돼지 킬러'
        title='운동'
        />
    </>
  );
};

export default Main;
