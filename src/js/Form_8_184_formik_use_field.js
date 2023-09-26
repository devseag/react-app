// import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...props} {...field} />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )
};

const MyCheckbox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox'});

    return (
        <>
            <label className="checkbox">
                <input type="checkbox" {...props} {...field} />
                {children}
            </label>
            
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )
};

const CustomForm = () => {

    return (
        <Formik
            initialValues = {{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false
            }}
            validationSchema = {Yup.object({
            name: Yup.string()
                    .min(2, 'Minimum 2 sybols')
                    .required('Mandatory field'),
            email: Yup.string()
                    .email('Incorrect email address')
                    .required('Mandatory field'),
            amount: Yup.number()
                    .required('Amount mandatory')
                    .min(5, 'Not less than 5'),
            currency: Yup.string().required('Select currency'),
            text: Yup.string()
                    .min(10, 'Not less than 10 symbols'),
            terms: Yup.boolean()
                    .required('Mandatory agreement')
                    .oneOf([true], "Mandatory agreement")
            })}
            onSubmit = {values => {console.log(JSON.stringify(values, null, 2))}}
        >
            <Form className="form">
                <h2>Send contribution</h2>
                {/* <label htmlFor="name">Your name</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                />
                //  {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null} 
                <ErrorMessage className="error" name="name" component="div"/> */}
                <MyTextInput 
                    label="Your name"
                    id="name"
                    name="name"
                    type="text"
                />
                <MyTextInput 
                    label="Your email"
                    id="email"
                    name="email"
                    type="email"
                />
                <label htmlFor="amount">Amount</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                />
                <ErrorMessage className="error" name="amount" component="div"/>
                <label htmlFor="currency">Currency</label>
                <Field
                    id="currency"
                    name="currency"
                    as = "select"    >
                        <option value="">Select currency</option>
                        <option value="USD">USD</option>
                        <option value="UAH">EUR</option>
                        <option value="RUB">CAD</option>
                </Field>
                <ErrorMessage className="error" name="currency" component="div"/>
                <label htmlFor="text">Your message</label>
                <Field 
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage className="error" name="text" component="div"/>
                {/* <label className="checkbox">
                    <Field 
                        name="terms" 
                        type="checkbox" 
                        />
                    Do you agree with confidential policy?
                </label>
                <ErrorMessage className="error" name="terms" component="div"/> */}
                <MyCheckbox 
                    name="terms">
                        Do you agree with confidential policy?
                /</MyCheckbox>
                <button type="submit">Send</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;