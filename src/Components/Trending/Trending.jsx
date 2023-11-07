import { useQuery } from "@tanstack/react-query";
import LoadingPage from "../../Pages/LoadingPage/LoadingPage";
import axios from "axios";


const Trending = () => {

    const [mostPopular, popularBlog] = useQuery({
        queries: [
            {
                queryKey: ['popular'],
                queryFn: async () => {
                    const res = await fetch('http://localhost:5000/api/v1/popular')
                    return res.json()
                }
            },
            {
                queryKey: ['popularBlog'],
                queryFn: async () => {
                    const res = await fetch('http://localhost:5000/api/v1/blogs')
                    return res.json()
                }
            }
        ]
    })

    // console.log(data[0]._id)
    // axios.get(`http://localhost:5000/api/v1/blogs/${data[0]._id}`)
    //     .then(res => {
    //         console.log(res.data)
    //     })
    if (mostPopular.isLoading) {
        return <LoadingPage></LoadingPage>
    }
    if (popularBlog.isLoading) {
        return <LoadingPage></LoadingPage>
    }
    console.log(mostPopular, popularBlog)

    return (
        <div>
            this is trending
        </div>
    );
};

export default Trending;