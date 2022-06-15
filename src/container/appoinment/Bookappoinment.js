import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Bookappoinment(props) {
    const history = useHistory()

    let schema = yup.object().shape({
        name: yup.string().required("please enter name"),
        email: yup.string().required('enter email').email('enter valid email'),
        phone: yup.number().min(10).required("please enter number"),
        date: yup.date().required("please enter date"),
        message: yup.string().required("please enter message")
    });


    const handleSubmit = (values) => {
        const data = JSON.parse(localStorage.getItem("users"));

        console.log(data);

        if (data === null) {
            localStorage.setItem("users", JSON.stringify([values]));
        } else {
            data.push(values);
            localStorage.setItem("users", JSON.stringify(data));
        }

        history.push("/listappointment");
    }


    // const handleClick = () => {

    // }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            message: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            handleSubmit(values)
            // alert(JSON.stringify(values, null, 2));
        },
    });


    // console.log(formik.errors);
    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Make an Appointment</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                </div>
                <div className="row text-center">
                    <div className="col-6">
                        <NavLink to={"/bookappointment"}>Bookappoinment</NavLink>
                    </div>
                    <div className="col-6">
                        <NavLink to={"/listappointment"}>Listappoinment</NavLink>
                    </div>
                </div>
                <Formik value={formik}>
                    <Form onSubmit={formik.handleSubmit} action method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : ''
                                }
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.errors.email && formik.touched.email ? <p>{formik.errors.email}</p> : ''
                                }
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    id="phone"
                                    placeholder="Your Phone"
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.errors.phone && formik.touched.phone ? <p>{formik.errors.phone}</p> : ''
                                }
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <input
                                    type="date"
                                    name="date"
                                    className="form-control datepicker"
                                    id="date"
                                    placeholder="Appointment Date"
                                    onChange={formik.handleChange}
                                    value={formik.values.date}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.errors.date && formik.touched.date ? <p>{formik.errors.date}</p> : ''
                                }
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select name="department" id="department" className="form-select">
                                    <option value>Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>
                                </select>
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control"
                                name="message"
                                rows={5}
                                placeholder="Message (Optional)"
                                defaultValue={""}
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.errors.message && formik.touched.message ? <p>{formik.errors.message}</p> : ''
                            }
                            <div className="validate" />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Make an Appointment</button></div>
                    </Form>
                </Formik>
            </div>
        </section>
    );
}

export default Bookappoinment;