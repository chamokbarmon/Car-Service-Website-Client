import React from "react";
import "./Blogs.css";

const Blog = () => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl rounded mb-10 mt-5">
        <figure>
          <img
            className="width"
            src="https://i.ibb.co/wWBVcT4/1-Ly-Zcwu-LWv2-FAr-Oum-Cxobp-A.png"
            alt="Movie"
          />
        </figure>
        <div className="card-body width">
          <h2 className="card-title font-bold">What is javascript</h2>
          <p className="italic ">
            JavaScript is a high-level, versatile, and widely-used programming
            language primarily known for its ability to add interactivity and
            dynamic behavior to websites. It's often referred to as the
            "language of the web" because it's the primary scripting language
            for web development. JavaScript is a key technology for building
            modern web applications.
          </p>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl rounded mb-10 mt-5">
        <figure>
          <img
            className="width"
            src="https://i.ibb.co/xLYRZS2/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
            alt="Movie"
          />
        </figure>
        <div className="card-body width">
          <h2 className="card-title font-bold">What is the React?</h2>
          <p className="italic ">
            React, also known as React.js or ReactJS, is an open-source
            JavaScript library for building user interfaces (UIs) or user
            interface components. It was developed and is maintained by Facebook
            and a community of individual developers and companies. React is
            widely used for building interactive and dynamic web applications,
            particularly single-page applications (SPAs).
          </p>
        </div>
      </div>

      <div className="card card-side bg-base-100 shadow-xl rounded mb-10 mt-5">
        <figure>
          <img
            className="width"
            src="https://i.ibb.co/wWBVcT4/1-Ly-Zcwu-LWv2-FAr-Oum-Cxobp-A.png"
            alt="Movie"
          />
        </figure>
        <div className="card-body width">
          <h2 className="card-title font-bold">What is javascript es6</h2>
          <p className="italic ">
            ECMAScript 2015 (ES6) is a significant update to the JavaScript
            language that was standardized by the European Computer
            Manufacturer's Association (ECMA). ES6 introduced many new features,
            syntax enhancements, and improvements to JavaScript, making it a
            more powerful and expressive language for developers. It was a major
            milestone in the evolution of JavaScript and set the stage for
            subsequent versions of the language.
          </p>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl rounded mb-10 mt-5">
        <figure>
          <img
            className="width"
            src="https://i.ibb.co/xLYRZS2/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
            alt="Movie"
          />
        </figure>
        <div className="card-body width">
          <h2 className="card-title font-bold">What is the React context</h2>
          <p className="italic ">
            React context is an advanced feature in the React library that
            allows data to be passed down the component tree without having to
            pass props manually at every level. It's a way to share state or
            other data between components without the need for explicit prop
            drilling, which can become cumbersome in deeply nested component
            hierarchies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
