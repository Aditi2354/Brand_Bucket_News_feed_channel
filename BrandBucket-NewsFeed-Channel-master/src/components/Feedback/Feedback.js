import React, { useState } from 'react';
import heroImage from '../../images/profile.png';
import './Feedback.css';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";



const Feedback = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [successMessage, setSuccessMessage] = useState('');
    const history = useHistory();



    //will work after submission
    const handleBlur = (e) => {
        // let isFieldValid = true;
        // if (e.target.name === 'email') {
        //     isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        // }
        // if(isFieldValid){
        //     setEmailValidation(true)
        // }

    }

    const onSubmit = (data) => {
        setSuccessMessage(`Hey ${data.firstName} <br/>  Successfully submitted `);
        console.log(data)
        // history.push('/')
        // reset();



    };


    return (
        <div className="feedbackMain container-fluid">
            <div className="feedback-inside">
                <div className="d-flex">
                    <div className="feedback-sidebar">
                        <div className="hero-profile d-flex shadow-lg bg-body rounded">
                            <img src={heroImage} alt="" />
                            <div className="desc text-start ps-3">
                                <h6>Hi Reader</h6>
                                <p>Hers's your News</p>
                            </div>
                        </div>

                        <div className="sidebar-feedback shadow-lg bg-body rounded mt-3">
                            <h4>Have a Feedback?</h4>
                            <button className="btn btn btn-success">We're Listening!</button>
                        </div>

                    </div>

                    {
                        successMessage ?
                            <div className="success-message d-flex justify-content-center mt-5 ms-5">
                                <div className="dsc">
                                    <h2>{successMessage}</h2>
                                    <p>Wants <Link className="link" to="/"> Learn More</Link></p>
                                </div>
                            </div>

                            :
                            <div className="feedback-main">

                                <h1>Thank you so much for taking the time !</h1>
                                <p className="card-text text-secondary">Please Provide the below details</p>

                                <div className="feedback-form">

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div class="mb-3 form-group">
                                            <label for="firstName" class="form-label">First Name</label>
                                            <input {...register("firstName", { required: true })} id="firstName" class="form-control" placeholder="john" />
                                            {errors.firstName?.type === 'required' && <p className="text-danger">First name is required</p>}
                                        </div>

                                        <div class="mb-3 form-group">
                                            <label for="lastName" class="form-label">Last Name</label>
                                            <input {...register("lastName")} type="text" class="form-control" id="last-name" name="last-name" placeholder="due" />

                                        </div>

                                        <div class="mb-3 form-group">
                                            <label for="address" class="form-label">Address</label>
                                            <textarea {...register("address", { required: true })} class="form-control" id="adress" name="address" rows="3" placeholder="address" />
                                            {errors.address?.type === 'required' && <p className="text-danger"> address is required</p>}
                                        </div>

                                        <div class="mb-3 form-group">
                                            <label for="country" class="form-label">Country</label>
                                            <input {...register("country", { required: true })} class="form-control" id="country" name="country" placeholder="Country" />
                                            {errors.country?.type === 'required' && <p className="text-danger"> country is required</p>}
                                        </div>

                                        <div class="mb-3 form-group">
                                            <label for="email" class="form-label">Email Id</label>

                                            <input id="email" className="form-control" {...register("email", {
                                                required: "required",
                                                pattern: {
                                                    value: /\S+@\S+\.\S+/,
                                                    message: "Entered value does not match email format"
                                                }
                                            })}
                                                type="email"
                                            />
                                            {errors.email && <span role="alert" className="text-danger">{errors.email.message}</span>}

                                        </div>


                                        <div class="mb-3 form-group">
                                            <label for="number" class="form-label">Phone Number</label>
                                            <input {...register("number", { required: true })} type="number" class="form-control" id="number" name="number" placeholder="Phone Number" />
                                            {errors.number?.type === 'required' && <p className="text-danger">Phone Number is required</p>}
                                        </div>

                                        <div className="d-flex justify-content-center mt-2">
                                            <input type="submit" class="btn btn-success w-50 " value="Submit Feddback" />
                                        </div>
                                    </form>
                                </div>

                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Feedback;

