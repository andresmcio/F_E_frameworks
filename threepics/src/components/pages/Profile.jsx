const Profile = ({avatar, username, bio}) => {
    return (
        <section className="container-fluid">
            <div className="row justify-around">
                <div className="col p5">
                    <div className="card d-flex align-items-center" style={{border: 'none'}}>
                        <img src={avatar} style={{borderRadius: '50%', height: '10rem', width: '10rem'}}  alt="Profile pic" />
                        <div className="card-body">
                            <h5 className="card-title">{username}</h5>
                            <p className="card-text">{bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;