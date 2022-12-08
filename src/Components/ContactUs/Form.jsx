import React from 'react';
import './ContactUs.css';
import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: "",
            mobile: "",
            email: "",
            subject: "",
            comment: ""
        }
    });


    const data = watch();
    const onSubmit = result => {
        console.log(result);
        reset();
    }

    return (
        <>
            <div className="user-form">
                <h2>Contact Form</h2>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
                    <div className={"input-tag"}>
                        <input type="text" {...register('name', { required: true, minLength: 3 })} maxLength={20} name="name" className={"input" + (data.name ? " value" : "") + (errors.name ? " error" : "")} />
                        <label htmlFor="name" className='input-label'>Name</label>
                        {errors.name && <label htmlFor="name" className= 'err-text'>Enter at least 3 chracters</label>}
                    </div>

                    <div className={"input-tag"}>
                        <input type="tel" {...register('mobile', { required: true, minLength: 10 })} maxLength={10} name="mobile" className={"input" + (data.mobile ? " value" : "") + (errors.mobile ? " error" : "")} />
                        <label htmlFor="mobile" className='input-label'>Mobile</label>
                        {errors.mobile && <label htmlFor="mbile" className= 'err-text'>Invalid number</label>}
                    </div>

                    <div className={"input-tag"}>
                        <input type="text" {...register('email', { required: true, minLength: 3 })} name="email" className={"input" + (data.email ? " value" : "") + (errors.email ? " error" : "")} />
                        <label htmlFor="email" className='input-label'>Email</label>
                        {errors.email && <label htmlFor="email" className= 'err-text'>Invalid Email</label>}
                    </div>

                    <div className={"input-tag"}>
                        <input type="text" {...register('subject', { required: true, minLength: 3 })} maxLength={20} name="subject" className={"input" + (data.subject ? " value" : "") + (errors.subject ? " error" : "")} />
                        <label htmlFor="subject" className='input-label'>Subject</label>
                        {errors.subject && <label htmlFor="subject" className= 'err-text'>Enter at least 3 characters</label>}
                    </div>

                    <div className={"input-tag"}>
                        <textarea type="text" name="comment" {...register('comment', { required: true, minLength: 3 })} className={"input" + (data.comment ? " value" : "") + (errors.comment ? " error" : "")} />
                        <label htmlFor="comment" className='input-label'>Comment</label>
                        {errors.comment && <label htmlFor="comment" className= 'err-text'>Enter at least 3 characters</label>}
                    </div>

                    <div className={"btn" + (Object.keys(data).length === 5 ? " activate-btn" : "")}>
                        <button type='submit'>Submit</button>
                    </div>
                </form>


            </div>
        </>
    )
}

export default Form