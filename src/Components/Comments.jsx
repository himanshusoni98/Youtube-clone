import React, { useEffect, useState } from "react";
import { GOOGLE_API, USER_LOGO } from "../Utils/constants";

const CommentsContainer = ({ videoId }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (videoId) {
            fetchData();
        }
    }, [videoId]);

    const fetchData = async () => {
        const COMMENTS_API = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${GOOGLE_API}`;
        try {
            const response = await fetch(COMMENTS_API);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Fetched data:", data);
            const formattedComments = data.items.map(item => ({
                name: item.snippet.topLevelComment.snippet.authorDisplayName,
                text: item.snippet.topLevelComment.snippet.textDisplay,
                imageUrl: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
                replies: item.replies ? item.replies.comments.map(reply => ({
                    name: reply.snippet.authorDisplayName,
                    text: reply.snippet.textDisplay,
                    imageUrl: reply.snippet.authorProfileImageUrl,
                    replies: []
                })) : []
            }));
            console.log("Formatted comments:", formattedComments);
            setComments(formattedComments);
        } catch (error) {
            console.error("Error fetching comments:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading comments...</div>;
    }

    if (error) {
        return <div>Error loading comments: {error}</div>;
    }

    return (
        <div className="my-8">
            <h2 className="font-bold text-2xl mb-4">Comments:</h2>
            <div>
                <input type="text" placeholder="Add Comments" className="border border-black w-96 mx-4 my-4"/>
                <button className="bg-red-500 px-4 rounded-lg ">Comment</button>
            </div>
            <CommentsList comments={comments} />
        </div>
    );
};

const Comment = ({ data }) => {
    const { name, text, imageUrl, replies } = data;
    return (
        <div className="flex shadow-sm bg-gray-100 p-2 mb-2 rounded">
            <img
                alt="user"
                src={imageUrl || USER_LOGO}
                className="h-10 w-10 rounded-full mr-2"
            />
            <div>
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index} className="ml-4">
            <Comment data={comment} />
            {comment.replies && comment.replies.length > 0 && (
                <div className="pl-5 border border-l-black ml-5">
                    <CommentsList comments={comment.replies} />
                </div>
            )}
        </div>
    ));
};

export default CommentsContainer;
