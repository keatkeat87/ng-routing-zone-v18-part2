import { ApplicationRef, Component, inject, Injector, TemplateRef, viewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private readonly templateRef = viewChild.required('template', { read: TemplateRef });
  private readonly viewContainerRef = viewChild.required('container', { read: ViewContainerRef });

  private readonly injector = inject(Injector);
  navigate(page: string) {
    this.viewContainerRef().length !== 0 && this.viewContainerRef().clear();
    this.viewContainerRef().createEmbeddedView(this.templateRef(), { $implicit: page });
    // this.injector.get(ApplicationRef).tick();
  }
}
