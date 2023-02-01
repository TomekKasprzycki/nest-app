export const ROLE = {
  user: 'ROLE_USER',
  admin: 'ROLE_ADMIN',
} as const;

type ObjectValues<T> = T[keyof T];

export type Role = ObjectValues<typeof ROLE>;
