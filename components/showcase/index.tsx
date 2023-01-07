import React from "react";
import Image from "next/image";
import FoodCard from "../card/FoodCard";

function ShowCase() {
  return (
    <div className="mt-[6.563rem]">
      <h2 className="text-[1.5rem]">Home Kitchen</h2>
      <div className="py-[1rem]">
        <div className="" role="group">
          <button
            type="button"
            className="border border-[#F3BA00] py-[0.813rem] px-[2.5rem] border-r-0 rounded-l-[10px] bg-[#F3BA00]"
          >
            All
          </button>
          <button
            type="button"
            className="border border-[#F3BA00] py-[0.813rem] px-[2.5rem] border-r-0"
          >
            Button
          </button>
          <button
            type="button"
            className="border border-[#F3BA00] py-[0.813rem] px-[2.5rem] border-r-0"
          >
            Free delivery
          </button>
          <button
            type="button"
            className="border border-[#F3BA00] py-[0.813rem] px-[2.5rem] border-r-0"
          >
            New
          </button>

          <button
            type="button"
            className="border border-[#F3BA00] py-[0.813rem] px-[2.5rem] rounded-r-[10px]"
          >
            Coming
          </button>
        </div>
      </div>
      <select
        name=""
        id=""
        className="w-[15.688rem] border border-[#F3BA00] h-[2.875rem] my-[2.5rem] rounded-[10px] px-[0.5rem]"
      >
        <option value="1">1</option>
        <option value="1">1</option>

        <option value="1">1</option>
        <option value="1">1</option>
      </select>

      <div className="grid sm:grid-cols-2 sm:gap-[0.5rem] md:grid-cols-3 md:gap-[0.8rem]  lg:grid-cols-5 lg:gap-[1.1rem] xl:grid-cols-6 xl:gap-[1.8rem] mb-[6.25rem]">
        <FoodCard />
        <FoodCard />
      </div>

      <div className="w-full pb-[6.25rem] flex items-center justify-center">
        <button className="border border-[#F3BA00] rounded-[0.625rem] w-[10.75rem] h-[2.875rem]">
          + &nbsp;&nbsp;Load more...
        </button>
      </div>
    </div>
  );
}

export default ShowCase;
