import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { DjComponent } from './dj.component';
import { SharedModule } from '../../shared/shared.module';
import { UIRouterModule } from '@uirouter/angular';

import { DJ_STATES } from './dj.states';

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: DJ_STATES }),
    CommonModule,

    SharedModule,
  ],
  declarations: [DashboardComponent, ProfileComponent, DjComponent]
})
export class DjModule { }
