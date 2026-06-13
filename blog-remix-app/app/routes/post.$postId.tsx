import { useParams, useNavigate } from "react-router";
import { posts } from "../data/posts";

export const PostView = () => {
  // Extract the postId parameter from the URL
  const params = useParams();
  const navigate = useNavigate();

  // Find the post object that matches the ID in the URL
  const post = posts.find((p) => p.id === Number(params.postId));

  // If the user types a random ID that doesn't exist:
  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <div>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
        {post.title}
      </h1>
      <p style={{ color: '#333', marginBottom: '20px', lineHeight: '1.6' }}>
        {post.content}
      </p>

      <button 
        onClick={() => navigate('/')}
        style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#f0f0f0', border: '1px solid #ccc', borderRadius: '4px' }}
      >
        Return to Feed
      </button>
    </div>
  );
};

export default PostView;