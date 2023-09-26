// import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// const validate = values => {
//     const errors = {};

//     if (!values.name) {
//         errors.name = 'Mandatory field!';
//     } else if (values.name.length < 2) {
//         errors.name = 'Minimum 2 symbols'
//     }

//     if (!values.email) {
//         errors.email = 'Mandatory field!';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = 'Inccorrect email address';
//     }

//     return errors;
// }

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
                <label htmlFor="name">Your name</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                    // value={formik.values.name}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}

                    // { ...formik.getFieldHelpers('name')}
                />
                {/* {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null} */}
                <ErrorMessage className="error" name="name" component="div"/>
                <label htmlFor="email">Your email</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                    // value={formik.values.email}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                />
                {/* {formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div> : null} */}
                <ErrorMessage className="error" name="email" component="div"/>
                <label htmlFor="amount">Amount</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                    // value={formik.values.amount}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                />
                {/* {formik.errors.amount && formik.touched.amount ? <div className="error">{formik.errors.amount}</div> : null} */}
                <ErrorMessage className="error" name="amount" component="div"/>
                <label htmlFor="currency">Currency</label>
                <Field
                    id="currency"
                    name="currency"
                    // value={formik.values.currency}
                    // onChange={formik.handleChange}
                    //     onBlur={formik.handleBlur}

                    as = "select"    >
                        <option value="">Select currency</option>
                        <option value="USD">USD</option>
                        <option value="UAH">EUR</option>
                        <option value="RUB">CAD</option>
                </Field>
                {/* {formik.errors.currency && formik.touched.currency ? <div className="error">{formik.errors.currency}</div> : null} */}
                <ErrorMessage className="error" name="currency" component="div"/>
                <label htmlFor="text">Your message</label>
                <Field 
                    id="text"
                    name="text"
                    // value={formik.values.text}
                    // onChange={formik.handleChange}
                    as="textarea"
                />
                {/* {formik.errors.text && formik.touched.text ? <div className="error">{formik.errors.text}</div> : null} */}
                <ErrorMessage className="error" name="text" component="div"/>
                <label className="checkbox">
                    <Field 
                        name="terms" 
                        type="checkbox" 
                        // value={formik.values.terms}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        />
                    Do you agree with confidential policy?
                </label>
                {/* {formik.errors.terms && formik.touched.terms ? <div>{formik.errors.terms}</div> : null} */}
                {/* {formik.errors.terms && formik.touched.terms ? <div className="error">{formik.errors.terms}</div> : null} */}
                <ErrorMessage className="error" name="terms" component="div"/>
                <button type="submit">Send</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;