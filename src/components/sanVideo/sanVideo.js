import React from "react";
import styles from "./SanVideo.module.scss";

const SanVideo = () => {
  return (
    <div className={styles.container}>
      <iframe
        title="Santiment"
        width="556"
        height="278"
        src="https://www.youtube.com/embed/AsZRjm9x5HI"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default SanVideo;
