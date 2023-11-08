import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import swal from 'sweetalert';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';

const Registration = () => {

    const { createUser, loginWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegistration = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value

        if (!/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*?-]).{6,}$/.test(password)) {
            swal('Invalid Password!', 'Password must have a digit an special character an uppercase and at least 6 character long', 'error')
            return
        }

        createUser(email, password)
            .then(result => {
                console.log(result)
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        window.location.reload(true)
                    })
                    .catch(err => {
                        swal('Ooops!', err.message, 'error')
                    })
                swal('Congratulations!', 'Your account has been created successfully', 'success')
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
        <div className=' py-4 md:py-8 lg:py-10'>
            <div className='flex flex-col md:flex-row max-w-screen-lg mx-auto items-center justify-center md:h-full'>
                <div className='flex-1'>
                    <form onSubmit={handleRegistration} className="flex max-w-md flex-col gap-4 mx-auto shadow-2xl p-4">
                        <h1 className='text-center font-bold text-xl md:text-3xl'>Please Register!</h1>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Your Name" />
                            </div>
                            <TextInput id="name" type="text" name='name' placeholder="Your Name" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" />
                            </div>
                            <TextInput id="email1" type="email" name='email' placeholder="Your Email" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="photo" value="Your Photo URL" />
                            </div>
                            <TextInput id="photo" type="text" name='photo' placeholder="Your Photo URL" required />
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
                            <button onClick={handleGoogleLogin}><FcGoogle className='h-8 w-8'></FcGoogle></button>
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