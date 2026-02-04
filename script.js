let names = [0, 1, 2, 3, 4, 5];
let a = 6;
names.splice(2, 1)
names.shift(6)
console.log(names)
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}



function myFunc(a) {
    c = 4 * a
    return c
}


let v = myFunc(4)
console.log(v)

const myFUN = (a, b) => { return a + b }

const fumC = function (a, b) {
    let c = 5
    return c
}


let cat = {
    "name": "cat", "age": 5, "weight": 7, "speed": 1, "run": function () {
        console.log("run");
    }
}


function Cat(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.run = function(){
        console.log(this.name, "run")
    }
}
let cat1 = new Cat("cat", 7, 1);
let cat2 = new Cat("cotik", 5, 3);
console.log(cat1.name);
console.log(cat2.name)
cat1.run();
cat2.run();
