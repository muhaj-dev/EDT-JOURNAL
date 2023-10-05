import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

export default function Publish() {
  return (
    <div className="my-16 max-w-[1300px] mx-auto">
      <h1 className="font-bold text-2xl text-left ">
        Recently Published Paper
      </h1>
      <div className="grid grid-cols-12 gap-4 mt-8">
        <PubOne />
        <PubTwo />
        <PubThree />
      </div>
    </div>
  );
}

export const PubOne = () => {
  return (
    <div className="col-span-3 flex">
      <div className="h-fit w-full mt-auto">
        <p className="text-primary font-semibold text-sm flex justify-between mb-3 items-center">
          {" "}
          Open access to tech
          <MdArrowRightAlt size={15} />
        </p>
        <div className="pub1 h-[200px] w-full" />
      </div>
    </div>
  );
};

export const PubTwo = () => {
  return (
    <div className="col-span-4 ">
      <div className="pub2 h-[350px] w-full" />
      <p className="text-primary font-semibold text-sm flex justify-between mt-3 items-center">
        Problms facing Educational Technology
        <MdArrowRightAlt size={15} />
      </p>
    </div>
  );
};

export const PubThree = () => {
  return (
    <div className="col-span-5">
      <Link href='#' className='flex gap-4 mb-10 font-bold justify-between items-center' >
        <p className=" max-w-[310px]">Nano Technology, Yearly Development in different field.</p>
        <MdArrowRightAlt className="text-primary" size={25} />
      </Link>
      <Link href='#' className='flex gap-4 mb-10 font-bold justify-between items-center' >
        <p className=" max-w-[310px]">Nano Technology, Yearly Development in different field.</p>
        <MdArrowRightAlt className="text-primary" size={25} />
      </Link>
      <Link href='#' className='flex gap-4 mb-10 font-bold justify-between items-center' >
        <p className=" max-w-[310px]">Nano Technology, Yearly Development in different field.</p>
        <MdArrowRightAlt className="text-primary" size={25} />
      </Link>
      <Link href='#' className='flex gap-4 mb-10 font-bold justify-between items-center' >
        <p className=" max-w-[310px]">Nano Technology, Yearly Development in different field.</p>
        <MdArrowRightAlt className="text-primary" size={25} />
      </Link>
      <Link href='#' className="text-primary ml-auto w-fit font-semibold text-sm flex gap-2 mt-auto items-center">
       View more
        <MdArrowRightAlt size={15} />
      </Link>
    </div>
  );
};
