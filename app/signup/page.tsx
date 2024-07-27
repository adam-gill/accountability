import React from 'react';

const SignUpPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-almost_black'>
        <div className='signup_container border border-med_gray text-white py-6 px-4 rounded-lg'>
            <div className='title_section flex flex-col items-center'>
                <h1 className='text-xl font-medium'>Sign Up</h1>
                <p className='text-light_gray text-sm mt-2'>Create your account</p>
            </div>
            <div className='input_section flex flex-col mt-2'>
                <input id='first_name' type="text" placeholder='First Name' className='mt-4 text-med_gray bg-dark_gray border border-med_gray py-2 px-4 rounded-lg p-2 text-sm'/>
                <input id='last_name' type="text" placeholder='Last Name' className='mt-4 text-med_gray bg-dark_gray border border-med_gray p-2 rounded-lg py-2 px-4 text-sm'/>
                <input id='email' type="email" placeholder='Email' className='mt-4 text-med_gray bg-dark_gray border border-med_gray p-2 rounded-lg py-2 px-4 text-sm'/>
                <input id='password' type="password" placeholder='Password' className='mt-4 text-med_gray bg-dark_gray border border-med_gray p-2 rounded-lg py-2 px-4 text-sm'/>
                <input id='confirm_password' type="password" placeholder='Confirm Password' className='mt-4 text-med_gray bg-dark_gray border border-med_gray py-2 px-4 rounded-lg p-2 text-sm'/>
                <small className='mt-4 text-med_gray text-xs'>Must be 8 characters min.</small>
                <div className='mt-4 flex justify-between'>
                    <input className='mr-3' type="checkbox" />
                    <small className='text-xs mr-4 text-med_gray'>I agree to the <a className='text-light_gray'>terms and conditions</a> and <a className='text-light_gray'>privacy policy</a></small>
                </div>
                <button className='mt-6 bg-white text-almost_black py-2 px-4 rounded-lg p-2 text-sm font-medium'>Coutinue</button>
            </div>
            <div className='line border border-med_gray mt-6'></div>
            <div className='bottom_section mt-6 flex justify-between items-center'>
                <small className='text-med_gray'>Already have an account?</small>
                <button className='py-2 px-4 bg-dark_gray border rounded-lg border-med_gray text-white'>Sign In</button>
            </div>
        </div>
    </div>
  );
};

export default SignUpPage;
