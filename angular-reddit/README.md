ref:
    https://github.com/xiaomoinfo/Angular2 (更好)
使用的UI库： https://semantic-ui.com/

启动：
ng serve --host 192.168.1.80 --port 8080

测试工程 ng-book2:
ng new angular-reddit
You can `ng set --global packageManager=cnpm`.

ng generate component article

Building our app for Production:
ng build --target=production --base-href /

$ ng generate --help
Available schematics:
    application
    class
    component
    directive
    enum
    guard
    interface
    module
    pipe
    service
    universal
    appShell

$ ng generate module products
  create src/app/products/products.module.ts (192 bytes)

$ ng generate component --help
ng generate component [name] <options...>
  
$ cd src/app/products

指定子模块
$ ng generate component main --module products
子模块参考文章：
https://blog.csdn.net/zhao_tuo/article/details/72822105

生成guard判断是否登陆:
ng g guard logged-in

REST WIKI:
https://en.wikipedia.org/wiki/Representational_state_transfer

1. Uniform Resource Locator (URL) Collection, such as https://api.example.com/resources/ 	
GET:
    List the URIs and perhaps other details of the collection's members. 	
PUT:
    Replace the entire collection with another collection. 	
PATCH:
    Not generally used 	
POST:
    Create a new entry in the collection. The new entry's URI is assigned automatically and is usually returned by the operation.[17] 	
DELETE:    
    Delete the entire collection.

2.Element, such as https://api.example.com/resources/item17 	
GET:
    Retrieve a representation of the addressed member of the collection, expressed in an appropriate Internet media type. 	
PUT:
    Replace the addressed member of the collection, or if it does not exist, create it. 	
PATCH:
    Update the addressed member of the collection. 	
POST:
    Not generally used. Treat the addressed member as a collection in its own right and create a new entry within it.[17] 	
DELETE:
    Delete the addressed member of the collection.




------------------
# AngularReddit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
