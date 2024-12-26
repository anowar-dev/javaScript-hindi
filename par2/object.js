
const newSymble = Symbol("keay1")

const username = {
    name: "Anower",
    email: "anower@gmail.com",
    [newSymble]: "key2",
    "full name": "Anower Hossan"
}

console.log(Object.keys(username));
console.log(Object.values(username));
console.log(Object.entries(username));















































