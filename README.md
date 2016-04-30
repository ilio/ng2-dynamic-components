# angular 2 dynamic components
Example of dynamic list with item template [live example](https://plnkr.co/edit/ollxzUhka77wIXrJGA9t?p=preview)

You can generate list in 3 ways: 

1. Simple ngFor for simple cases:
  ```html
  <div  *ngFor="#item of items">
    Inline template item #: {{item}}
  </div>
  ```

2. You can create a list component with inline template which can reuse logic:
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
