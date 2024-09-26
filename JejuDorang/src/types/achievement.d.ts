type achievementStatus = 'YET'|'DONE';

export interface AchievementData {
  achievement: string;
  content: string;
  title: string;
}

export interface Achievement {
  achievementIcon: string | null;
  achievementName: string | null;
}

export interface FullAchievementData {
  achievementId : number;
  achievementIcon?: string;
  achievementName: string;
  achievementComment: string;
  maxAchieve : number;
  achievementCnt : number;
  achievementStatus? : achievementStatus;
  title? : string;
}
