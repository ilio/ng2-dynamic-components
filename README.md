# angular 2 dynamic components
Example of dynamic list with item template [live example](https://plnkr.co/edit/ollxzUhka77wIXrJGA9t?p=preview)

You can generate list in 3 ways: 

1. Simple ngFor for simple cases:
  ```html
  <div *ngFor="#item of items">
    Inline template item #: {{item}}
  </div>
  ```

2. You can create a list component with inline template which can reuse list logic:
  ```html  
  <dynamic-list [items]="items">
    <div template="#item">
        Inline template item #: {{item}}
    </div>
  </dynamic-list> 
  ```

3. You can create a list component with item template component:
  ```html
  <dynamic-list [items]="items">
    <dynamic-list-item template="#item" [item]="item"></dynamic-list-item>
  </dynamic-list> 
  ```
  

[dynamic-list component src](https://github.com/ilio/ng2-dynamic-components/blob/master/src/app/dynamic-list/dynamic-list.component.ts)

[dynamic-list-item component src](https://github.com/ilio/ng2-dynamic-components/blob/master/src/app/dynamic-list/dynamic-list-item-template.component.ts)

Thanks to AngularClass for great project template for [ng2+webpack](https://github.com/AngularClass/angular2-webpack-starter) 
