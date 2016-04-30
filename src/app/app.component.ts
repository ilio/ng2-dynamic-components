import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import 'normalize.css';
import './app.component.style.scss';
import {DynamicListComponent} from './dynamic-list/dynamic-list.component';
import {DynamicListItemTemplateComponent} from './dynamic-list/dynamic-list-item-template.component';

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [DynamicListComponent, DynamicListItemTemplateComponent],
  template: `
<h3>Inline</h3>
<div  *ngFor="#item of items">
  <div>
  Inline template item #: {{item}}
  </div>
</div>

<h3>List component with inline template</h3>
<dynamic-list [items]="items">
  <div template="#item">
      Inline template item #: {{item}}
  </div>
</dynamic-list> 

<h3>List component with component template</h3>
<dynamic-list [items]="items">
  <dynamic-list-item template="#item" [item]="item"></dynamic-list-item>
</dynamic-list> 
  `
})
@RouteConfig([
  {path: '/', name: 'Index', component: App, useAsDefault: true},
])
export class App {

  private items = [1, 2, 3, 4];

  constructor() {

  }
}
