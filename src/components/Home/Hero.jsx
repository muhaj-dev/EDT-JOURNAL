import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

export default function Hero() {
  return (
    <div className="relative w-[95%] h-[100dvh] max-h-[700px] max-w-[1300px] mx-auto">
      <div className="my-14 top-0 absolute right-0">
        <div className="absolute -top-14 -left-20 pink h-[55px] w-[55px]" />
        <Image
          src="/images/Hero.svg"
          alt="lang"
          width={490}
          height={600}
          // priority
        />
        <div className="absolute -bottom-12 text-[min(2vw,24px)] font-semibold tracking-wider py-12 px-2 text-center text-white right-0 bg-primary ">
          <p className="text-[min(3vw,42px)] ">720K+</p>
          Publications
        </div>
      </div>
      <div className="pt-24 text-black isolate w-[850px] ">
        <p className="text-[min(10vw,70px)] text-balance tracking-wide font-semibold leading-[90px]">
          Discover Thousand of Educational Technology Journals and Books
        </p>
        <p className="mt-8 font-semibold opacity-70 text-[1.5rem] max-w-[550px]">
          We have made hundred thousand of literature that ready to fulfill
          researcher(s) need
        </p>
        <div className=" mt-14 w-[650px] ml-auto">
          <div className="border-2 bg-white border-black p-5 flex justify-between">
            <div className="">
              <p className="font-bold opacity-70">Search</p>
              <p className="font-bold">Search keyword, title, or author</p>
            </div>
            <button className="btn-pri">Search</button>
          </div>
          <div className="mt-5">
            <Link
              href="#"
              className="flex item-center gap-2 text-primary font-semibold"
            >
              See all publications
              <MdArrowRightAlt size={25} />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-ball h-[32rem] w-[32rem] absolute -left-[14rem] top-[3rem]" />
    </div>
  );
}
