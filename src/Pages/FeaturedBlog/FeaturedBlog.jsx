import { useQuery } from "@tanstack/react-query";
import 'ka-table/style.css';
import { Column, Table } from 'ka-table';
import { DataType, SortingMode } from 'ka-table/enums';
import LoadingPage from "../LoadingPage/LoadingPage";

const FeaturedBlog = () => {

    const { data: featured, isLoading } = useQuery({
        queryKey: ['featured'],
        queryFn: async () => {
            const res = await fetch('https://blog-website-server-omega.vercel.app/api/v1/blogs/sorted')
            return res.json()
        }
    })
    console.log(featured)
    if(isLoading){
        return <LoadingPage></LoadingPage>
    }

    const columns = [
        { key: 'column1', title: 'Serial No', },
        { key: 'column2', title: 'Blog Title', },
        { key: 'column3', title: 'Blog Owner', },
        { key: 'column4', title: 'Profile Picture', cell: ({ column, row }) => <img src={row.dataArray.column4} alt="" className='h-10 w-10 md:h-16 md:w-16 rounded-full' /> },
    ]

    const dataArray = featured?.map((feature, index) => ({
        column1: `${index + 1}`,
        column2: feature.title,
        column3: feature.ownerName,
        column4: feature.ownerPhoto,
        id: index,
    }));


    return (
        <div className="max-w-screen-lg mx-auto">
            <div>
                <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center mt-5 md:mt-10">Our Featured Blogs</h1>
            </div>
            <div className="mt-5 md:mt-10">
                <Table
                    columns={columns}
                    data={dataArray}

                    rowKeyField={'id'}
                    sortingMode={SortingMode.Single}
                />
            </div>
        </div>
    );
};

export default FeaturedBlog;