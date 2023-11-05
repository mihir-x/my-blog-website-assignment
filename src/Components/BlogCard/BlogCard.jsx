import { Button, Card } from 'flowbite-react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {

    const { _id, title, category, photo, shortDescription } = blog
    const navigate = useNavigate()

    const handleDetailsClick = (id) =>{
        navigate(`/allblogs/${id}`, {state: id})
    }

    const handleWishlistClick = () => {

    }

    return (
        <Card
            className="h-[500px]"
        // imgAlt="Meaningful alt text for an image that is not purely decorative"
        // imgSrc={photo}
        // renderImage={() => <img src={photo} alt="" className='h-[200px]' />}
        >
            <div className='flex flex-col justify-between gap-5 h-full'>
                <img src={photo} alt="" className='h-[200px]' />
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