const arrays= {a: "1", b: "3", c:"2"};
const object=(Object.keys(arrays).sort())
const values=(Object.values(arrays).sort());
console.log("[[" + object + "]" + " " + "[" + values + "]]");

const arrays2 = {a:"Apple", b: "Microsoft", c: "Google"};
const object2=(Object.keys(arrays2).sort());
const values2=(Object.values(arrays2).sort());
console.log("[[" + object2 + "]" + " " + "[" + values2 + "]]");

const arrays3= { key1: "true", key2: "false", key3: "undefined"};
const object3=(Object.keys(arrays3).sort());
const values3=(Object.values(arrays3).sort());
console.log("[[" + object3 + "]" + " " + "[" + values3 + "]]");  