

```js
var myObject = {
    foo: 'bar',
    func: function() {
        // {this:myObject, self:this}
        var self = this;
        console.log(this.foo); // bar
        console.log(self.foo); // bar
        (function() {
            // {this:window}
            console.log(this.foo); // undefined
            console.log(self.foo) // 作用域链向上查找 bar
        })()
    }
}

myObject.func();
```



```js
var hero = {
    _name: 'JOhn',
    getSec: function() {
        return this._name;
    }
}

var stole = hero.getSec;
console.log(stole()); // undefined
console.log(hero.getSec()); //John
```

