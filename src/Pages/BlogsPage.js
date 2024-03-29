import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import blogs from "../data/blogs";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.6, duration: 0.6 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
function BlogsPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <MainLayout>
        <BlogsStyled>
          <Title title={"Blogs"} span={"Blogs"} />
          <InnerLayout className={"blog"}>
            {blogs.map((blog, index) => {
              return (
                <a
                  href={blog.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <div key={blog.id} className={"blog-item"}>
                    <div className="image">
                      <img src={blog.image} alt="" />
                    </div>
                    <div className="title">{blog.title}</div>
                  </div>
                </a>
              );
            })}
          </InnerLayout>
        </BlogsStyled>
      </MainLayout>
    </motion.div>
  );
}

const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (max-width: 770px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .blog-item {
      background-color: var(--background-dark-grey);
      padding: 1rem 1rem;
    }
    .image {
      width: 100%;
      height: 250px;
      overflow: hidden;
      /* padding-bottom: 0.5rem; */
      img {
        width: 100%;
        height: 90%;
        object-fit: cover;
        transition: all 0.4s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: rotate(3deg) scale(1.1);
        }
      }
    }

    .title {
      a {
        font-size: 1.2rem;
        padding: 2rem 0;
        color: var(--white-color);
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          color: var(--primary-color) !important;
        }
      }
    }
  }
`;

export default BlogsPage;
