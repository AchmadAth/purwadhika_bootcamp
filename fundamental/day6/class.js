class User {
    name;
    #email
    constructor (name,email) {
        this.name = name
        this.#email = email
    }
    get getEmail(){
        return this.#email
    }
}

const udin = new User('udin','udin@gmail.com')




class DB{
    static #connection = '';
    #bukanStatic = 'bukanstatic'
    static #initializeConnection(){
        const number = Math.ceil(Math.random() * 100);
        this.#connection = `new database connection ${number}`
    }
    static getConnection(){
        if(!this.#connection) this.#initializeConnection();
        return this.#connection
    }
    getBukanStatic() {
        return this.#bukanStatic
    }
}

const db = new DB()

console.log(db.getBukanStatic());