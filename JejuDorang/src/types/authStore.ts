import { Achievement } from './achievement';
import { Information } from './information';

export interface AuthStore {
  accessToken: string | null;
  setAccessToken: (accessToken: string | null) => void;
  refreshToken: string | null;
  setRefreshToken: (refreshToken: string) => void;
  setMainData: (data: Information) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
  memberName: string | null;
  setMemberName: (memberName: string) => void;
  characterImage: {
    itemImage: number;
    petImage: number;
    backgroundImage: number;
  } | null;
  setCharacterImage: (characterImage: {
    itemImage: number;
    petImage: number;
    backgroundImage: number;
  }) => void;
  memberComment: string | null;
  setMemberComment: (memberComment: string) => void;
  memberImage: string | null;
  setMemberImage: (memberImage: string) => void;
  achievement: Achievement[] | null;
  setAchievement: (achievement: Achievement[]) => void;
  lodging: { lat: number; lng: number };
  setLodging: (lodging: { lat: number; lng: number }) => void;
  threadId: string | null;
  setThreadId: (threadId : string) => void;
  interest : string[];
  setInterest : (interest : string[]) => void;
}
