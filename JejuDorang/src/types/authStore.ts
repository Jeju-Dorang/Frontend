import { Achievement } from '@type/achievement';

export type AuthStore = {
  logout: () => void;

  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
  refreshToken: string | null;
  setRefreshToken: (refreshToken: string) => void;
  memberName: string | null;
  setMemberName: (memberName: string) => void;
  memberComment: string | null;
  setMemberComment: (memberComment: string) => void;
  characterImage: string | null;
  setCharacterImage: (characterImage: string) => void;
  memberImage: string | null;
  setMemberImage: (memberImage: string) => void;
  achievement: Achievement[] | null;
  setAchievement: (achievement: Achievement[]) => void;
  loding: {
    lat: number;
    lng: number;
  };
  setLoding: (loding: { lat: number; lng: number }) => void;
};
