import React from "react";

const Avatar = ({ src, alt, fallback }) => {
  return (
    <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-amber-500 flex items-center justify-center text-white">
      {src ? <img src={"https://media.giphy.com/media/yK7HwCfUh4EpwSBdcj/giphy.gif?cid=ecf05e47f74r2wbabqihk7dh6gxrsts2qlbqf6jvp25gn82i&ep=v1_gifs_search&rid=giphy.gif&ct=g"} alt={alt} className="h-full w-full" /> : fallback}
    </div>
  );
};

export default Avatar;
