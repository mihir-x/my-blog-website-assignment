import BlogFooter from "../../Components/Footer/BlogFooter";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import RecentBlog from "../../Components/RecentBlog/RecentBlog";



const Home = () => {
    return (
        <div>
            <RecentBlog></RecentBlog>
            <NewsLetter></NewsLetter>
            <BlogFooter></BlogFooter>
        </div>
    );
};

export default Home;