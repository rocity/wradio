import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';

import { LandingComponent } from './landing/landing.component';
import { BaseComponent } from './base.component';

import { BASE_STATES } from './base.states';

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: BASE_STATES }),
    CommonModule
  ],
  declarations: [LandingComponent, BaseComponent]
})
export class BaseModule { }
