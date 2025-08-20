import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Blog3 = () => {
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
                setData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPosts();
    }, []);

    if (loading) {
        return (
            <div className="blog-area style-grid">
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
        <div className="blog-area style-grid">
            <div className="container">
                <div className="row">
                    {data.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="blog-box">
                                <div className="blog-box-thumb">
                                    <Image src={item.image} alt={item.title} width={400} height={300} />
                                </div>
                                <div className="blog-box-content">
                                    <div className="meta-blog">
                                        <Link href={`/blog/${item.id}`}><span><i className="bi bi-person-plus"></i>{item.author} </span></Link>
                                        <p><span>
                                            <i className="bi bi-calendar3"></i>{item.date}
                                        </span></p>
                                    </div>
                                    <h4><Link href={`/blog/${item.id}`}>{item.title}</Link></h4>
                                    <p>{item.excerpt}</p>
                                    <div className="blog-button">
                                        <Link href={`/blog/${item.id}`}>READ MORE<i className="bi bi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog3;