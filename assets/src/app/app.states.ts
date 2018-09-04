import { AppComponent } from './app.component';

export const appState = {
  name: 'app',
  redirectTo: 'welcome',
  component: AppComponent,
};


export const baseFutureState = {
  name: 'base.**',
  url: '/',
  loadChildren: './components/base/base.module#BaseModule'
};

export const APP_STATES = [
  appState,

  baseFutureState,
];
