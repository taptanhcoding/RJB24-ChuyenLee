import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { AiTwotoneLike } from "react-icons/ai";

import classnames from "classnames/bind";
import styles from "./LikeBtn2.module.scss";

const cx = classnames.bind(styles);

function LikeBtn2() {
  const [isLike, setLike] = useState(false);

  const handleLike = () => {
    setLike(prevs => !prevs);
  };

  console.log(isLike);
  return (
    <>
      
        {isLike ? (
          <BiLike className={cx("like")} onClick={handleLike}/>
        ) : (
          <AiTwotoneLike className={cx("like-true", "like")} onClick={handleLike}/>
        )}
      
    </>
  );
}

export default LikeBtn2;
