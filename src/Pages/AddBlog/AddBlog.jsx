
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useContext } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../Provider/AuthProvider';

const AddBlog = () => {

    const {user} = useContext(AuthContext)
    const owner = user?.email
    const ownerName = user?.displayName
    const ownerPhoto = user?.photoURL

    const handleAddBlog = e =>{
        e.preventDefault()
        const form = e.target 
        const title = form.title.value 
        const category = form.category.value 
        const photo = form.photo.value 
        const shortDescription = form.shortDescription.value 
        const longDescription = form.longDescription.value
        const postDate = Date.now()

        const blog = {title, category, photo, shortDescription, longDescription, postDate, owner, ownerName, ownerPhoto}
        console.log(blog)

        fetch('https://blog-website-server-omega.vercel.app/api/v1/addblog', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(blog)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                swal('Congratulations!', 'A new blog has been added', 'success')
                form.reset()
            }
        })
    }

    return (
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center md:py-10 space-y-5'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold'>Add a New Blog</h1>
            <form onSubmit={handleAddBlog} className="flex max-w-xl flex-col gap-4 p-2 shadow-2xl">
                <div className='flex gap-5'>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label htmlFor="text" value="Title" />
                        </div>
                        <TextInput id="title" name='title' type="text" placeholder="Blog Title" required />
                    </div>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="Category" />
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
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="photo" value="Photo URL" />
                    </div>
                    <TextInput id="photo" type="text" name='photo' placeholder="Photo URL" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Short Description" />
                    </div>
                    <Textarea id="comment" name='shortDescription' placeholder="Write a short description" required rows={2} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Long Description" />
                    </div>
                    <Textarea id="comment" name='longDescription' placeholder="longDescription" required rows={4} />
                </div>
                <Button type="submit">Add Blog</Button>
            </form>
        </div>
    );
};

export default AddBlog;