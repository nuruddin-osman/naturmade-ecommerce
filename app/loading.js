import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Optional: If you want the default styles

const Loading = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Skeleton height={30} width="80%" />
      <Skeleton
        count={3}
        height={20}
        width="90%"
        style={{ marginBottom: "10px" }}
      />
      <Skeleton height={20} width="50%" />
    </div>
  );
};

export default Loading;
