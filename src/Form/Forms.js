import { useFormik } from 'formik';
import React from 'react';
import { signUpSchema } from '../schemas';

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: ""
}
const Forms = () => {
    const {values , errors , handleBlur , handleChange , handleSubmit, touched} = useFormik({
        initialValues: initialValues,
        validationSchema:signUpSchema,
        onSubmit: () => {
            console.log(
                " ~file:Forms.js ~line 11 ~Forms ~values",
                 values
            )
        }
    });
    console.log(
        " ~file:Forms.js ~line 11 ~Forms ~values",
         errors
    )
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div style={{ height: "50vh", width: "50%" }} className='center-area'>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                            {errors.name && touched.name ? (<p className='form-errors'>{errors.name}</p>):null}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label htmlFor='email' >E-mail</label>
                            <input name='email' type='email' id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label htmlFor='password' >enter password</label>
                            <input name='password' type='password' id='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label htmlFor='confirm-password' >confirm password</label>
                            <input name='confirm_password' type='password' id='confirm_password' value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        <button className="input-button" type="submit" >Submit</button>
                    </form >
                </div>
            </div>
        </div>
    );
}

export default Forms;

