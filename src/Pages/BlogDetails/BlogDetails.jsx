import { useLocation, useNavigate } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Button } from "flowbite-react";
import CommentSection from "../../Components/CommentSection/CommentSection";
import AllComments from "../../Components/AllComments/AllComments";
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import axios from "axios";
import swal from "sweetalert";

const BlogDetails = () => {

    const location = useLocation()
    const id = location.state
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const { data: blog, isLoading, refetch } = useQuery({
        queryKey: ['blogDetails'],
        queryFn: async () => {
            const res = await fetch(`https://blog-website-server-omega.vercel.app/api/v1/blogs/${id}`, { credentials: 'include' })
            return res.json()
        }
    })
    if (isLoading) {
        return <LoadingPage></LoadingPage>
    }
    const { _id, title, photo, shortDescription, longDescription, owner } = blog

    const handleUpdate = id => {
        navigate(`/updateblog/${id}`, { state: id })
    }

    const handleLike = async(id) =>{
        const res = await axios.put(`http://localhost:5000/api/v1/blogs/like/${id}`,{count:1})
        if(res.data.modifiedCount>0){
            swal("Liked!", "Glad you have liked it", "success")
            refetch()
        }
    }
    const handleDislike = async(id) =>{
        const res = await axios.put(`http://localhost:5000/api/v1/blogs/dislike/${id}`,{count:1})
        if(res.data.modifiedCount>0){
            swal("Disliked!", "Sorry to disappoint you", "success")
            refetch()
        }
    }

    return (
        // <PhotoProvider>

        <div className="max-w-screen-lg mx-auto mb-5 md:mb-9 lg:mb-16 p-2">
            <div className="space-y-3">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mt-5 md:mt-10">{title}</h1>
                <p className="text-center">{shortDescription}</p>
            </div>
            <div className="flex flex-col-reverse gap-10 mt-5 md:mt-8">
                <div className="flex-1">
                    <p>{longDescription}</p>
                </div>
                <div className="flex-1">
                    <PhotoView src={photo}>

                        <img src={photo} alt="" className="w-full md:h-96 object-cover rounded-lg" />
                    </PhotoView>
                </div>
            </div>
            <div className="mt-5 flex gap-5">
                <Button onClick={() => handleLike(_id)} color="blue" className="outline-2" pill>
                    <AiOutlineLike /> <span className=" ml-2">{blog?.like || '0'}</span>
                </Button>
                <Button onClick={()=> handleDislike(_id)} color="failure" pill>
                    <AiOutlineDislike /> <span className=" ml-2">{blog?.dislike || '0'}</span>
                </Button>
            </div>
            <div className="border-b-4 pb-5 md:pb-8 mt-5">
                {
                    (user?.email === owner) ? <Button onClick={() => handleUpdate(_id)} color="purple">Update</Button> : ''
                }
            </div>

            <div className="mt-5 md:mt-10 pb-5 md:pb-10 border-b-4">
                {
                    (user?.email === blog?.owner) ? <h1 className="text-center text-lg md:text-2xl font-semibold">You can not comment on your own blog</h1> : <CommentSection blog={blog}></CommentSection>
                }
            </div>
            <div className="mt-5 md:mt-10">
                <h1 className="text-lg md:text-2xl font-bold">All Comments</h1>
                <div>
                    <AllComments blog={blog}></AllComments>
                </div>
            </div>
        </div>
        // </PhotoProvider>
    );
};

export default BlogDetails;