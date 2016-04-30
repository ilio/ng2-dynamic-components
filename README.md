# angular 2 dynamic components
Example of dynamic list with item template [live example](https://plnkr.co/edit/ollxzUhka77wIXrJGA9t?p=preview)

You can generate list in 3 ways: 

1. Simple ngFor for simple cases ```html
<div  *ngFor="#item of items">
  Inline template item #: {{item}}
</div>
```
2. You can create list component with inline template which can reuse login
```html  
<dynamic-list [items]="items">
  <div template="#item">
      Inline template item #: {{item}}
  </div>
</dynamic-list> 
```
