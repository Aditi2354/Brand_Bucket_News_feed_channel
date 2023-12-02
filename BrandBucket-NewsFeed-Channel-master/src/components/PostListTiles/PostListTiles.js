import React from 'react';
import './PostListTiles.css';


const PostListTiles = (props) => {
    const { title, published, summary } = props.data;
    return (
        <div className="post-list-tiles mt-5">
            <div className="post-list">
                <div className="card d-flex justify-content-around align-items-cente">
                    <div className="round-div">
                   
                    </div>
                    <div className="card-body">
                        <div className="card-title">
                            <h4 className="card-text">{title}</h4>
                            <p className="card-text text-truncate"> {summary}</p>
                            <p className="card-text card-date">{published}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PostListTiles;