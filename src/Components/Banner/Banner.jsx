import { motion } from "framer-motion"

const Banner = () => {

    const textAnimation = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 2 } },
    }

    return (
        <div className="max-w-screen-lg mx-auto bg-gray-500 h-[400px] mt-5 md:mt-12 flex items-center gap-5 md:gap-10">
            <motion.div
            initial= "hidden"
            animate= "visible"
            variants={textAnimation}

            >
                <h1 className="text-xl text-white md:text-4xl p-2 md:p-8 font-bold text-center mt-5 md:mt-10">Explore, Learn, Inspire: Your Daily Source of Knowledge</h1>
            </motion.div>
            <img src="https://i.ibb.co/2WVVj7g/writing-great-blogs.jpg" alt="" className="rounded-l-full h-full w-1/2 object-cover" />
        </div>
    );
};

export default Banner;