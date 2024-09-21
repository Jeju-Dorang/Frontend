import { Achievement } from './achievement';

export interface AuthStore {
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
  refreshToken: string | null;
  setRefreshToken: (refreshToken: string) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
  memberName: string | null;
  setMemberName: (memberName: string) => void;
  characterImage: string | null;
  setCharacterImage: (characterImage: string) => void;
  memberComment: string | null;
  setMemberComment: (memberComment: string) => void;
  memberImage: string | null;
  setMemberImage: (memberImage: string) => void;
  achievement: Achievement[] | null;
  setAchievement: (achievement: Achievement[]) => void;
  loding: { lat: number; lng: number };
  setLoding: (loding: { lat: number; lng: number }) => void;
}
