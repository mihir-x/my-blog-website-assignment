import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import WishCard from "../../Components/WishCard/WishCard";
import LoadingPage from "../LoadingPage/LoadingPage";


const Wishlist = () => {
    const {user} = useContext(AuthContext)
    const {data: wishlists, isLoading} = useQuery({
        queryKey: ['wishlists'],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/api/v1/wishlists?owner=${user?.email}`, {credentials:'include'})
            return res.json()
        }
    })
  
    if(isLoading){
        return <LoadingPage></LoadingPage>
    }

    return (
        <div className="max-w-screen-lg mx-auto">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center mt-5 md:mt-10">Here Are All The Blogs You&apos;ve Wishlisted For</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-5 md:mt-10">
                {
                    wishlists?.map(wish => <WishCard key={wish._id} wish={wish}></WishCard>)
                }
            </div>
        </div>
    );
};

export default Wishlist;