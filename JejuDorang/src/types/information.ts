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
  lodging: { lat: number; lng: number };
}
