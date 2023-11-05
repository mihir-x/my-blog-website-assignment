import { useQuery } from "@tanstack/react-query";


const AllBlog = () => {

    const {data} = useQuery({
        queryKey: ['blogs'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/api/v1/blogs')
            return res.json()
        }
    })
    console.log(data)

    return (
        <div>
            
        </div>
    );
};

export default AllBlog;