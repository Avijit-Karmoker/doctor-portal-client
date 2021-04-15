import React from 'react';
import wilson from '../../../images/Watson Harry.png';
import BlogPost from '../BlogPost/BlogPost';

const blogData = [
    {
        title: 'Check al least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta rem, ullam consequuntur praesentium asperiores harum ad voluptatem mollitia sit.',
        author: 'Dr. Caudi',
        authorImg: wilson,
        date: '12 April 2021'
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta rem, ullam consequuntur praesentium asperiores harum ad voluptatem mollitia sit.',
        author: 'Dr. Harami',
        authorImg: wilson,
        date: '12 April 2021'
    },
    {
        title: 'Check al least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta rem, ullam consequuntur praesentium asperiores harum ad voluptatem mollitia sit.',
        author: 'Dr. Caudi',
        authorImg: wilson,
        date: '12 April 2021'
    }
]

const Blogs = () => {
    return (
        <section>
            <div>
                <div className="section-header text-center">
                    <h5 style={{color: '#5fc7c7', marginTop: '150px'}} className="text-uppercase fs-2 fw-bolder"> our blog</h5>
                    <h1 style={{ color: '#203047', fontSize: '60px', marginBottom: '120px'}}>From Our Blog News</h1>
                </div>
                <div className="card-check mt-5 row">
                    {
                        blogData.map(blog => <BlogPost blog={blog}></BlogPost>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;