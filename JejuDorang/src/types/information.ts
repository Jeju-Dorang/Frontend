import { Achievement } from './achievement';

export interface Information {
  memberName: string;
  email: string;
  memberComment: string;
  memberImage: string;
  characterImage: string;
  achievement: Achievement[];
  loding: [lat: number, lng: number];
}