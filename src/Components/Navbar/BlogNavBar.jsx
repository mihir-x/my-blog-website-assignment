import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import swal from 'sweetalert';

const BlogNavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user.photoURL)

    const navLinks = <>
        <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold underline text-green-500' : ''}>Home</NavLink>
        <NavLink to='/addblog' className={({ isActive }) => isActive ? 'font-bold underline text-green-500' : ''}>Add Blog</NavLink>
        <NavLink to='/allblogs' className={({ isActive }) => isActive ? 'font-bold underline text-green-500' : ''}>All Blogs</NavLink>
        <NavLink to='/featuredblogs' className={({ isActive }) => isActive ? 'font-bold underline text-green-500' : ''}>Featured Blogs</NavLink>
        <NavLink to='/wishlist' className={({ isActive }) => isActive ? 'font-bold underline text-green-500' : ''}>Wishlist</NavLink>
    </>

    // if (loading) {
    //     return <p>loading</p>
    // }
    const handleLogout = () => {
        logOut()
            .then(() => {
                swal('See Ya!', 'User logOut successful', 'success')
            })
            .catch(err => {
                swal('Ooops!', err.message, 'error')
            })
    }

    return (
        <div className='shadow-xl'>
            <Navbar fluid rounded>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Blog Website</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {
                        user ? <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="User settings" img={user.photoURL} rounded />
                            }
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">{user.displayName}</span>
                                <span className="block truncate text-sm font-medium">{user.email}</span>
                            </Dropdown.Header>
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Item>Earnings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item><Button onClick={handleLogout} color="failure">Logout</Button></Dropdown.Item>
                        </Dropdown> : <div className='md:flex gap-5'>
                            <Link to='/login'><Button gradientDuoTone="purpleToBlue">Login</Button></Link>
                            <Link to='/registration'><Button gradientDuoTone="purpleToBlue">Register</Button></Link>
                        </div>
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    {navLinks}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default BlogNavBar;