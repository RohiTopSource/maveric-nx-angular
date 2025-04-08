import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'refer',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./remote-entry/entry.routes').then((m) => m.remoteRoutes),
      },
      {
        path: 'feature',
        loadComponent: () =>
          import('./remote-entry/feature/feature.component').then(
            (m) => m.FeatureComponent
          ),
        children: [
          {
            path: 'forms',
            loadComponent: () =>
              import('./remote-entry/feature/forms/forms.component').then(
                (m) => m.FormsComponent
              ),
          },
        ],
      },
    ],
  },
];