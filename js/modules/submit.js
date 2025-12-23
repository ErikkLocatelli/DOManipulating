import { User, users } from "./users.js";

export default function submitForm() {
    const submitForm = document.querySelector('.form');
    
    submitForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const email = document.querySelector('#email')
        const password = document.querySelector('#password')
        
        // const user = new User(email.value, password.value);
        // users.push(user); para criar novos usuarios
        // console.log(users);
        
        const verifyLogin = users.find(user => user.email === email.value && user.password === password.value); 
        console.log(verifyLogin ? `Bem vindo ${verifyLogin.email}` : "usuário n encontrado"); 

        submitForm.reset();
    }) 
}