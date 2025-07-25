import Link from 'next/link';
import data from '../../Data/blog.json';
import SectionTitle from "../Common/SectionTitle";
import Image from 'next/image';

const Blog2 = () => {
    return (
        <div className="blog-area style-two">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <SectionTitle
                                    SubTitle="Latest Blog"
                                    Title="Explore Blogs & News"
                            ></SectionTitle>
                        </div>
                    </div>
                </div>
                <div className="row">
                {data.slice(0,3).map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                        <div className="single-blog-box">
                            <div className="single-blog-thumb">
                                 <Image src={item.img} alt="img" width={416} height={283}   />
                                 {/* <div className="blog-meta-top">
                                    <Link href={`/blog/${item.id}`}>{Array.isArray(item.category) ? item.category.join(", ") : item.category}
                                    </Link>
                                </div> */}
                            </div>
                            <div className="blog-box-content">
                            <div className="meta-blog">
                                <Link href="/blog/${item.id}"><span><i className="bi bi-person"></i>{item.author}</span></Link>
                                <p><span>
                               <Image src="/assets/images/inner/grid-calen.png" alt="img" width={14} height={14}   />
                                                                   </span>{item.date}</p>
                                </div>
                                {/* <h3><Link href={`/blog/${item.id}`}>{item.title}</Link></h3> */}
                                <h3><Link href={`/blog/${item.id}`}><h3>{item.title}</h3></Link></h3>
                                <div className="blog-button">
                                    <Link href={`/blog/${item.id}`} className="btn-2">read post</Link>
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

export default Blog2;