import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";


const UpdateBlog = () => {

    const location = useLocation()
    const id = location.state

    const { data: blog, isLoading } = useQuery({
        queryKey: ['updateBlog'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/api/v1/blogs/${id}`)
            return res.json()
        }
    })
    if (isLoading) {
        return <LoadingPage></LoadingPage>
    }

    const {title, category, photo, shortDescription, longDescription, postDate, owner} = blog

    return (
        <div>
            
        </div>
    );
};

export default UpdateBlog;