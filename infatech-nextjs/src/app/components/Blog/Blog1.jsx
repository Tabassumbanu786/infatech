import SectionTitle from "../Common/SectionTitle";
import BlogCard1 from "../BlogCard/BlogCard1";
import BlogCardStyle2 from "../BlogCard/BlogCardStyle2";
import Link from "next/link";
import data from "../../Data/blog.json";

const Blog1 = () => {
  return (
    <div className="blog-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-title text-left">
              <SectionTitle
                SubTitle="OUR LATEST BLOG"
                Title="Exploring Its Potential in<br/> Various <span>Industries.</span>"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="project-right">
              <div className="solutek-btn">
                <Link href="/blog">
                  VIEW all posts
                  <div className="solutek-hover-btn hover-bx"></div>
                  <div className="solutek-hover-btn hover-bx2"></div>
                  <div className="solutek-hover-btn hover-bx3"></div>
                  <div className="solutek-hover-btn hover-bx4"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* First Blog (left side, bigger card) */}
          {data[0] && (
            <div className="col-xl-5 col-lg-6 col-md-6">
             <BlogCard1
  BlogImg={data[0].img}
  Title={data[0].title}
  Content={data[0].excerpt}
  id={data[0].id}
/>
            </div>
          )}

          {/* Next Two Blogs (right side, stacked smaller cards) */}
          <div className="col-xl-7 col-lg-6 col-md-6">
          {data.slice(1, 3).map((item, i) => (
  <BlogCardStyle2
    key={i}
    BlogImg={item.img}
    Title={item.title}
    Content={item.excerpt}
    id={item.id}
  />
))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
