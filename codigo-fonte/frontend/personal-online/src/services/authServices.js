import axios from 'axios';

export function userRegister(type, name, email, phone, password, confirmPassword) {
    return axios.post("http://192.168.0.107:3333/users/register", {
        type: type,
        name: name,
        email: email,
        phone: phone,
        password: password,
        confirmPassword: confirmPassword
    })
}

export async function userlogin(email, password) {
    return await axios.post("http://192.168.0.107:3333/users/login", {
        email: email,
        password: password,
    })
}
