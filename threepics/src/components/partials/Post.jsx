const Post =  ({img, date, likes, creator, caption}) => {
    return (
        <article className="card m-2" style={{width: '20rem'}}>
            <img src={img} className="card-img-top" style={{minHeight: '15rem', maxHeight: '15rem'}} alt="Post" />
            <div className="card-body">
                <div className="d-flex justify-content-around align-items-center mb-3">
                    <span className="card-text">
                    <small className="text-muted">{date}</small>
                    </span>
                    <button type="button" className="btn btn-danger">
                    <i className="bi bi-heart-fill"></i> {likes} likes
                    </button>
                </div>
                <p className="card-text text-start fw-bold">{creator}</p>
                <p className="card-text text-start">{caption}</p>
            </div>
        </article>
    );
};

export default Post;