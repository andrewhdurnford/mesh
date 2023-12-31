"use client";
import Image from "next/image";
// import ScrollHide from "src/app/scrollhide.js";
import { motion } from "framer-motion";
// import ScrollAnimationTrigger from "./scrollAnimationTrigger";
import Scene from "./mesh";

export default function Home() {
  return (
    <main className="flex flex-initial flex-col items-center min-h-screen  bg-gradients bg-cover -z-50">
      <div className="flex flex-initial justify-center content-center fixed top-0 left-0 bottom-0 right-0">
        {/* <Image
          className=" -z-30 self-center mix-blend-luminosity"
          src="/meshball.png"
          alt="mesh"
          width={750}
          height={750}
        /> */}
        <Scene />
      </div>
      <div className="font-druk text-white text-6xl mt-80 z-10">MESH</div>
      <div className="text-white text-2xl mt-20 font-trip font-light">
        DISCOVER YOUR SURROUNDINGS, WHERE EVERY STEP UNLOCKS NEW STORIES
      </div>
      <div className="flex flex-initial flex-col items-center mt-20 mb-64 sticky top-6">
        <div className="text-white text-base font-trip">Join the waitlist</div>
        <div className="flex flex-auto items-center justify-center w-80 h-8 mt-1.5 bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.5)] rounded-lg shadow border-2 border-cyan-200">
          <form className="w-11/12 flex flex-initial items-center justify-between">
            <input
              className="border-0 focus:outline-0 bg-transparent autofill:bg-transparent text-white text-xs font-trip w-9/12"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            ></input>
            <input
              className="bg-[#65acd1] rounded-md"
              type="image"
              src="/submit.svg"
            ></input>
          </form>
        </div>
      </div>
      <div className="w-full">
        <motion.div
          className="mt-36 flex ml-20 mb-16 w-96 h-32 bg-[#65acd1]/[.2] rounded-xl shadow content-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            className="ml-3 mr-3 fill-white"
            src="/profile.svg"
            alt="profile picture"
            width={100}
            height={100}
          />
          <div className="h-32 flex flex-col justify-center content-center">
            <div className="font-trip text-2xl text-white font-medium">
              Edison Qu, 18
            </div>
            <div className="font-trip text-sm text-[#C5D0DA]">
              London, ON | Western University
            </div>
            <div className="flex h-5">
              <div className="mr-3 w-[3.688rem] h-4 bg-slate-500 rounded-lg font-trip text-xs text-white text-center">
                🚶Hiking
              </div>
              <div className="mr-3 h-4 w-[6.313rem] bg-slate-500 rounded-lg font-trip text-xs text-white text-center">
                💻 Programming
              </div>
              <div className="w-16 h-4 bg-slate-500 rounded-lg font-trip text-xs text-white text-center">
                🪙 Crypto
              </div>
            </div>
            <div className="text-sm text-white font-trip">
              You met Edison at: Starbucks Cafe{" "}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex ml-auto mr-28 mb-16 w-96 h-32 bg-[#65acd1]/[.2] rounded-xl shadow content-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            className="ml-3 mr-3 fill-white"
            src="/profile.svg"
            alt="profile picture"
            width={100}
            height={100}
          />
          <div className="h-32 flex flex-col justify-center content-center">
            <div className="font-trip text-2xl text-white font-medium">
              Andrew Durnford, 17
            </div>
            <div className="font-trip text-sm text-[#C5D0DA]">
              London, ON | Western University
            </div>
            <div className="flex h-5">
              <div className="mr-3 w-fit h-4 bg-slate-500 rounded-lg font-trip text-xs text-white text-center">
                🚶Hiking
              </div>
              <div className="mr-3 h-4 w-fit bg-slate-500 rounded-lg font-trip text-xs text-white text-center">
                💻 Gaming
              </div>
              <div className="w-fit h-4 bg-slate-500 rounded-lg font-trip text-xs text-white text-center">
                🪙 Stocks
              </div>
            </div>
            <div className="text-sm text-white font-trip">
              You met Andrew at: Starbucks Cafe{" "}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex mb-48 ml-36 w-96 h-32 bg-[#65acd1]/[.2] rounded-xl shadow content-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            className="ml-3 mr-3 fill-white"
            src="/profile.svg"
            alt="profile picture"
            width={100}
            height={100}
          />
          <div className="h-32 flex flex-col justify-center content-center">
            <div className="font-trip text-2xl text-white font-medium">
              Marco Chen, 18
            </div>
            <div className="font-trip text-sm text-[#C5D0DA]">
              London, ON | Western University
            </div>
            <div className="flex h-5">
              <div className="mr-3 w-[3.688rem] h-4 bg-slate-500 rounded-lg font-trip text-xs text-white text-center">
                🚶Hiking
              </div>
              <div className="mr-3 h-4 w-[6.313rem] bg-slate-500 rounded-lg font-trip text-xs text-white text-center">
                💻 Programming
              </div>
              <div className="w-16 h-4 bg-slate-500 rounded-lg font-trip text-xs text-white text-center">
                🪙 Crypto
              </div>
            </div>
            <div className="text-sm text-white font-trip">
              You met Marco at: DB Weldon{" "}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-between w-full mt-52 mb-52">
        <Image
          className="ml-14 fill-white"
          src="/phones.svg"
          alt="profile picture"
          width={500}
          height={500}
        />
        <div className="mr-10 flex flex-col justify-center items-center w-34rem">
          <div className="font-DTWT text-2xl font-medium text-white text-center">
            You pass over 1000 people a day
          </div>
          <div className="font-TSMR text-lg text-white max-w-[27rem] text-center">
            Think about how many of those people you have something in common
            with
          </div>
        </div>
      </div>
    </main>
  );
}
