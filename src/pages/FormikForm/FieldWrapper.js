

import React, { memo } from "react";
import { ErrorMessage, Field } from "formik";

function FieldWrapper({ type, name}) {
    return (
        <div className='field'>
            <label>Username</label>
            <Field type={type} name={name} />
            <ErrorMessage name={name} component='div' className='error-label' />
        </div>
    )
}

export default memo(FieldWrapper);
