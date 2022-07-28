import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Inputbox from '../Inputbox/Inputbox';



function Bookappoinment(props) {
    const history = useHistory()
    const [update, setUpdate] = useState(false);

    let schema = yup.object().shape({
        name: yup.string().required("please enter name"),
        email: yup.string().required('enter email').email('enter valid email'),
        phone: yup.number().min(10).required("please enter phone"),
        date: yup.date().required("please enter date"),
        department: yup.string().required("please select department"),
        message: yup.string().required("please enter message")
    });


    const formik = useFormik({
        initialValues: {
            id: Math.floor(Math.random() * 1000),
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: ''
        },
        validationSchema: schema,
        onSubmit: (values, {resetForm}) => {
            

            if (update) {
                handleUpdate(values)
            } else {
                const data = JSON.parse(localStorage.getItem("Bookappoinment"));
                
                console.log(data);
                
                if (data === null) {
                    localStorage.setItem("Bookappoinment", JSON.stringify([values]));
                } else {
                    data.push(values);
                    localStorage.setItem("Bookappoinment", JSON.stringify(data));
                    history.push("/listappointment");
                    resetForm()
              }
            }

            // alert(JSON.stringify(values, null, 2));
        },
    });
  

    const handleUpdate = (values) => {
        const localdata = JSON.parse(localStorage.getItem("Bookappoinment"))
        console.log(localdata);

        const udata = localdata.map((l) => {
            if(l.id === values.id) {
                return values
            } else {
                return l
            }
        })

        console.log(udata);

        localStorage.setItem("Bookappoinment", JSON.stringify(udata))
        formik.resetForm()
        setUpdate(false);
        history.push("/listappointment")
    }

    const { handleSubmit, errors, handleChange, touched, handleBlur, values } = formik;



    useEffect(() => {
      let localdata = JSON.parse(localStorage.getItem("Bookappoinment"));

      if (localdata !== null && props.location.state) {

        let filterdata = localdata.filter((d) => d.id === props.location.state.id);
        console.log(filterdata)
        formik.setValues(filterdata[0])
        setUpdate(true);
        }
    }, []);

    

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
                <Formik values={formik}>
                    <Form onSubmit={handleSubmit} className="php-email-form">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <Inputbox
                                    type="name"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    value={values.name}
                                    placeholder="Your Name"
                                    errors={Boolean(errors.name && touched.name)}
                                    errorMessages={errors.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <Inputbox
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    value={values.email}
                                    placeholder="Your Email"
                                    errors={Boolean(errors.email && touched.email)}
                                    errorMessages={errors.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <Inputbox
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    id="phone"
                                    value={values.phone}
                                    maxLength={10}
                                    placeholder="Your Phone"
                                    errors={Boolean(errors.phone && touched.phone)}
                                    errorMessages={errors.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <Inputbox
                                    type="date"
                                    name="date"
                                    className="form-control datapicker"
                                    id="date"
                                    value={values.date}
                                    placeholder="Appointment Date"
                                    errors={Boolean(errors.date && touched.date)}
                                    errorMessages={errors.date}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <Inputbox type="select" name="department" id="department" className="form-select" onChange={handleChange}
                                    errors={Boolean(errors.department && touched.department)} errorMessages={errors.department} onBlur={handleBlur}  value={values.department}>
                                    <option disabled selected>Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>
                                </Inputbox>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <Inputbox
                                type='textarea'
                                className="form-control"
                                name="message" rows={5}
                                value={values.message}
                                placeholder="Message (Optional)"
                                defaultValue={""}
                                errors={Boolean(errors.message && touched.message)}
                                errorMessages={errors.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                        </div>
                        {
                        update ?
                         <div className="text-center"><button className="appointment-btn scrollto" type='submit'>Update</button></div>
                 :
                         <div className="text-center"><button className="appointment-btn scrollto" type='submit'>Make an Appointment</button></div>
                        }
                    </Form>
                </Formik>
            </div>
        </section>
    );
}

export default Bookappoinment;

// import { Form, Formik, useFormik } from 'formik';
// import React, { useEffect, useState } from 'react';
// import { NavLink, useHistory } from 'react-router-dom';
// import * as yup from 'yup';
// import Inputbox from '../Inputbox/Inputbox'

// function Bookappoinment(props) {
//   const [update , setUpdate] = useState(false);

//   const historydata = useHistory();


// const handleUpdate = (udata) =>{

//   console.log(udata);

//     let updata = JSON.parse(localStorage.getItem("bookappoinment"));

//     let finaldata = updata.map((d) =>{
//       if (d.id === udata.id) {
//         return udata
//       }else{
//         return d
//       }
//     })

//     localStorage.setItem("bookappoinment" , JSON.stringify(finaldata))

//     historydata.push("/listappointment");

//     formik.resetForm();
//     setUpdate(false);

//     console.log(finaldata);
// }


//   let schema = yup.object().shape({
//     name: yup.string("Please enter your name").required("Please enter your name"),
//     email: yup.string().email("Please enter Valid email").required("Please enter your email"),
//     phone: yup.number().required("Please enter your number").positive().integer(),
//     date: yup.string().required("Please enter your date"),
//     department: yup.string().required("Please Select department"),
//     message: yup.string().required("Enter Message"),
//     createdOn: yup.date().default(function () {
//       return new Date();
//     }),
//   });

//   const formik = useFormik({
//     initialValues: {
//         id: Math.floor(Math.random() * 1000),   
//       name: "",
//       email: "",
//       phone: "",
//       date: "",
//       department: "",
//       message:""
//     },
//     validationSchema: schema,
//     onSubmit: values => {

//       if (update) {
//         handleUpdate(values)
//       }else{
//       // alert(JSON.stringify(values, null, 2));
//       // console.log(JSON.stringify(values, null, 2));

//       const {
//         name,
//         email,
//         phone,
//         date,
//         department,
//         message
//       } = values

//       const appodata = {
//         id: Math.floor(Math.random() * 1000),
//         name,
//         email,
//         phone,
//         date,
//         department,
//         message
//       }
//       console.log(appodata);

//       let bookdata = JSON.parse(localStorage.getItem("bookappoinment"));

//       if (bookdata == null) {
//         localStorage.setItem("bookappoinment", JSON.stringify([appodata]));
//       } else {
//         bookdata.push(appodata);
//         localStorage.setItem("bookappoinment", JSON.stringify(bookdata));
//       }

//       historydata.push("/listappointment")

//     }



//     }
//   });


//   const { handleSubmit, handleChange, errors, handleBlur, touched, values } = formik;

//   useEffect(
//     () => {
//       let dData = JSON.parse(localStorage.getItem("bookappoinment"));

//       if (dData !== null && props.location.state) {

//         let filterdata = dData.filter((d) => d.id === props.location.state.id);

//         console.log(filterdata);

//         formik.setValues(filterdata[0])
//         setUpdate(true);
       

//       }



//       // console.log(dData);
//     },
//     [])


//   console.log(errors);

//   return (
//     <main id="main">
//       <section id="appointment" className="appointment">
//         <div className="container">
//           <div className="section-title">
//             <h2>Make an Appointment</h2>
//             <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
//               blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
//               Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
//           </div>

//           <div className='appoinmentnav'>
//             <div className='row text-center'>
//               <div className='col-6 mb-5'>
//                 <NavLink activeClassName='title-border' to={"/bookappointment"}>Book Appoinment</NavLink>
//               </div>
//               <div className='col-6 mb-5'>
//                 <NavLink activeClassName='title-border' to={"/listappointment"}>List Appoinment</NavLink>
//               </div>
//             </div>

//           </div>

//           <Formik value={formik}>

//             <Form key={formik} onSubmit={handleSubmit} className="php-email-form">
//               <div className="row">
//                 <div className="col-md-4 form-group">
//                   <Inputbox
//                     type="text"
//                     name="name"
//                     className="form-control"
//                     id="name"
//                     value={values.name}
//                     placeholder="Your Name"
//                     error={Boolean(errors.name && touched.name)}
//                     errormessage={errors.name}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />

//                 </div>


//                 <div className="col-md-4 form-group mt-3 mt-md-0">
//                   <Inputbox
//                     type="email"
//                     className="form-control"
//                     name="email"
//                     id="email"
//                     value={values.email}
//                     placeholder="Your Email"
//                     onChange={handleChange}
//                     error={Boolean(errors.email && touched.email)}
//                     errormessage={errors.email}
//                     onBlur={handleBlur}
//                   />

//                 </div>



//                 <div className="col-md-4 form-group mt-3 mt-md-0">
//                   <Inputbox
//                     type="tel"
//                     className="form-control"
//                     name="phone" id="phone"
//                     placeholder="Your Phone"
//                     maxLength={10}
//                     value={values.phone}
//                     onChange={handleChange}
//                     error={Boolean(errors.phone && touched.phone)}
//                     errormessage={errors.phone}
//                     onBlur={handleBlur}
//                   />

//                 </div>
//               </div>



//               <div className="row">
//                 <div className="col-md-4 form-group mt-3">
//                   <Inputbox
//                     type="date"
//                     name="date"
//                     className="form-control datepicker"
//                     id="date"
//                     onChange={handleChange}
//                     value={values.date}
//                     placeholder="Appointment Date"
//                     error={Boolean(errors.date && touched.date)}
//                     errormessage={errors.date}
//                     onBlur={handleBlur}
//                   />

//                 </div>



//                 <div className="col-md-4 form-group mt-3">
//                   <Inputbox type="select" name="department" id="department" className="form-select" onChange={handleChange} error={Boolean(errors.department && touched.department)} value={values.department} errormessage={errors.department} onBlur={handleBlur}>
//                     <option value>Select Department</option>
//                     <option value="Department 1">Department 1</option>
//                     <option value="Department 2">Department 2</option>
//                     <option value="Department 3">Department 3</option>
//                   </Inputbox>


//                 </div>

//               </div>
//               <div className="form-group mt-3">
//                 <Inputbox type="textarea" className="form-control" name="message"  
//                   onChange={handleChange}
//                     value={values.message}
//                    rows={5} placeholder="Message (Optional)"
//                    error={Boolean(errors.message && touched.message)}
//                    errormessage={errors.message}
//                    onBlur={handleBlur}
//                    />
//                 <div className="validate" />
//               </div>


//               <div className="mb-3">
//                 <div className="loading">Loading</div>
//                 <div className="error-message" />
//                 <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
//               </div>
//               {
//                 update ?
//                 <div className="text-center"><button className="appointment-btn scrollto" type='submit'>Update</button></div>
//                 :
//                 <div className="text-center"><button className="appointment-btn scrollto" type='submit'>Make an Appointment</button></div>

//               }
//             </Form>
//           </Formik>
//         </div>
//       </section>
//     </main>

//   );
// }

// export default Bookappoinment;