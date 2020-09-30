import React from "react";

import PseudoLogo from "../../pseudoLogo";

import image1 from "../../../assets/background/image1.png";
import image2 from "../../../assets/background/image2.png";
import image3 from "../../../assets/background/image3.png";

import { blogs, text } from "./data";

import "./styles.css";

const icons = { image1, image2, image3 };

const HomeBlogBanner = () => {
  return (
    <div className='homeBlogBanner'>
      <div className='heading'>
        <PseudoLogo />
        <h2>{text.heading}</h2>
      </div>
      <div className='body'>
        {blogs.map((blog) => {
          return (
            <div className='blogs' key={blog.icon}>
              <img src={icons[blog.icon]} alt={blog.icon} />
              <div className='text'>
                <h3>{blog.title}</h3>
                <p>{blog.text}</p>
                <a
                  href='https://novoresume.com/career-blog'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {text.link}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

HomeBlogBanner.propTypes = {};

export default HomeBlogBanner;
