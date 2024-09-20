import { createStore } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthStore } from '@type/authStore';
import { Achievement } from '@type/achievement';

export const useAuthStore = createStore(
  persist<AuthStore>(
    (set) => ({
      accessToken: null,
      setAccessToken: (accessToken: string) =>
        set({ accessToken: accessToken }),
      refreshToken: null,
      setRefreshToken: (refreshToken: string) =>
        set({ refreshToken: refreshToken }),
      logout: () =>
        set({
          memberName: null,
          memberComment: null,
          memberImage: null,
          achievement: null,
          characterImage: null,
          loding: { lat: 0, lng: 0 },
        }),
      memberName: null,
      setMemberName: (memberName: string) => set({ memberName: memberName }),
      characterImage: null,
      setCharacterImage: (characterImage: string) =>
        set({ characterImage: characterImage }),
      memberComment: null,
      setMemberComment: (memberComment: string) =>
        set({ memberComment: memberComment }),
      memberImage: null,
      setMemberImage: (memberImage: string) =>
        set({ memberImage: memberImage }),
      achievement: null,
      setAchievement: (achievement: Achievement[]) =>
        set({ achievement: achievement }),
      loding: { lat: 0, lng: 0 },
      setLoding: (loding: { lat: number; lng: number }) => set({ loding }),
    }),
    {
      name: 'userInfoStorage',
    },
  ),
);
