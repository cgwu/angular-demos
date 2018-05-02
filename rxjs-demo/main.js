require(["./domReady!", "./node_modules/@reactivex/rxjs/dist/global/Rx.min"], function (doc, Rx) {
    // alert('ready');
    // Rx.Observable.of(10,20,30).subscribe(x => console.log(x));

    var button = document.querySelector('button');
    
    // Rx.Observable.fromEvent(button, 'click')
    // .subscribe(()=> console.log(new Date() + 'clicked!'));

    // Rx.Observable.fromEvent(button, 'click')
    // .throttleTime(1000)
    // .scan(count => count + 1, 10)
    // .subscribe(count => console.log(`${new Date()} Clicked ${count} times.`));

    /*
    Rx.Observable.fromEvent(button, 'click')
    .throttleTime(1000)
    .map(event => event.clientX)
    .scan((count,clientx) => count + clientx, 0)
    .subscribe(count => console.log(`${new Date()} Clicked ${count} times.`));
    */

    /*
    var observable = Rx.Observable.create(function(observer){
        observer.next(1);
        observer.next(2);
        observer.next(3);
        setTimeout(()=>{
            observer.next(4);
            observer.complete();
        }, 3000);
    });
    console.log('just before subscribe');
    var subscription = observable.subscribe({
        next: x => console.log(new Date(), 'get value '+ x),
        error: err => console.error('something wrong occurred: ' + err),
        complete: () => console.log('done')
    });
    console.log('just after subscribe');
    // subscription.unsubscribe();
    */

    // var observable = Rx.Observable.from([10,20,30]);
    // var subscription = observable.subscribe(x => console.log(x));
    // subscription.unsubscribe();

    //A Subject is like an Observable, but can multicast to many Observers. 
    //Subjects are like EventEmitters: they maintain a registry of many listeners.
    var subject = new Rx.Subject();
    subject.subscribe({
        next: (v) => console.log('observer A: ' + v)
    });
    subject.subscribe({
        next: (v) => console.log('observer B: ' + v)
    });
    // subject.next(1);
    // subject.next(2);
    var observable = Rx.Observable.from([10,20,30]);
    observable.subscribe(subject);
});