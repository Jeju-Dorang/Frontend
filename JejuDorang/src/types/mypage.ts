import { FullAchievementData } from './achievement';
import { Diary } from './diary';

export interface mypage {
  memberName: string;
  memberComment: string;
  profileImage: string;
  lodgingAddress: string;
  diaries?: Diary[];
  achievements: FullAchievementData[];
}

export interface mypageProfile {
  memberName: string;
  memberComment: string;
  profileImage: string;
  lodgingAddress: string;
}
