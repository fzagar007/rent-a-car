import CommonSection from "../components/CommonSection";
import "../all-styles/blogList.css";
import blogData from "../assets/data/blogData";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";


const Blog = () => {
    return (
        <>
            <CommonSection title="Blog" />

            <section className="blog-section">
                <span className="blog-section-container">
                    {blogData.map((item) => (
                        <BlogItem2 item={item} key={item.id} />
                    ))}
                </span>
            </section>
        </>
    );
}


const BlogItem2 = ({ item }) => {
    const { imgUrl, title, author, date, description1, time } = item;

    return (
        <div className="blog-div-container">
            <div className="blog-item">
                <img src={imgUrl} className="blog-item-img" />
                <div className="blog-item-info">
                    <Link to={`/blogs/${title}`} className="blog-item-title">{title}</Link>
                    <p className="blog-item-info-description">{description1.length > 110 ? description1.substr(0, 110) : description1}...</p>


                    <Link to={`/blogs/${title}`} className="blog-item-info-read-more">Read More</Link>

                    <div className="blog-item-info-author">
                        <span className="blog-author">
                            <CgProfile className="blog-author-icon" />
                            <span className="blog-author-text"> {author} </span>
                        </span>

                        <div className="blog-item-info-date">
                            <span className="blog-date">
                                <CiCalendar className="blog-item-info-date-icon" />
                                <span className="blog-date-text">{date}</span>
                            </span>

                            <span className="blog-time">
                                <GoClock className="blog-item-info-date-icon" />
                                <span className="blog-date-text">{time} </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;