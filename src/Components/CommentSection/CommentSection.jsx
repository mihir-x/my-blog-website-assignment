import { Button, Label, Textarea } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import PropTypes from 'prop-types';
import axios from "axios";
import swal from "sweetalert";
import { useQueryClient } from "@tanstack/react-query";

const CommentSection = ({blog}) => {
    const queryClient = useQueryClient()
    const {user} = useContext(AuthContext)
    const name = user?.displayName 
    const photo = user?.photoURL
    const blogId = blog._id

    const handleComment = e =>{
        e.preventDefault()
        const commentText = e.target.comment.value 
        const comment = {
            name, photo, blogId, commentText
        }
        axios.post('http://localhost:5000/api/v1/comments', comment)
        .then(res => {
            console.log(res)
            swal('Congratulations!', 'You have successfully commented on the blog', 'success')
            e.target.reset()
            queryClient.invalidateQueries([`${blog._id}`])
        })
        .catch(err => {
            swal('Ooops!', err.message, 'error')
        })

    }

    return (
        <div>
            <form onSubmit={handleComment}>
                <div className="mb-5">
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Leave a Comment" className="md:text-xl"/>
                    </div>
                    <Textarea id="comment" name="comment" placeholder="Leave a comment..." required rows={4} />
                </div>
                <Button type="submit" color="dark">Comment</Button>
            </form>
        </div>
    );
};

export default CommentSection;

CommentSection.propTypes = {
    blog: PropTypes.object
}