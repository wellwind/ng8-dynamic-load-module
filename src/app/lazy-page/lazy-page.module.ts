import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';

@NgModule({
  declarations: [LazyComponentComponent],
  imports: [CommonModule],
  entryComponents: [LazyComponentComponent]
})
export class LazyPageModule {
  static EntryComponent = LazyComponentComponent;
}
