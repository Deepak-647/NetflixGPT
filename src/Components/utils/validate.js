export const validateData = (email,password) =>{
    const  validateEmail = /^[^@]+@[^@]+\.[^@]+$/.test(email);
    const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!validateEmail) return "Email is not valid";
    if(!validatePassword) return "Password is not valid";

    return null;
}