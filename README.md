# FlexGrid
Less Utility to quickly generate precise liquid and px perfed grid layouts

 [EXAMPLE in example folder at http://htmlpreview.github.io/?https://github.com/andresgallo/FlexGrid/blob/master/example/index.html](http://htmlpreview.github.io/?https://github.com/andresgallo/FlexGrid/blob/master/example/index.html)

### USING FLEXGRID
To use FlexGrid first import Flexgrid into yourproject
```less
  @import (reference) 'FlexGrid';
  @import (reference) 'FlexGridFlickityPlugin' // add this one also if using flickety carousel in some of the grids
```

One imported just use *.FlexGridMakeSizes* mixin wherever you need a custom grid layout. This may be done for specific breakpoints or globally. 


##### EXAMPLE of a grid with 4 columns (25% wide) with 20px margins in between
```less
.GridContainer {
    .FlexGridMakeSizes(@margin: 20px, @width: 25%);
}
```

##### EXAMPLE of a grid with 2 columns (50%) with 20px between items verticall and 10 
```less
.GridContainer {
    .FlexGridMakeSizes(@margin: 20px 10px, @width: 50%);
}
```

##### EXAMPLE of a grid with items 300px wide and no margins 
```less
.GridContainer {
    .FlexGridMakeSizes(@margin: 0px, @width: 300px);
}
```

##### EXAMPLE enabling items to span 2 or three columns using data-flexspace
```less
.GridContainer {
    .FlexGridMakeSizes(@margin: 10px, @flexSpaces: 2 3, @width: 33.33%); 
}
```

##### ADVANCED Settings
*@sibling:* (defaults to ~'> *') In some cases such as when using in combination with carousel scripts, HTML markup may be inserted inbetween the grid container and the items... In those cases the default selector will not be able to correctly pick the children. In that case you can explicitly pass the a selector to identify these children items.

*@flexSpaces:* (defaults to 1 2 3 4 5 6) Mixin will enable the grid to use flexSpaces. Using [data-flexspace=n] where n is a number allows you to tell specific items to span multiple columns



