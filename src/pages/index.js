import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <main
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
          <button
            onClick={() => router.push("/tournaments")}
            className="text-red-500 border border-red-500 rounded-sm px-4 py-2 text-[12px] md:text-[16px]"
          >
            Tournaments
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between item-center p-[25px] mt-0 md:mt-10">
        <div className="w-[100%] md:w-[50%] flex-col gap-[20px]">
          <h1 className="text-[2.2rem] md:text-[3.5rem] text-bold text-cyan-200">
            Free Fire Tournaments Crafted for you.
          </h1>
          <p className="text-[16px] md:text-[25px] text-white text-left">
            We match you with other similar players and compete in Tournaments
            to hone your gaming skills and Win Doaminds or other prizes.
          </p>
        </div>
        <div className="w-[100%] md:w-[50%] h-[300px] md:h-[500px] flex items-center justify-center">
          <div className=" md:w-[560px]  h-[300px] md:h-[500px] w-full flex items-center justify-center">
            <img
              className="mr-10 md:mr-0 w-[350px] md:w-[560px]  h-[300px] md:h-[500px]"
              src={"/ff_persona.png"}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
