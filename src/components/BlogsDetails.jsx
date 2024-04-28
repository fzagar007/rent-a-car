import "../all-styles/blogDetails.css";
import { useParams } from "react-router-dom";
import blogData from "../assets/data/blogData";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import commentImg from "../assets/all-images/comment-img.jfif";
import { PiArrowBendUpLeftFill } from "react-icons/pi";



const BlogDetails = () => {
    const { slug } = useParams();
    const blog = blogData.find((blog) => blog.title === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [blog]);

    return (
        <section className="BlogDetails-container">
            <div className="BlogDetails-container-headings">
                <img src={blog.imgUrl} className="BlogDetails-container-headings-img" />
                <h2>{blog.title}</h2>
            </div>

            <div className="BlogDetails-container-info">
                <span className="BlogDetails-container-infoauthor">
                    <CgProfile className="BlogDetails-icon" />
                    <span className="BlogDetails-text"> {blog.author} </span>
                </span>

                <span className="BlogDetails-container-info-date">
                    <CiCalendar className="BlogDetails-icon" />
                    <span className="BlogDetails-text">{blog.date}</span>
                </span>

                <span className="BlogDetails-container-info-time">
                    <GoClock className="BlogDetails-icon" />
                    <span className="BlogDetails-text">{blog.time} </span>
                </span>
            </div>

            <p className="BlogDetails-container-description">{blog.description1}</p>
            <p className="BlogDetails-container-description">{blog.description2}</p>
            <p className="BlogDetails-container-description">{blog.description3}</p>

            <div className="BlogDetails-comments">
                <h4>1 Comments</h4>

                <div className="BlogDetails-comments-container">
                    <img src={commentImg} className="coommentImg" />

                    <div className="BlogDetails-comments-container-content">
                        <h6>David Herbie</h6>
                        <p>17 May, 2023</p>
                        <p>
                            Wow, what an insightful post!
                            Your perspective really sheds light on this topic in a way I hadn't considered before.
                            I appreciate the effort you put into sharing your thoughts and sparking this discussion.
                            Looking forward to more engaging conversations like this one!
                        </p>

                        <span>
                            <PiArrowBendUpLeftFill className="replay-icon" />
                            <span className="replay-text">Replay</span>
                        </span>
                    </div>
                </div>

                <div className="BlogDetails-comments-form">
                    <h4>Leave Comment</h4>
                    <p>You must sign-in to make or comment a post</p>

                    <label>
                        <input
                            className="label1"
                            type="text"
                            placeholder="Full name"
                        />

                        <input
                            type="text"
                            placeholder="Email" />
                    </label>

                    <textarea
                        className="BlogDetails-comments-form-textarea"
                        placeholder="Comment..." />

                    <button className="BlogDetails-comments-form-textarea-btn">Post a Comment</button>
                </div>
            </div>
        </section>
    );
}

export default BlogDetails;