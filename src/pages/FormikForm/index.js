

import './style.css';
import React from "react";
import { Form, Formik } from "formik";
import { SignupSchema } from "./schema";
import FieldWrapper from './FieldWrapper';
import useFormikForm from "./useFormikForm";
import { initialFormState } from "./constant";

export default function FormikForm() {
    const { handleSubmit } = useFormikForm();

    return (
        <div className="formik-container">
            <h2>Formik form implementation with Yup validators</h2>
            <Formik
                onSubmit={handleSubmit}
                validationSchema={SignupSchema}
                initialValues={initialFormState}
            >
                {
                    (props) => {
                        const { values, isSubmitting } = props;
                        console.log(values, isSubmitting)
                        return (
                            <Form className="formik-container-form">
                                <FieldWrapper type="text" name="username" />
                                <FieldWrapper type="email" name="email" />
                                <FieldWrapper type="password" name="password" />
                                <FieldWrapper type="confirmPassword" name="confirmPassword" />
                                <button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting' : 'Submit'}
                                </button>
                            </Form>
                        )
                    }
                }
            </Formik>

            <div className='para_desc'>
                <h2>Pros: Formik handles</h2>
                <ul>
                    <li>Getting values in and out of form state</li>
                    <li>Validation and error messages</li>
                    <li>Handling form submission</li>
                </ul>
            </div>

            <div className='para_desc'>
                <h2>Cons:</h2>
                <ul>
                    <li>Re-render issues: When one field state change, entire form re-render.</li>
                    <li>Not suitable if a form is large and field has expensive functions</li>
                </ul>
            </div>

            <div className='para_desc'>
                <h2>Alternative for cons</h2>
                <ul>
                    <li>Use react-hook-form library</li>
                </ul>
            </div>
        </div>
    );
}
