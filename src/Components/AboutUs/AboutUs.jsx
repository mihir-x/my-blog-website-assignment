import { motion } from "framer-motion"

const AboutUs = () => {

    const headAnimation = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 2 } },
    }
    const textAnimation = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 2 } },
    }

    return (
        <div className="my-5 md:my-10 text-center relative p-5 md:p-8">
            <div className="max-w-screen-lg mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={headAnimation}
                >

                    <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">About Us</h1>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textAnimation}
                >
                    <p className="mt-5 md:mt-8">Welcome to our blog website, your trusted source for all things and ideas. We&apos;re a group of writers passionate about blogging, dedicated to delivering quality content that informs, educates, and entertains. Explore our articles and join our community as we share our knowledge and passion.</p>
                </motion.div>

            </div>
            <div className="absolute -z-50 inset-0 bg-gradient-to-l from-transparent via-gray-600 to-transparent"></div>
            <div className="absolute -z-50 inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>
    );
};

export default AboutUs;