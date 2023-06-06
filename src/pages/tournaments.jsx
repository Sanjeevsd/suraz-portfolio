import Image from "next/image";
import React from "react";

const tournaments = () => {
  return (
    <div
      className={`flex min-h-screen flex-col gap-[10px]  md:gap-[50px] px-[20px] md:px-24 py-[20px] md:py-[50px]`}
    >
      <div className=" flex justify-between items-center gap-2">
        <div className="w-[120px] h-[50px] md:h-[70px] rounded-md overflow-hidden">
          <Image src={"/logo.jpg"} alt="logo" width={100} height={100} />
        </div>
        <div className="flex gap-6 items-center">
          <button
            onClick={() => window.open("https://discord.gg/aD5CzeG6", "_blank")}
            className="text-white text-[12px] md:text-[16px]"
          >
            Discord
          </button>

          <button
            onClick={() => window.open("https://discord.gg/zxAgMDr9", "_blank")}
            className="text-white text-[12px] md:text-[16px]"
          >
            Giveaway
          </button>
          <button className="text-red-500 border border-red-500 rounded-sm px-4 py-2 text-[12px] md:text-[16px]">
            Tournaments
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeQToRvy_6qA8AbPZh9WVKltDMEy_vVbfhTi6_XcOWAjno6_Q/viewform?embedded=true"
          width="640"
          height="1200"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default tournaments;
