import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { UIRouterModule, UIView } from '@uirouter/angular';

import { AppComponent } from './app.component';
import { routerConfigFn } from './router.config';

import { APP_STATES } from './app.states';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: false,
      otherwise: '/not-found',
      config: routerConfigFn,
    }),
    BrowserModule,

    SharedModule,
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
  ],
  bootstrap: [UIView]
})
export class AppModule { }
