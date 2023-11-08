import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import swal from 'sweetalert';

const Login = () => {

    const { logIn, loginWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        logIn(email,password)
        .then(result =>{
            console.log(result)
            swal('Congratulations!', 'Your are logged in successfully', 'success')
            navigate('/')
        })
        .catch(err => {
            swal('Ooops!', err.message, 'error')
        })
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result)
                swal('Congratulations!', 'You are logged in successfully', 'success')
                navigate('/')
            })
            .catch(err => {
                swal('Ooops!', err.message, 'error')
            })
    }

    return (
        <div className=' md:h-screen'>
            <div className='flex flex-col md:flex-row max-w-screen-lg mx-auto items-center justify-center md:h-full'>
                <div className='flex-1'>
                    <form onSubmit={handleLogin} className="flex max-w-md flex-col gap-4 mx-auto shadow-2xl p-4">
                        <h1 className='text-center font-bold text-xl md:text-3xl'>Login To Your Account</h1>
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
                        <Button type="submit">Login</Button>
                        <div className='text-center'>
                            <p className='font-semibold'>Login With Social Links</p>
                            <button onClick={handleGoogleLogin}><FcGoogle className='h-8 w-8'></FcGoogle></button>
                        </div>
                    </form>
                </div>
                <div className='flex flex-col justify-center items-center p-2'>
                    <h1 className='text-xl md:text-3xl font-bold'>New Here?</h1>
                    <p className='mb-2 mt-2'>Sign up and discover a great amount of new blogs</p>
                    <Link to='/registration'><Button outline gradientDuoTone="purpleToBlue">
                        Register
                    </Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;