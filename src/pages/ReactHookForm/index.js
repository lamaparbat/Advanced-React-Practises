

import React from "react";
import { useForm } from "react-hook-form";
import { signupResolver } from "./schema";
import { initialFormState } from "../FormikForm/constant";

export default function ReactHookForm() {
    const { register, handleSubmit, formState, reset } = useForm({
        defaultValues: initialFormState,
        resolver: signupResolver
    });
    const { errors, isSubmitting } = formState;

    const onSubmit = async (data) => {
        try {
            console.log(data);

            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(true);
                }, 5000);
            });
        } catch (error) {
            console.error(error);
        } finally {
            console.log('finished.')
            reset();
        }
    };

    return (
        <div className="formik-container">
            <h2>React Hook Form implementation with Yup validators</h2>
            <form className="formik-container-form" onSubmit={handleSubmit(onSubmit)}>
                <div className='field'>
                    <label>Username</label>
                    <input {...register('username')} type='text' placeholder="Username" />
                    <span className="error-label">{errors?.username?.message}</span>
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input {...register('email')} type='enail' placeholder="Email" />
                    <span className="error-label">{errors?.email?.message}</span>
                </div>
                <div className='field'>
                    <label>Password</label>
                    <input {...register('password')} type='password' placeholder="Password" />
                    <span className="error-label">{errors?.password?.message}</span>
                </div>
                <div className='field'>
                    <label>Confirm Password</label>
                    <input {...register('confirmPassword')} type='password' placeholder="Confirm password" />
                    <span className="error-label">{errors?.confirmPassword?.message}</span>
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting' : 'Submit'}
                </button>
            </form>
        </div>
    )
}
