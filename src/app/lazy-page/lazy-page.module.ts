import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';

@NgModule({
  declarations: [LazyComponentComponent],
  imports: [
    CommonModule
  ]
})
export class LazyPageModule { }
