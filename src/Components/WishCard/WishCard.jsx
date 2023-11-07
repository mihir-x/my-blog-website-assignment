import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Button, Card } from "flowbite-react";
import PropTypes from 'prop-types';
import { PhotoView } from "react-photo-view";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const WishCard = ({wish}) => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { _id, title, category, photo, shortDescription, blogId, } = wish

    const handleDetailsClick = (id) =>{
        navigate(`/allblogs/${id}`, {state: id})
    }
    const handleRemoveClick = () =>{
        axios.delete(`https://blog-website-server-omega.vercel.app/api/v1/wishlists/${_id}`)
        .then(res => {
            console.log(res)
            swal('Thank You!', 'The blog has been removed from your wishlist', 'success')
            queryClient.invalidateQueries(['wishlists'])
        })
        .catch(err =>{
            swal('Ooops!', err.message, 'error')
        })
    }

    return (
        <Card
            className="h-[500px]"
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
                    <Button onClick={()=>handleDetailsClick(blogId)} outline gradientDuoTone="purpleToBlue">
                        Details
                    </Button>
                    <Button onClick={handleRemoveClick} outline gradientDuoTone="cyanToBlue">
                        Remove
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default WishCard;
WishCard.propTypes = {
    wish: PropTypes.object
}