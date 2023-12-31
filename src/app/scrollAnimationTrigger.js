"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function ScrollAnimationTrigger() {
  return (
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
  );
}

export default ScrollAnimationTrigger;
