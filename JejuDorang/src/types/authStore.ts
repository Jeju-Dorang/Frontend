import { Achievement } from '@type/achievement';

export type AuthStore = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;

  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
  refreshToken: string | null;
  setRefreshToken: (refreshToken: string) => void;
  memberName: string | null;
  setMemberName: (memberName: string) => void;
  email: string | null;
  setEmail: (email: string) => void;
  memberComment: string | null;
  setMemberComment: (memberComment: string) => void;
  characterImage: string | null;
  setCharacterImage: (characterImage: string) => void;
  memberImage: string | null;
  setMemberImage: (memberImage: string) => void;
  achievement: Achievement | null;
  setAchievement: (achievement: Achievement) => void;
  loading: {
    lat: number;
    lng: number;
  };
  setLoading: (loading: { lat: number; lng: number }) => void;
};
