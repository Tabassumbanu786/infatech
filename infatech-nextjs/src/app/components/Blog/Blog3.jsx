import Link from 'next/link';
import data from '../../Data/blog.json';
import Image from 'next/image';

const Blog3 = () => {
    return (
        <div className="blog-area style-grid">
            <div className="container">
                <div className="row">
                {data.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                        <div className="single-blog-box">
                            <div className="single-blog-thumb">
                                <Image src={item.img} alt="img" width={364} height={248}   />
                            </div>
                            <div className="blog-box-content">
                            <div className="meta-blog">
                                <Link href="/blog/blog-details"><span><i className="bi bi-person-plus"></i>{item.author} </span></Link>
                                <p><span>
                                    <Image src="/assets/images/inner/grid-calen.png" alt="img" width={14} height={14}   />
                                    </span>{item.date}</p>
                                </div>
                                <h3><Link href={`/blog/${item.id}`}><h3>{item.title}</h3>
                                </Link></h3>
                                <div className="blog-button">
                                {/* <Link href={`/blog/${item.id}`}>READ MORE<i className="bi bi-arrow-right"></i></Link> */}
                                <Link href={`/blog/${item.id}`}>
  READ MORE <i className="bi bi-arrow-right"></i>
  <span className="visually-hidden">about {item.title}</span>
</Link>

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