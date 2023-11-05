import { Card } from 'flowbite-react';
import PropTypes from 'prop-types';

const BlogCard = ({ blog }) => {

    const {title, category, photo, shortDescription, postDate} = blog

    return (
        <div>
            <Card
                className="max-w-sm h-[10rem]"
                // imgAlt="Meaningful alt text for an image that is not purely decorative"
                // imgSrc={photo}
                renderImage={()=> <img src={photo} alt="" className='h-2/3' />}
            >
                
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {shortDescription}
                </p>
            </Card>
        </div>
    );
};

export default BlogCard;

BlogCard.propTypes = {
    blog: PropTypes.object
}