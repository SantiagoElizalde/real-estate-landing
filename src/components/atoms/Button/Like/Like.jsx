import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const Like = ({ liked, onClick }) => {
  const [showLiked, setShowLiked] = useState(liked);

  const handleOnClick = () => {
    setShowLiked(prev => !prev)
    // onClick()
  };

  return (
    <button
      onClick={handleOnClick}
      className={`${
        showLiked && "text-danger"
      } active:text-danger scale-125 active:scale-150 active:-rotate-3 transition`}
    >
      {showLiked ? (
        <FontAwesomeIcon icon={faHeart} className={``} />
      ) : (
        <FontAwesomeIcon icon={faHeartRegular} className={``} />
      )}
    </button>
  );
};

export default Like;
