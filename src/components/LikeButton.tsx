import { useState } from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import './styles/main.css';

interface LikeButtonProps {
    onClick: () => void;
  }
  
  const LikeButton: React.FC<LikeButtonProps> = ({ onClick }) => {
    const [liked, setLiked] = useState(false);
  
    const handleClick = () => {
      if (liked) {
        console.log('unliked');
      } else {
        console.log('liked');
      }
      setLiked(!liked);
      onClick(); // Invoke the onClick function passed as a prop
    };
  
    return (
    <div className="like-button-container">
        <h1>Click on the like button to change your name. Observe changes within the console!</h1>
      <button
        className={`like-button ${liked ? 'like-button-liked' : ''}`}
        onClick={handleClick}
      >
        {liked ? (
          <AiFillLike className="like-button-icon" />
        ) : (
          <AiOutlineLike className="like-button-icon" />
        )}
      </button>
    </div>
    );
  };
  
  export default LikeButton;
