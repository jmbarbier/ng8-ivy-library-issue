# [SOLVED] 

- don't use enableIvy in library
- clean node_modules & .yalc between tries as ngcc is messing around



# Angular 8 rc.2 + ivy : library problem


Steps to produce these two repositories

using 

    Angular CLI: 8.0.0-rc.2
    Node: 10.15.3
    OS: linux x64

```bash
ng new --enable-ivy testlib
ng new --enable-ivy testclient
```



## Prepare & publish a library using cli
cd testlib
ng g library mylib
cd projects/mylib/src/lib
```

then

- add a little *ngIf in mylib.component.ts template
- add CommonModule import to mylib.module.ts

```bash
cd ../../../../
ng build mylib

# i'm using yalc https://github.com/whitecolor/yalc
# but we can also rsync dist/mylib folder to testclient node_modules 
cd dist/mylib
yalc publish 
```


## Use this library

```bash
# in testclient folder, add the library
yalc add mylib
yalc update
```

Then use it : 

- add `<lib-mylib></lib-mylib>` to app.component.html 
- add MylibModule to app.module.ts


then ng serve...

```
core.js:7182 ERROR Error: Template error: Can't bind to 'ngIf' since it isn't a known property of 'p'.
    at createUnknownPropertyError (core.js:12560)
    at elementPropertyInternal (core.js:12426)
    at Module.ɵɵproperty (core.js:16519)
    at MylibComponent_Template (mylib.js:24)
    at executeTemplate (core.js:11998)
    at checkView (core.js:13349)
    at componentRefresh (core.js:13113)
    at refreshChildComponents (core.js:11701)
    at refreshDescendantViews (core.js:11607)
    at checkView (core.js:13350)
```
