const division = (a) => {
    return a / 2;
};
console.log("Division by 2 ==>", division(4));
console.log("-------------------------------");
const Sum = (num1, num2) => {
    return num1 + num2;
};
console.log("Sum of two number is==>", Sum(3, 5));
console.log("-------------------------------");
const stringLength = (str) => {
    console.log(`the length of "${str}" is:`, str.length);
};
let longestCityNameInTheWorld = "Taumatawhakatangihang";
stringLength(longestCityNameInTheWorld);
console.log("-------------------------------");
let alerts = [
    "Hey, you are awesome",
    "You are so wonderful",
    "What a marvel you are",
    "You're so lovely",
    "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES",
];
const showAlert = (name) => {
    console.log(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);
};
showAlert("Ghanshyam");
console.log("-------------------------------");
const a1 = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
];
let count = 0;
a1.forEach((a) => {
    let arr = a;
    // console.log(arr);
    console.log("row", count++);
    arr.forEach((b) => {
        console.log(b);
    });
});
console.log("-------------------------------");
const a3 = ["Hello", "Node", "Hello", "Js"];
const obj = [
    { name: "Dhruvil", fav: "sabka1", collegueExp: "best collegue ever" },
    { name: "Dhruvil", fav: "sabka", collegueExp: "best collegue ever" },
    { name: "Dhruv", fav: "sabka", collegueExp: "best collegue ever" },
];
const mapp = [...new Map(obj.map((item) => [item["name"], item])).values()];
console.log(obj.map((item) => [item["name"], item]));
console.log("set obj====>", mapp);
const set = [...new Set(a3)];
console.log(set);
console.log("-------------------------------");
const union = (arr1, arr2) => {
    const arrrset = new Set([...arr1, ...arr2]);
    const ar = [...arrrset];
    console.log(ar.sort());
};
console.log(union([1, 2, 3, 4, 5], [2, 3, 7, 8, 9, 6]));
console.log("-------------------------------");
const library = [
    { author: "Bill Gates", title: "c The Road Ahead", libraryID: 1254 },
    { author: "Steve Jobs", title: " a Walter Isaacson", libraryID: 4264 },
    {
        author: "Suzanne Collins",
        title: "d Mockingjay: The Final Book of The Hunger Games",
        libraryID: 3245,
    },
];
let sortLibrabry = library.sort((a, b) => {
    let aa = a.title;
    let bb = b.title;
    if (aa < bb) {
        return -1;
    }
    if (aa > bb) {
        return 1;
    }
    else
        return 0;
});
console.log(sortLibrabry);
console.log("-------------------------------");
const arrayObject = (...a) => {
    console.log(a);
};
arrayObject(1, 2, 3, 4);
console.log("-------------------------------");
let a11 = [1, 2, 3, 4, 5];
let a22 = [];
console.log("Orgignal Array==>", a11);
for (let i = a11.length - 1; i >= 0; i--) {
    a22.push(a11[i]);
}
console.log("reversed Array==>", a22);
console.log("-------------------------------");
let temp = "";
let abc = [];
const alph = (start1, end1, gap) => {
    let i;
    const start = start1.charCodeAt(0);
    const end = end1.charCodeAt(0);
    for (i = start; i <= end; i += gap + 1) {
        if (gap > 0) {
            abc.push(String.fromCharCode(i));
        }
    }
    console.log(abc);
};
alph("G", "Z", 2);
console.log("-------------------------------");
const flatArr = [1, 2, [3, 4, [5]]];
console.log(flatArr.flat(Infinity));
console.log("-------------------------------");
// const a111 = [1, 2, 3, 4];
// const suma111 = a111.reduce((a, b) => {
//   return a + b;
// });
// console.log(suma111);
// console.log("-------------------------------");
const sumAll = (array) => {
    const suma111 = array.reduce((a, b) => {
        return a + b;
    });
    console.log(suma111);
};
sumAll([1, 2, 4, 5, 7]);
console.log("-------------------------------");
const mergeObj = (obj1, obj2) => {
    const objj = Object.assign(Object.assign({}, obj1), obj2);
    console.log(objj);
};
mergeObj({ a: 1, b: 2 }, { c: 3, d: 4 });
console.log("-------------------------------");
// const makeobj=new Map([['a', 1], ['b', 2]])
// console.log(Object.fromEntries(makeobj));
// console.log("-------------------------------");
const makeObj = (array) => {
    const makeobj = new Map(array);
    console.log(Object.fromEntries(makeobj));
};
makeObj([
    ["a", 1],
    ["b", 2],
    ["c", 3],
]);
console.log("-------------------------------");
const fullname = (fullname, fun2) => {
    return fullname + " " + fun2;
};
const surname = (surname) => {
    return surname;
};
console.log(fullname("Ghanshyam", surname("Vegad")));
console.log("-------------------------------");
const randamarr = [
    "Arsenal",
    "Manchester United",
    "Chelsea",
    "Liverpool",
    "Leicester City",
    "Manchester City",
    "Everton",
    "Fulham",
    "Cardiff City",
];
const random = Math.floor(Math.random() * randamarr.length);
// console.log(random);
const toDelete = randamarr[random];
// console.log(toDelete);
let demoarr = [];
demoarr = randamarr.filter((x) => x != toDelete);
console.log(demoarr);
console.log("-------------------------------");
const deepcopy = (array) => {
    let deepcopy = array;
    console.log(deepcopy);
    console.log(array);
    if (deepcopy === array) {
        console.log("true");
    }
    else {
        console.log("false");
    }
};
deepcopy([1, 2, 3, 4]);
//# sourceMappingURL=JavaScript.js.map