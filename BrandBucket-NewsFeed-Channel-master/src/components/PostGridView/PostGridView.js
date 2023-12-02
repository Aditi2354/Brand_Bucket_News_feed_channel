import React from 'react';
import './PostGridView.css';


const PostGridView = (props) => {
    const { title, image, summary, published } = props.data;

    return (
        <div className="col-md-4">
            <div className="card mt-5" style={{ "width": "16rem" }}>
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    <p className="card-text text-summery text-truncate">{summary}</p>
                    <p className="card-text text-date"> {published}</p>
                </div>
                {
                    image &&
                    <img src={image} className="card-img-top" alt={title} />
                }

            </div>
        </div>




    );
};

export default PostGridView;