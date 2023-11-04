import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Registration = () => {

    const handleRegistration = e =>{
        e.preventDefault()
    }

    return (
        <div className='bg-gradient-to-b from-blue-500 to-green-500 md:h-screen'>
            <div className='flex flex-col md:flex-row max-w-screen-lg mx-auto items-center justify-center md:h-full'>
                <div className='flex-1'>
                    <form onSubmit={handleRegistration} className="flex max-w-md flex-col gap-4 mx-auto shadow-2xl p-4">
                        <h1 className='text-center font-bold text-xl md:text-3xl'>Please Register!</h1>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" />
                            </div>
                            <TextInput id="email1" type="email" name='email' placeholder="Your Email" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password1" value="Your password" />
                            </div>
                            <TextInput id="password1" type="password" name='password' placeholder='Your Password' required />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <Button type="submit">Register</Button>
                        <div className='text-center'>
                            <p className='font-semibold'>Login With Social Links</p>
                            <button><FcGoogle className='h-8 w-8'></FcGoogle></button>
                        </div>
                    </form>
                </div>
                <div className='flex flex-col justify-center items-center p-2'>
                    <h1 className='text-xl md:text-3xl font-bold'>Already Have an Account?</h1>
                    <p className='mb-2 mt-2'>Sign in and continue where you left</p>
                    <Link to='/login'><Button outline gradientDuoTone="purpleToBlue">
                        Login
                    </Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Registration;