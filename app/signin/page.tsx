import React from 'react';

const SignInPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-almost_black'>
        <div className='signup_container border border-med_gray text-white py-6 px-4 rounded-lg'>
            <div className='title_section flex flex-col items-center'>
                <h1 className='text-xl font-medium'>Sign In</h1>
                <p className='text-light_gray text-sm mt-2'>Sign in to access your account</p>
            </div>
            <div className='input_section flex flex-col mt-2'>
                <input id='email' type="email" placeholder='Email' className='mt-4 text-med_gray bg-dark_gray border border-med_gray p-2 rounded-lg py-2 px-4 text-sm'/>
                <input id='password' type="password" placeholder='Password' className='mt-4 text-med_gray bg-dark_gray border border-med_gray p-2 rounded-lg py-2 px-4 text-sm'/>
                <button className='mt-4 bg-white text-almost_black py-2 px-4 rounded-lg p-2 text-sm font-medium'>Sign In</button>
                <div className='flex justify-center items-center mt-6'>
                  <small className='text-med_gray text-xs'>Forgot password?</small>
                </div>
                

            </div>
            <div className='line border border-med_gray mt-6'></div>
            <div className='bottom_section mt-6 flex justify-between items-center'>
                <small className='text-med_gray'>Don't have an account?</small>
                <button className='py-2 px-4 bg-dark_gray border rounded-lg border-med_gray text-white ml-10'>Sign Up</button>
            </div>
        </div>
    </div>
  );
};

export default SignInPage;
