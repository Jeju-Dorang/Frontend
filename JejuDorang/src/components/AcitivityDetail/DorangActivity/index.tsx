import dorangProfile from '#img/dorangProfile.webp';
import info from '#img/info.svg';
import refresh from '#img/refresh.webp';
import AchievementBox from '@components/AchievementBox';
import { AchievementData } from '@type/achievement';


// api 연결할 때 바꿀 예정
const userName:string = "김제주";
const achievements:number = 5;

const achievementData: AchievementData[] = [
    { achievement: '흑돼지', content: "제주의 명물, 흑돼지! 이정도 먹었으면 당신은 흑돼지 킬러", title: "운동" },
    { achievement: '흑돼지', content: "제주의 명물, 흑돼지! 이정도 먹었으면 당신은 흑돼지 킬러", title: "운동" },
    { achievement: '흑돼지', content: "제주의 명물, 흑돼지! 이정도 먹었으면 당신은 흑돼지 킬러", title: "운동" },
    { achievement: '흑돼지', content: "제주의 명물, 흑돼지! 이정도 먹었으면 당신은 흑돼지 킬러", title: "운동" },
];
//

const DorangAcitivity= () => {

    return(
        <>
            <div className="w-[100%] h-[60px] inline-flex pl-[27px] pr-[181px] items-start gap-[8px] flex-col">
                <h1 className = "font-semibold text-[20px] text-black">
                    도랑이의 추천
                </h1>
                <h3 className = "font-semibold text-[13px] text-gray-dg">
                    도랑이의 추천 듣고 뱃지 받자
                </h3>
            </div>

            <div className="relative top-[21px] w-[345px] h-[118px] left-[15px] bg-[#F3F3F3] rounded-[15px]">
                <img src={dorangProfile} alt="도랑이 프로필" className = "absolute top-[11px] left-[14px] w-[95px] h-[95px]" />
                <p className='absolute top-[44px] left-[118px] text-[13px] font-bold'>
                    <span className="text-primary-blue">{userName}</span> 님은 현재 <span className="text-primary-blue">{achievements}개</span> 업적을 달성했어요!
                </p>
                <p className='absolute top-[68px] left-[118px] text-[12px] font-semibold'>
                    앞으로 이런 업적들도 도전해보는게 어떨까요?
                </p>
            </div>
            

            <img src={info} alt="info" className='absolute top-[312px] left-[26px] w-[20px] h-[20px]' />
            <p className='absolute top-[317px] left-[56px] text-[8px] font-medium text-gray-dg'>
                인증은, 스토리에 태그를 선택하셔서 글을 작성해주세요!
            </p>
            <button>
                <img src={refresh} alt="refresh" className='absolute top-[307px] left-[332px] w-[20px] h-[29px]' />
            </button>

            <div className='absolute w-[390px] h-[408px] top-[335px] flex flex-col gap-[5px] mt-[24px]'>
                {achievementData.map((data, index) => (
                    <AchievementBox
                        key={index}
                        achievement={data.achievement}
                        content={data.content}
                        title={data.title}
                    />
                ))}
            </div>

        </>
    );
}

export default DorangAcitivity;