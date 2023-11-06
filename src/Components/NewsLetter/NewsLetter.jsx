import swal from "sweetalert";


const NewsLetter = () => {

    const handleSubscribe = e => {
        e.preventDefault()
        swal('Thank You!', 'You have been successfully subscribed to our website', 'success')
        e.target.reset()
    }

    return (
        <div className="max-w-screen-lg mx-auto my-14 md:my-20 relative">
            <img src="https://i.ibb.co/35xcz2g/2514366.png" alt="" className="h-14 md:h-20 absolute -top-6 md:-top-10 left-[45%]" />

            <div className="h-80 bg-gray-700 rounded-xl flex flex-col items-center justify-center space-y-2 md:space-y-4">
                <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-blue-600">Newsletter</h1>
                <p className="text-white md:text-xl">Stay up to date with our latest blogs</p>
                <form onSubmit={handleSubscribe} className="flex">
                    <input type="email" name="search" id="" placeholder="Your email" required />
                    <button type="submit" className="bg-purple-600 rounded-r-md p-2 font-semibold text-white">Search</button>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;