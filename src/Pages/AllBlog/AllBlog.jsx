import { useQuery } from "@tanstack/react-query";
import BlogCard from "../../Components/BlogCard/BlogCard";
import LoadingPage from "../LoadingPage/LoadingPage";


const AllBlog = () => {

    const {data: blogs, isLoading} = useQuery({
        queryKey: ['blogs'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/api/v1/blogs')
            return res.json()
        }
    })
    if(isLoading){
        return <LoadingPage></LoadingPage>
    }
    console.log(blogs)

    return (
        <div> 
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center mt-5 md:mt-8">Check Out All Blogs</h1>
            <div>
                <div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBlog;