/*
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Reflect
*/

const person = {
  name: "basyura",
  age: -1,
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    return Reflect.get(obj, prop);
  },
  set: (obj, prop, value) => {
    Reflect.set(obj, prop, value);
  },
});

console.log(personProxy); //=> { name: 'basyura', age: -1 }
console.log(personProxy.name); //=> basyura
personProxy.age = 99;
console.log(personProxy.age); //=> 99

console.log(Reflect.has(personProxy, "name")); //=> true
console.log(Reflect.has(personProxy, "hoge")); //=> false

const hogeProxy = {
  _hoge: null,
  set hoge(v) {
    this._hoge = v;
  },
  get fuga() {
    return this._hoge;
  },
};

hogeProxy.hoge = "(=ΦωΦ)";
console.log(hogeProxy.hoge); //=> undefined
console.log(hogeProxy._hoge); //=> (=ΦωΦ)
console.log(hogeProxy.fuga); //=> (=ΦωΦ)
