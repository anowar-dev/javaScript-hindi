
const newSymble = Symbol("keay1")

const username = {
    name: "Anower",
    email: "anower@gmail.com",
    [newSymble]: "key2",
    "full name": "Anower Hossan"
}

console.log(username["full name"]);
username.name = "hossan"
console.log(username)
Object.freeze(username)
username.email = "test";
console.log(username)














































