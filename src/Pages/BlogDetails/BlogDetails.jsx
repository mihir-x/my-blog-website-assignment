import { useLocation, useNavigate } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Button } from "flowbite-react";
import CommentSection from "../../Components/CommentSection/CommentSection";


const BlogDetails = () => {

    const location = useLocation()
    const id = location.state
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const { data: blog, isLoading } = useQuery({
        queryKey: ['blogDetails'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/api/v1/blogs/${id}`)
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

    return (
        <div className="max-w-screen-lg mx-auto mb-5 md:mb-9 lg:mb-16 p-2">
            <div className="space-y-3">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mt-5 md:mt-10">{title}</h1>
                <p className="text-center">{shortDescription}</p>
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-10 mt-5 md:mt-8 md:max-h-96">
                <div className="flex-1">
                    <p>{longDescription}</p>
                </div>
                <div className="flex-1">
                    <img src={photo} alt="" className="h-full w-full" />
                </div>
            </div>
            <div className="border-b-4 pb-5 md:pb-8 mt-5">
                {
                    (user?.email === owner) ? <Button onClick={() => handleUpdate(_id)} color="purple">Update</Button> : ''
                }
            </div>
            <div className="mt-5 md:mt-10">
                <CommentSection blog={blog}></CommentSection>
            </div>
        </div>
    );
};

export default BlogDetails;