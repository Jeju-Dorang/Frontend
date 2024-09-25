import { Achievement } from './achievement';

export interface Information {
  memberName: string;
  memberComment: string;
  memberImage: string;
  characterImage: {
    itemImage: string;
    petImage: string;
    backGroundImage: string;
  };
  achievement: Achievement[];
  loding: { lat: number; lng: number };
}
