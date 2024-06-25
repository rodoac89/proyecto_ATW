import { Routes } from '@angular/router';


// pages
import { AppGreetingComponent } from './app-greeting/app-greeting.component';

export const GreetingRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'greeting',
        component: AppGreetingComponent,
      },

    ],
  },
];
