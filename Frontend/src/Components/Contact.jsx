import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className='flex h-screen items-center justify-center '>
      <div className="w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link 
      to="/"
       className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      >
        ✕</Link>
    
    <h3 className="font-bold text-[35px] ">Contact Us</h3>
    {/* name */}
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
        <input type='text' 
        placeholder='Enter your fullname' 
        className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("name", { required: true })}
        />
        <br />
        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* email */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type='email' placeholder='Enter your email' 
        className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("email", { required: true })}
        />
        <br />
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* password*/}
    <div className='mt-4 space-y-2'>
        <span>Message</span>
        <br/>
        <input  type='text'
         placeholder='type your message' 
        className='w-80 h-28 px-3  py-1 border rounded-md outline-none'
        {...register("message", { required: true })}
        />
        <br />
        {errors.password && <span className='text-sm text-red-500'
        >
          This field is required</span>}
    </div>
    {/*Button*/}
    <div className='flex  mt-5'>
      <button className='bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200'>
        Submit
        </button>
      
    </div>
    </form>
  </div>
</div>
      </div>
    </>
  )
}

export default Contact
