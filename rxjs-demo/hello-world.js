// import Rx from 'rxjs/Rx';  // ES6
var Rx = require('rxjs/Rx');  // CommonJS

Rx.Observable.of(1,2,30)
.subscribe(x => console.log(x));

