import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingPage = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            <div className='bg-white max-w-3xl shadow p-6 rounded-lg'>
                <h1 className='text-2xl font-semibold mb-4'>
                    <Skeleton width={200} height={24}></Skeleton>
                </h1>
                <p className='text-gray-600'>
                    <Skeleton count={3}></Skeleton>
                </p>
            </div>
        </div>
    );
};

export default LoadingPage;