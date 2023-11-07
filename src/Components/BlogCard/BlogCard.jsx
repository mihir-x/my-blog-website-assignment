import { Button, Card } from 'flowbite-react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import swal from 'sweetalert';
import { PhotoView } from 'react-photo-view';

const BlogCard = ({ blog }) => {
    const {user} = useContext(AuthContext)
    const owner = user?.email
    const { _id, title, category, photo, shortDescription } = blog
    const navigate = useNavigate()

    const handleDetailsClick = (id) =>{
        navigate(`/allblogs/${id}`, {state: id})
    }

    const handleWishlistClick = () => {
        const wishList = {
            owner, title, category, photo, shortDescription, blogId:_id,
        }
        axios.post('https://blog-website-server-omega.vercel.app/api/v1/wishlists', wishList)
        .then(res => {
            console.log(res)
            swal('Congratulations!', 'You have added this blog to your wishlist', 'success')
        })
        .catch(err => {
            swal('Ooops!', err.message, 'error')
        })
    }

    return (
        <Card
            className="h-[540px]"
        // imgAlt="Meaningful alt text for an image that is not purely decorative"
        // imgSrc={photo}
        // renderImage={() => <img src={photo} alt="" className='h-[200px]' />}
        >
            <div className='flex flex-col justify-between gap-5 h-full'>
                <PhotoView src={photo}><img src={photo} alt="" className='h-[200px]' /></PhotoView>
                <div className='space-y-2'>
                    <h5 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {shortDescription}
                    </p>
                    <p className='text-gray-700 dark:text-gray-400 font-bold'>Category: {category}</p>
                </div>
                <div className='flex justify-between'>
                    <Button onClick={()=>handleDetailsClick(_id)} outline gradientDuoTone="purpleToBlue">
                        Details
                    </Button>
                    <Button onClick={handleWishlistClick} outline gradientDuoTone="cyanToBlue">
                        Wishlist
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default BlogCard;

BlogCard.propTypes = {
    blog: PropTypes.object
}