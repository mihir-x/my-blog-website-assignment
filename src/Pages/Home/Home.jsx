import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Faq from "../../Components/Faq/Faq";
import BlogFooter from "../../Components/Footer/BlogFooter";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import RecentBlog from "../../Components/RecentBlog/RecentBlog";
import TopBlogger from "../../Components/TopBlogger/TopBlogger";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <RecentBlog></RecentBlog>
            <NewsLetter></NewsLetter>
            <TopBlogger></TopBlogger>
            <Faq></Faq>
            <BlogFooter></BlogFooter>
        </div>
    );
};

export default Home;