import {Component, Input} from 'angular2/core';
@Component({
  selector: 'dynamic-list-item',
  template: `<div>
Template Item #:{{item}}
</div>`
})
export class DynamicListItemTemplateComponent {
  @Input() public item: number;
}
