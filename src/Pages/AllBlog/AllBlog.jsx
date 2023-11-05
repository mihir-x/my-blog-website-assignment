import { useQuery } from "@tanstack/react-query";
import BlogCard from "../../Components/BlogCard/BlogCard";
import LoadingPage from "../LoadingPage/LoadingPage";
import { Label, Select } from "flowbite-react";


const AllBlog = () => {

    const { data: blogs, isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/api/v1/blogs')
            return res.json()
        }
    })
    if (isLoading) {
        return <LoadingPage></LoadingPage>
    }

    return (
        <div className="max-w-screen-lg mx-auto">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center mt-5 md:mt-10">Check Out All Blogs</h1>
            <div className="mt-5 md:mt-10">
                <div className="flex flex-col md:flex-row justify-end items-center gap-5 border-y-2 pb-2 md:py-6">
                    <div>
                        <form className="flex">
                            <input type="search" name="search" id="" placeholder="search by title"/>
                            <button type="submit" className="bg-purple-600 rounded-r-md p-2">Search</button>
                        </form>
                    </div>
                    <div className=" flex justify-center items-center">
                        <div className="mr-2 block">
                            <Label htmlFor="category" value="Search by Category" />
                        </div>
                        <Select id="category" name='category' required>
                            <option>Business</option>
                            <option>Lifestyle</option>
                            <option>Fitness</option>
                            <option>Travel</option>
                            <option>News</option>
                            <option>Food</option>
                        </Select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-5 md:mt-10">
                    {
                        blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBlog;