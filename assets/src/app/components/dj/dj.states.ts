import { Ng2StateDeclaration } from '@uirouter/angular';

import { DjComponent } from './dj.component';
import { BaseHeaderComponent } from '../includes/base/base-header/base-header.component';
import { BaseFooterComponent } from '../includes/base/base-footer/base-footer.component';
import { ProfileComponent } from './profile/profile.component';

export const djState: Ng2StateDeclaration = {
  parent: 'app', // declares that 'dj' is a child of 'app'
  name: 'dj',
  url: '/dj',
  redirectTo: 'dj.landing',
  views: {
    'header@app': {
      component: BaseHeaderComponent
    },
    'content@app': {
      component: DjComponent
    },
    'footer@app': {
      component: BaseFooterComponent
    }
  }
};

export const profileState: Ng2StateDeclaration = {
  name: 'dj.profile',
  url: '/profile',
  component: ProfileComponent
};

export const DJ_STATES = [
  djState,
  profileState
];
