import { object, ref, string } from "yup";



export const SignupSchema = object({
    username: string().min(2).max(25).required('Please enter your username!'),
    email: string().email().required('Please enter your email!'),
    password: string().required('Please enter your password!'),
    confirmPassword: string().required().required('Please enter confirmed password!').oneOf([ref('password'), null], 'Password must match!')
});