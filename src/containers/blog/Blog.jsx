import React from "react";
import "./blog.css";
import { Article } from "../../components";
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
} from "../../components/artice/imports";

const Blog = () => {
  return (
    <div className="gpt3_blog section_padding" id="blog">
      <div className="gpt3_blog-heading">
        <h1 className="gradient_text">
          A lot is happening <br></br> we are blogging about it
        </h1>
      </div>
      <div className="gpt3_blog-container">
        <div className="gpt3_blog-container_groupA">
          <Article
            imgURL={blog01}
            date={"16-12-2023"}
            title={"GPT-3 and Open AI is the future let us explore how it is"}
          />
        </div>
        <div className="gpt3_blog-container_groupB">
          <Article
            imgURL={blog02}
            date={"16-12-2023"}
            title={"GPT-3 and Open AI is the future let us explore how it is"}
          />
          <Article
            imgURL={blog03}
            date={"16-12-2023"}
            title={"GPT-3 and Open AI is the future let us explore how it is"}
          />
          <Article
            imgURL={blog04}
            date={"16-12-2023"}
            title={"GPT-3 and Open AI is the future let us explore how it is"}
          />
          <Article
            imgURL={blog05}
            date={"16-12-2023"}
            title={"GPT-3 and Open AI is the future let us explore how it is"}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
