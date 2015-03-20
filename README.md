# keyboards-tricks
Generic Trick Module
____________________________

1. Add the line below to document head
```
      <script src="trick.js"></script>
```
2. Assign trick keys and callback
```
      Trick.callback = function(){};
      Trick.keys = [];
```
3. Init trick module 
```
      Trick.init();
```
