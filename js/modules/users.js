export const users = [
    { email: "erik", password: "12345" },
    { email: "caio", password: "12345" },
    { email: "felipe", password: "12345" },
    { email: "lucas", password: "12345" },
    { email: "ray", password: "12345" }
] 

export class User { 
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}