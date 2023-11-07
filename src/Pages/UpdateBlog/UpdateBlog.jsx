import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";


const UpdateBlog = () => {

    const {user} = useContext(AuthContext)
    const owner = user.email

    const location = useLocation()
    const id = location.state

    const { data: blog, isLoading } = useQuery({
        queryKey: ['updateBlog'],
        queryFn: async () => {
            const res = await fetch(`https://blog-website-server-omega.vercel.app/api/v1/blogs/${id}`, {credentials: 'include'})
            return res.json()
        }
    })
    if (isLoading) {
        return <LoadingPage></LoadingPage>
    }

    const { _id, title, category, photo, shortDescription, longDescription } = blog
    
    const handleUpdateBlog = e =>{
        e.preventDefault()
        const form = e.target 
        const title = form.title.value 
        const category = form.category.value 
        const photo = form.photo.value 
        const shortDescription = form.shortDescription.value 
        const longDescription = form.longDescription.value
        const postDate = Date.now()

        const updatedBlog = {title, category, photo, shortDescription, longDescription, postDate, owner}
        axios.put(`https://blog-website-server-omega.vercel.app/api/v1/blogs/${_id}`, updatedBlog)
        .then(result => {
            swal('Congratulations!', 'Blog has been updated', 'success')
            console.log(result)
        })
        .catch(err => {
            swal('Ooops!', err.message, 'error')
        })
    }

    return (
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center md:py-10 space-y-5'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold'>Update Blog</h1>
            <form onSubmit={handleUpdateBlog} className="flex max-w-xl flex-col gap-4 p-2 shadow-2xl">
                <div className='flex gap-5'>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label htmlFor="text" value="Title" />
                        </div>
                        <TextInput id="title" name='title' type="text" defaultValue={title} required />
                    </div>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="Category" />
                        </div>
                        <Select id="category" name='category' defaultValue={category} required>
                            <option>Business</option>
                            <option>Lifestyle</option>
                            <option>Fitness</option>
                            <option>Travel</option>
                            <option>News</option>
                            <option>Food</option>
                        </Select>
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="photo" value="Photo URL" />
                    </div>
                    <TextInput id="photo" type="text" name='photo' defaultValue={photo} required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Short Description" />
                    </div>
                    <Textarea id="comment" name='shortDescription' defaultValue={shortDescription} required rows={2} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Long Description" />
                    </div>
                    <Textarea id="comment" name='longDescription' defaultValue={longDescription} required rows={4} />
                </div>
                <Button type="submit">Update</Button>
            </form>
        </div>
    );
};

export default UpdateBlog;