import { useQuery } from "@tanstack/react-query";
import TopBloggerCard from "./TopBloggerCard";
import LoadingPage from "../../Pages/LoadingPage/LoadingPage";


const TopBlogger = () => {

    const {data:topBlogger, isLoading} = useQuery({
        queryKey: ['TopBlogger'],
        queryFn: async () =>{
            const res = await fetch('https://blog-website-server-omega.vercel.app/api/v1/topblogger', {credentials: 'include'})
            return res.json()
        }
    })

    if(isLoading){
        return <LoadingPage></LoadingPage>
    }
    console.log(topBlogger)

    return (
        <div className="max-w-screen-lg mx-auto">
           <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center mb-4 md:mb-8">Here are our Top Bloggers</h1>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    topBlogger.map(blogger => <TopBloggerCard key={blogger._id.owner} blogger={blogger}></TopBloggerCard>)
                }
           </div>
        </div>
    );
};

export default TopBlogger;