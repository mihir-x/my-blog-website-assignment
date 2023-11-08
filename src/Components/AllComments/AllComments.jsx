import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

const AllComments = ({blog}) => {

    console.log(blog._id)
    const {data: comments} = useQuery({
        queryKey: [`${blog._id}`],
        queryFn: async () =>{
            const res = await fetch(`https://blog-website-server-omega.vercel.app/api/v1/comments?blogId=${blog._id}`)
            return res.json()
        }
        
    })


    return (
        <div>
            {
                comments?.map(comment => <Comment key={comment._id} comment={comment}></Comment>)
            }
        </div>
    );
};

export default AllComments;

AllComments.propTypes = {
    blog: PropTypes.object
}