import { Ng2StateDeclaration } from '@uirouter/angular';

import { BaseComponent } from './base.component';
import { LandingComponent } from './landing/landing.component';
import { BaseHeaderComponent } from '../includes/base/base-header/base-header.component';
import { BaseFooterComponent } from '../includes/base/base-footer/base-footer.component';

export const baseState: Ng2StateDeclaration = {
  parent: 'app', // declares that 'base' is a child of 'app'
  name: 'base',
  url: '/',
  redirectTo: 'base.landing',
  views: {
    'header@app': {
      component: BaseHeaderComponent
    },
    'content@app': {
      component: BaseComponent
    },
    'footer@app': {
      component: BaseFooterComponent
    }
  }
};

export const landingState: Ng2StateDeclaration = {
  name: 'base.landing',
  url: '',
  component: LandingComponent
};

export const BASE_STATES = [
  baseState,
  landingState,
];
