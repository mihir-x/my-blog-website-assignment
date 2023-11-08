import { useQuery } from "@tanstack/react-query";
import BlogCard from "../../Components/BlogCard/BlogCard";
import LoadingPage from "../LoadingPage/LoadingPage";
import { Select } from "flowbite-react";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useState } from "react";


const AllBlog = () => {
    // const [filterBlog, setFilterBlog] = useState([])
    // const [searchBlog, setSearchBlog] = useState([])
    const { data: blogs, isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('https://blog-website-server-omega.vercel.app/api/v1/blogs')
            return res.json()
        }
    })

    const [filtered, setFiltered] = useState(blogs)
    useEffect(() => {
        setFiltered(blogs)
    }, [blogs])
    console.log('filtered', filtered)

    if (isLoading) {
        return <LoadingPage></LoadingPage>
    }


    const handleSearch = (e) => {
        e.preventDefault()
        const searchTitle = e.target.search.value
        const searchedBlog = blogs?.filter(blog => blog.title === searchTitle)
        setFiltered(searchedBlog)
    }
    const handleSelect = (e) => {
        e.preventDefault()
        const filter = e.target.category.value
        if (filter === 'All') {
            setFiltered(blogs)
        }
        else {
            const filteredCategory = blogs?.filter(blog => blog.category === filter)
            setFiltered(filteredCategory)
        }
    }
    return (
        <div className="max-w-screen-lg mx-auto mb-5 md:mb-16">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center mt-5 md:mt-10">Check Out Our Blogs</h1>
            <div className="mt-5 md:mt-10">
                <div className="flex flex-col md:flex-row justify-end items-center gap-5 border-y-2 pb-2 md:py-6">
                    <div>
                        <form onSubmit={handleSearch} className="flex">
                            <input type="search" name="search" id="" placeholder="search by title" />
                            <button type="submit" className="bg-purple-600 rounded-r-md p-2 font-semibold text-white">Search</button>
                        </form>
                    </div>
                    <form onSubmit={handleSelect}>
                        <div className=" flex flex-row-reverse justify-center items-center gap-1">
                            <div className="mr-2 block">
                                <button type="submit" className="bg-purple-600 p-2 rounded-md font-semibold text-white">Search Category</button>
                            </div>
                            <Select id="category" name='category' required>
                                <option>All</option>
                                <option>Business</option>
                                <option>Lifestyle</option>
                                <option>Fitness</option>
                                <option>Travel</option>
                                <option>News</option>
                                <option>Food</option>
                            </Select>
                        </div>
                    </form>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-5 md:mt-10">
                    {
                        filtered?.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBlog;