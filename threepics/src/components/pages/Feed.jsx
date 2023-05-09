import { useState } from 'react';
import Post from '../partials/Post';



const Feed = ({searchValue, posts}) => {

    const filteredPosts = posts.filter((post) => {
        return post.caption.toLowerCase().includes(searchValue.toLowerCase());
    });

    return (
        <section className="container-fluid">
            <div className="row justify-around">
                <div className="col d-flex p5" style={{flexWrap: 'wrap'}}>
                    {filteredPosts.map((post, index) => {
                        return (
                            <Post
                                key={index}
                                img={post.img}
                                date={post.time}
                                likes={post.likes}
                                creator={post.creator}
                                caption={post.caption}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Feed;