import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email:Yup.string().email().required("enter your email"),
    password:Yup.string().min(6).required("enter your password"),
    confirm_password:Yup.string().oneOf([Yup.ref('password'), null],"password didnt match"),
})