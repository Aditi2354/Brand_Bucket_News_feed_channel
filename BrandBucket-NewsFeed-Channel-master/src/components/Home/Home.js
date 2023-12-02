import React, { useEffect, useState } from 'react';
import './Home.css';
import PostListTiles from '../PostListTiles/PostListTiles';
import Sidebar from '../Sidebar/Sidebar';
import PostGridView from '../PostGridView/PostGridView';

const Home = () => {
    const [newsData, setNewsData] = useState([]);
    const [isOpen, setisOpen] = useState(false);

    useEffect(() => {
        fetch('https://api.first.org/data/v1/news')
            .then(res => res.json())
            .then(data => setNewsData(data.data))
    }, [])

    const toggleBarView = () => {
        setisOpen(!isOpen)
    }



    return (
        <div className="homepage">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 sidebar-content">
                        <Sidebar toggle={toggleBarView} isOpen={isOpen} />
                    </div>
                    <div className="PostListTiles col-md-9">

                        {
                            isOpen ?
                                <div className="row ">
                                    {
                                        newsData.map((data) =>
                                            <PostGridView data={data} key={data.id} />
                                        )
                                    }

                                </div>
                                :
                                    newsData.map((data) => <PostListTiles data={data} key={data.id}></PostListTiles>)

                        }



                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;