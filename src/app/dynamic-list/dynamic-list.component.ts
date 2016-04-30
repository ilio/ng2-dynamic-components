import {Component, TemplateRef, ContentChild, Input} from 'angular2/core';
@Component({
  selector: 'dynamic-list',
  template: `<div *ngFor="#item of items" *ngForTemplate="itemTemplate"></div>`
})
export class DynamicListComponent {
  
  @ContentChild(TemplateRef)
  public itemTemplate: TemplateRef;

  @Input()
  public items: number[];
}
