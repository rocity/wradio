import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseHeaderComponent } from './base/base-header/base-header.component';
import { BaseFooterComponent } from './base/base-footer/base-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BaseHeaderComponent, BaseFooterComponent]
})
export class IncludesModule { }
