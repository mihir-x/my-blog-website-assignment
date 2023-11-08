import { useQuery } from "@tanstack/react-query";
import LoadingPage from "../LoadingPage/LoadingPage";
import DataTable from 'react-data-table-component';

const FeaturedBlog = () => {

    const { data: featured, isLoading } = useQuery({
        queryKey: ['featured'],
        queryFn: async () => {
            const res = await fetch('https://blog-website-server-omega.vercel.app/api/v1/blogs/sorted')
            return res.json()
        }
    })
    console.log(featured)
    if (isLoading) {
        return <LoadingPage></LoadingPage>
    }


    const columns = [
        {
            name: 'Serial No',
            selector: row => row.serial,
        },
        {
            name: 'Blog Title',
            selector: row => row.title,
        },
        {
            name: 'Blog Owner',
            selector: row => row.owner,
        },
        {
            name: 'Owner Profile Picture',
            selector: row => row.photo,
        },
    ]
    const data = featured?.map((feature, index) => ({
        serial: index + 1,
        title: feature.title,
        owner: feature.ownerName,
        photo: <img src={feature.ownerPhoto} alt="no image" className="h-14 w-14 rounded-full p-1" />

    }))


    return (
        <div className="max-w-screen-lg mx-auto">
            <div>
                <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center mt-5 md:mt-10">Our Featured Blogs</h1>
                <p className="text-center my-2 md:my-4 md:text-lg">Here are our top ten featured blogs</p>
            </div>
            <div className="my-5 md:mt-10 md:mb-20 ">
                <DataTable columns={columns} data={data} className="outline outline-blue-400 p-2 md:p-8">

                </DataTable>
            </div>
        </div>
    );
};

export default FeaturedBlog;