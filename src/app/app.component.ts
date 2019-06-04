import { Compiler, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lazyModuleFactory: any;
  lazyComponent: any;

  constructor(private compiler: Compiler) {}

  loadComponent() {
    import('./lazy-page/lazy-page.module').then(loadedModule => {
      const lazyPageModule = loadedModule.LazyPageModule;
      this.compiler.compileModuleAsync(lazyPageModule).then(moduleFactory => {
        this.lazyModuleFactory = moduleFactory;
        this.lazyComponent = lazyPageModule.EntryComponent;
      });
    });
  }
}
