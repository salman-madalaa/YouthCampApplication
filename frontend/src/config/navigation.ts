export interface NavigationItem {
  label: string;
  path: string;
}

export const navigationItems: NavigationItem[] = [
  {
    label: 'Dashboard',
    path: '/',
  },
  {
    label: 'Registrations',
    path: '/registrations',
  },
  {
    label: 'Users',
    path: '/users',
  },
  {
    label: 'Settings',
    path: '/settings',
  },
];