import React from 'react';
import '../../sass/pages/blogPostsPage.scss';
import JoinUs from '../sections/JoinUs';
import Underlined from '../Underlined';

const BlogPostsPage = () => (
  <div className="blog-posts-page-wrapper">
    <header className="blog-posts-header">
      <Underlined>
        <h1>
          Blog Posts
        </h1>
      </Underlined>
    </header>
    <section>
      This is a section
    </section>
    <JoinUs />
  </div>
);

export default BlogPostsPage;
