const fruits = ['Apple', 'Banana', 'Strawberry', 'Mango', 'Cherry'];
const start = 2;
const removedItems = fruits.splice(start);
console.log(fruits);
console.log(removedItems);

var a = [1,2,3,4,5];
var result = a.filter((n) => (n<2))
console.log(result);

a.forEach(element => {
    console.log(element);
});

for (const e of a) {
    console.log(e);
}
var obj = {
    name:"Aman",
    id:1232,
    fun:function(){
        console.log("HEllo");
    }
}
obj.fun();
for (const e in obj) {
    console.log(obj[e]);
}