# responsive-pinterest-style-layout-with-javascript
This script helps you build a page that is as responsive as pinterest site.


## Object Properties
This Object was defined with five properties:
- column_count: the maximun number of column available
- column_width: width of column
- space: distance between two columns
- container: id (or class name) of container tag
- pin_tag: class name of article tags


## Definition
The following example also creates a new PinterestStyle object with five properties:

```sh
var pinStyle = new PinterestStyle({
	column_count: 4					// 4 column
,	column_width: 250				// 250 px
,	space: 14						// 14 px
, 	container: '#main-content'		// id of container tag
,	pin_tag: '._tag'				// class name of article tags
});
```
