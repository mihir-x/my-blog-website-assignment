import { useQuery } from "@tanstack/react-query";
import 'ka-table/style.css';
import { Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';

const FeaturedBlog = () => {

    const { data: featured } = useQuery({
        queryKey: ['featured'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/api/v1/blogs/sorted')
            return res.json()
        }
    })
    console.log(featured)

    const columns = [
        { key: 'column1', title: 'Serial No', dataType: DataType.String },
        { key: 'column2', title: 'Blog Title', dataType: DataType.String },
        { key: 'column3', title: 'Blog Owner', dataType: DataType.String },
        { key: 'column4', title: 'Profile Picture', dataType: DataType.String, formatter: ({value}) => <img src={value} alt="" className='h-10 w-10 md:h-16 md:w-16 rounded-full' />, },
    ]

    const dataArray = featured?.map((feature, index) => ({
        column1: `${index+1}`,
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