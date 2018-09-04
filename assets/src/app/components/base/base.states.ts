import { Ng2StateDeclaration } from '@uirouter/angular';

import { BaseComponent } from './base.component';
import { LandingComponent } from './landing/landing.component';

export const baseState: Ng2StateDeclaration = {
  parent: 'app', // declares that 'base' is a child of 'app'
  name: 'base',
  url: '/',
  component: BaseComponent,
  redirectTo: 'base.landing',
};

export const landingState: Ng2StateDeclaration = {
  name: 'base.landing',
  url: '',
  component: LandingComponent,
};

export const BASE_STATES = [
  baseState,
  landingState,
];
