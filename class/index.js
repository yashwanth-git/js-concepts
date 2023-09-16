class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

let user = new User("Yash"); // new instance is created here
user.sayHi();

console.log(typeof User); // User class is basically a function which holds the functions defined inside it in its prototype


class MyUser {
    constructor(name){
        this.name = name
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length < 4){
            console.log("Name is too short");
            return
        }
        this._name = value
    }
}

let user1 = new MyUser("Yash");
console.log(user1.name)

let user2 = new MyUser("");
console.log(user2.name)