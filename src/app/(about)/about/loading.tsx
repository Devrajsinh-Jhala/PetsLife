import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <p className="text-6xl">Loading...</p>
    </div>
  );
};

export default Loading;
