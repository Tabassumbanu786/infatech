import SectionTitle from "../Common/SectionTitle";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';

const Blog2 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch('/api/blog-posts?published=true');
                const posts = await response.json();
                setData(posts);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
                // Fallback to empty array if API fails
                setData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPosts();
    }, []);

    if (loading) {
        return (
            <div className="blog-area style-two">
                <div className="container">
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch('/api/blog-posts?published=true');
                const posts = await response.json();
                setData(posts);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
                // Fallback to empty array if API fails
                setData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPosts();
    }, []);

    if (loading) {
        return (
            <div className="blog-area style-two">
                <div className="container">
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-area style-two">
            <div className="container">
                <SectionTitle
                    subTitle="LATEST NEWS"
                    title="Read Our Latest News & Blog"
                />
                <div className="row">
                {data.slice(0,3).map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                        <div className="blog-box">
                            <div className="blog-box-img">
                                <Image src={item.image} alt="image" width={500} height={300} />
                            </div>
                            <div className="blog-box-content">
                            <div className="meta-blog">
                                <Link href={`/blog/${item.id}`}><span><i className="bi bi-person"></i>{item.author}</span></Link>
                                <p><span>
                                    <i className="bi bi-calendar3"></i>
                                    {item.date}
                                </span></p>
                                <h3><Link href={`/blog/${item.id}`}><h3>{item.title}</h3></Link></h3>
                                <p>{item.summary}</p>
                                <p>{item.shortDescription}</p>
                                <Link href={`/blog/${item.id}`} className="read-more">
                                    <Link href={`/blog/${item.id}`} className="read-more">
                                        Read More <i className="bi bi-arrow-right-short"></i>
                                    </Link>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                )
                )
                }
            </div>
        </div>
    );
};

export default Blog2;