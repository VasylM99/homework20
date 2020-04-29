import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_POST } from '../store/actions/posts.actions';
import moment from 'moment';

const authors = [
    {
        name: 'Yoda',
        photo: 'https://www.ednist.info/media/images/32224/raw/7fed94ee34b502eaa8178097620fd535.jpg',
        nickname: '@yoda'
    },
    {
        name: 'Chubakka',
        photo: 'https://gdb.rferl.org/E34AF90C-3403-4055-8E7A-F1F9B6399FD2_cx0_cy10_cw0_w408_r1_s.jpg',
        nickname: '@chubakka'
    },
    {
        name: 'Dart Vader',
        photo: 'https://i.citrus.ua/uploads/content/product-photos/fedenicheva/March/267060.jpg',
        nickname: '@dartvader'
    },
]
function Inputs(props) {
    const [content, setContent] = useState('');
    const [image, setImage]= useState('');
    const [author, setAuthor] = useState(authors[0]);
    const dispatch= useDispatch();

    const handleContentChange = (event)=>{
        setContent(event.target.value)
    }
    const handleImageChange = (event)=>{
        setImage(event.target.value)
    }

    const handleAuthorChange = (event) => {
        const author = authors.find(item => item.name === event.target.value);
        setAuthor(author);
    }

    const addPost = () => {
        dispatch({ type: CREATE_POST, payload: {
            author,
            content,
            image,
            date: moment().format('DD MMM.')
        }})
        setContent('')
        setImage('')
    }
    return(
        <div className='inputs'>
            <div>
                <input className='input' placeholder='Content' value={content} onChange={handleContentChange}/>
            </div>
            <div>
                <input className='input' value={image} placeholder='Image' onChange={handleImageChange}/>
            </div>
            <div>
                <select className='input' onChange={handleAuthorChange}           >
                    {authors.map(author => 
                        <option 
                            value={author.name}
                        >{author.name}</option>) }
                </select>
            </div>
            <button className='button' onClick={addPost}>Add post</button>
        </div>
    )
};

export default Inputs;