import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
import React from "react";

export default function Blog() {
  return (
    <div className="relative w-full">
      <div className="my-5  w-[95%]  max-w-[1300px] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl text-left ">
            bL<span className="text-primary">O</span> p
            <span className="text-secondary">O</span>sT
          </h1>
          <Link
            href="#"
            className="text-primary ml-auto w-fit font-semibold text-sm flex gap-2 mt-auto items-center"
          >
            see all blog posts
            <MdArrowRightAlt size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
