import React,{useState,useEffect} from 'react'
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';

function Feed() {
    const[posts,setPosts]=useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot=>(
            setPosts(snapshot.docs.map(doc=>doc.data()))
        ))
        
    }, []);


    return (
        <div className="feed">
            <div className="feed_header">
                <h2>Home</h2>

            </div>
            <TweetBox/>
                {posts.map(post=>(
                    <Post 
                        displayname={post.displayname}
                        verified={post.verified} 
                        text={post.text} 
                        avatar={post.avatar}
                    />

                ))}
            
            
        </div>
    )
}

export default Feed
