import Post from '../partials/Post';



const Feed = ({posts}) => {
    return (
        <section className="container-fluid">
            <div className="row justify-around">
                <div className="col d-flex p5" style={{flexWrap: 'wrap'}}>
                    {posts.map((post, index) => {
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