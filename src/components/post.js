import React  from 'react';
import './style.css';



function Post(props) {   

    return(
        <div className="wrapper">
            <div>
                <img className="avatar" src={props.author.photo} alt='avatar'/>
            </div>
            <div className="main">
                <div className="info">
                    <div className="info-acc">
                        <span className="name">{props.author.name}</span>
                        <span className="nickname">{props.author.nickname}</span>
                        <span className="date">{props.date}</span>
                    </div>
                    <div>
                        <i className="fa  fa-chevron-down" aria-hidden="true"></i>
                    </div>
                </div>
                    <div className="content-text">{props.content}</div>
                <div className="main-content">
                        <img className="image" src={props.image} alt='content image'/>
                        <div className="footer">
                            <i className="fa fa-comment" aria-hidden="true">
                                <span>482</span>
                            </i>
                            <i className="fa fa-retweet" aria-hidden="true">
                                <span>146</span>
                            </i>
                            <i className="fa fa-heart-o " aria-hidden="true">
                                <span>887</span>
                            </i>
                            <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                        </div>
                </div>
            </div>
        </div>            
    )
}


export default Post;