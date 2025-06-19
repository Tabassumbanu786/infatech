// Components/BlogDetail/BlogDetail.js
'use client';
import Image from 'next/image';
import Link from 'next/link';
import data from '../../Data/services3.json';

const BlogDetail = ({ blog }) => {
    const Services = [
        'Database Security',
        'IT Solution',
        'Technology Consult',
        'App Development',
        'UI/UX Design',
        'Cyber Security',
      ]; 

      const BlogTag = [
        'Cyber Security',
        'Learning',
        'Software',
        'Development',
        'Marketing',
        'Technology',
      ]; 
  if (!blog) return <p>Loading...</p>;

  return (
    <div className="blog-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-details-thumb">
              <Image src={blog.img} alt={blog.title} width={856} height={501} />
            </div>
            <div className="blog-details-content">
              {/* <h4 className="blog-details-title">{blog.title}</h4> */}
              <div
                className="blog-details-desc"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
            <div className="blog-details-category">
            <br></br>
              {blog.category.map((cat, i) => (
                <span key={i}>
                  <Link href="#">{cat}</Link>
                </span>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="widget-sidber">
                                <div className="widget_search">
                                    <form action="#" method="get">
                                        <input type="text" name="s" value="" placeholder="Search Here" title="Search for:" />
                                        <button type="submit" className="icons">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                                </div>
                                <div className="widget-sidber">
                                    <div className="widget-sidber-content">
                                        <h4>Main Services</h4>
                                    </div>
                                    <div className="widget-category">
                                        <ul>
                                        {data.map((item, i) => (
                                            <li key={i}><Link href={`/service/${item.id}`}>
                                                <Image src="/assets/images/inner/category-icon.png" alt="img" width={19} height={14}   />
                                                {item.title}<i className="bi bi-arrow-right"></i></Link></li>
                                        ))}
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="widget-sidber">
                                    <div className="widget-sidber-content">
                                        <h4>Popular Post</h4>
                                    </div>
                                    <div className="sidber-widget-recent-post">
                                        <div className="recent-widget-thumb">
                                           <Image src="/assets/images/inner/recent-post.png" alt="img" width={80} height={80}   />
                                        </div>
                                        <div className="recent-widget-content">
                                            <Link href="/blog/blog-details">Supervisor Disapproved Of Latest Work.
                                            </Link>
                                            <p> feb, 26 2024</p>							
                                        </div>
                                    </div>							
                                    <div className="sidber-widget-recent-post">
                                        <div className="recent-widget-thumb">
                                            <Image src="/assets/images/inner/recent-post2.png" alt="img" width={80} height={80}   />
                                        </div>
                                        <div className="recent-widget-content">
                                        <Link href="/blog/blog-details">Simplify Streamline Succeed IT Solutions</Link>
                                            <p> June, 15 2024</p>							
                                        </div>
                                    </div>							
                                    <div className="sidber-widget-recent-post">
                                        <div className="recent-widget-thumb">
                                             <Image src="/assets/images/inner/recent-post3.png" alt="img" width={80} height={80}   />
                                        </div>
                                        <div className="recent-widget-content">
                                        <Link href="/blog/blog-details">Unlocking Potential Through Technology</Link>
                                            <p> april, 10 2024</p>							
                                        </div>
                                    </div>
                                </div>						 */}
                                <div className="widget-sidber">
                                    <div className="widget-sidber-content">
                                        <h4>Tags</h4>
                                    </div>	
                                    <div className="widget-catefories-tags">
                                    {blog.category.map((cat, i) => (
                                    <span key={i}><Link href="#">{cat}</Link>
                                    </span>))}
                                    </div>											
                                </div>
                            </div>
                        </div>
                    </div>

          
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
