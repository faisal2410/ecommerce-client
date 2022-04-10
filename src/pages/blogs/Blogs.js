import React from 'react';
import DefaultLayout from "../../components/nav/Header";
import BlogsCard from "../../components/blogs/Blogs";

const Blogs = () => {
    return (
        <DefaultLayout>
            <BlogsCard></BlogsCard>
        </DefaultLayout>
    );
};

export default Blogs;