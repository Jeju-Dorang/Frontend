import { Achievement } from './achievement';

export interface Information {
  memberName: string;
  memberComment: string;
  memberImage: string;
  characterImage: {
    itemImage: number;
    petImage: number;
    backgroundImage: number;
  };
  achievement: Achievement[];
  loding: { lat: number; lng: number };
}
