import { useQuery } from "@tanstack/react-query";
import BlogCard from "../BlogCard/BlogCard";


const RecentBlog = () => {
    const { data: recentBlogs } = useQuery({
        queryKey: ['recentBlog'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/api/v1/recent`)
            return res.json()
        }
    })

    console.log(recentBlogs)

    return (
        <div className="max-w-screen-lg mx-auto">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center mt-5 md:mt-10">Recent Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-5 md:mt-10">
                {
                    recentBlogs?.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default RecentBlog;