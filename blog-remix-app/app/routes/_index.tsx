import { Link } from "react-router";
import { posts } from "../data/posts";

export const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog Feed</h1>
      
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id}>
            <Link 
              to={`/post/${post.id}`} 
              className="text-xl text-blue-600 hover:underline font-semibold"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
