import React from 'react'
import { useForm } from "react-hook-form"
import '../styles/ContactForm.css'

const contactForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) =>
        console.log(data)
    // console.log(watch("example")) // watch input value by passing the name of it
    return (
        <div className='form-container' id='from-container'>
             <h2>Contact us</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="insideForm">
                    <label htmlFor="name">What is you name?</label>
                    <input placeholder='Name' {...register('name', {required: true})} type="text" />
                    <label htmlFor="email">What is you mail?</label>
                    <input placeholder='Email' {...register("email", {required: true})} type="email" />
                    <label  htmlFor="description">Write your query</label>
                    <textarea placeholder='Description...'  {...register("desc", {required: true})} type="text" />

                    <button type='submit' className='d-btn btn-dark d-btn-hero'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default contactForm
