import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('content', { static: false, read: ViewContainerRef })
  container: ViewContainerRef;

  componentRef: ComponentRef<any>;
  isFirst: boolean;
  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    this.createComponent();
  }

  createComponent() {
    this.container.clear();

    const component = this.isFirst
      ? FirstComponentComponent
      : SecondComponentComponent;
    const factory = this.resolver.resolveComponentFactory(component);
    this.componentRef = this.container.createComponent(factory);
  }

  changeContent() {
    this.isFirst = !this.isFirst;
    this.createComponent();
  }
}
