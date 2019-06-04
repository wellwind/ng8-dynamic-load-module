import { Compiler, Component, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private compiler: Compiler, private injector: Injector) {}

  ngOnInit() {
    import('./lazy-page/lazy-page.module').then(loadedModule => {
      const lazyPageModule = loadedModule.LazyPageModule;
      this.compiler.compileModuleAsync(lazyPageModule).then(moduleFactory => {
        const moduleRef = moduleFactory.create(this.injector);
        console.log(moduleRef);
      });
    });
  }
}
