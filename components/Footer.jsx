import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="">
        <div className=" m-auto bg-transparent border-t-2 my-10 space-y-5 pt-5 text-white text-opacity-60 h-32 px-20 flex flex-wrap justify-between items-center">
          <img
            src="https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/logo.png"
            width={150}
            height={150}
          />{" "}
          <p>Copyright©2023 SroeunDoungchan. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
