import React from "react";

import Layout from "../components/layout";
import usePosts from "../hooks/use-posts";
import PostPreview from "../components/post-preview";
import Hero from "../components/hero";

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h1>Read My Blog</h1>
        <ul>
          {posts.map(post => {
            return <PostPreview key={post.slug} post={post} />;
          })}
        </ul>
      </Layout>
    </>
  );
};
