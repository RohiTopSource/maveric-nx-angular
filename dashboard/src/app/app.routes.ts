import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'analytics',
    loadChildren: () => import('analytics/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'refer',
    loadChildren: () => import('refer/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'login',
    loadChildren: () => import('login/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
