
import AchievementBox from "../../components/AchievementBox";

const Main = () => {
  const achievement: string = '흑돼지';
  const content:string = "제주의 명물, 흑돼지! 이정도 먹었으면 당신은 흑돼지 킬러"
  const title:string = "운동"

  return (
    <>
    <AchievementBox 
        achievement={achievement}
        content={content}
        title={title}
      />
    </>
  );
};

export default Main;
