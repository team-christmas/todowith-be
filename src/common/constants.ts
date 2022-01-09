export const ON_DELETE_OPTIONS = {
  CASCADE: 'CASCADE',
  SET_NULL: 'SET NULL',
  NO_ACTION: 'NO ACTION'
} as const;

export const APP_THEMES = {
  SYSTEM: 'system',
  LIGHT: 'light',
  DARK: 'dark'
} as const;

export const NOTIFICATION_TYPES = {
  LIKES_RECEIVED: 'likes received',
  FOLLOWING_COMPLETES: 'following completes'
} as const;

export const SOCIAL_LOGIN_PLATFORMS = {
  KAKAO: 'kakao'
} as const;

// TODO Update goal colors
export const GOAL_COLORS = {
  GRAY: 'gray'
} as const;

export const GOAL_PUBLIC_OPTIONS = {
  FULL_PUBLIC: 'full public',
  SOME_PUBLIC: 'some public',
  PRIVATE: 'private'
} as const;

// TODO Update sticker types
export const STICKER_TYPES = {
  THUMS_UP: 'thums up'
} as const;
