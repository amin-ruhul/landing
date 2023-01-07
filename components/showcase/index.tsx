import React from "react";
import Image from "next/image";

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
        <div className="shadow rounded-[10px] text-[12px]">
          <div className="">
            <Image
              src="/assets/images/pizza.svg"
              alt="pizza"
              width={277}
              height={250}
            />
          </div>
          <div className="flex items-center justify-between my-[1rem] px-[12.5px]">
            <p>Home made pizza</p>
            <p>$19</p>
          </div>

          <div className="flex items-center justify-between px-[12.5px] pb-[12.5px]">
            <div className="flex items-center space-x-[12px]">
              <div className="flex items-center bg-[#F7F8FA] py-[4px] px-[6px] space-x-[6px] rounded-[5px]">
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={12}
                  height={12}
                />
                <span>4.7</span>
              </div>
              <div className="flex items-center bg-[#F7F8FA] p-[4px] space-x-[6px] rounded-[5px]">
                <span>50-79 min</span>
              </div>
            </div>
            <div>
              <button className="bg-[#F3BA00] p-[.2rem]">
                <Image
                  src="/assets/icons/btn-icon.svg"
                  alt="btn-icon"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="shadow rounded-[10px] text-[12px]">
          <div>
            <Image
              src="/assets/images/pizza.svg"
              alt="pizza"
              width={277}
              height={250}
            />
          </div>
          <div className="flex items-center justify-between my-[1rem] px-[12.5px]">
            <p>Home made pizza</p>
            <p>$19</p>
          </div>

          <div className="flex items-center justify-between px-[12.5px] pb-[12.5px]">
            <div className="flex items-center space-x-[12px]">
              <div className="flex items-center bg-[#F7F8FA] py-[4px] px-[6px] space-x-[6px] rounded-[5px]">
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={12}
                  height={12}
                />
                <span>4.7</span>
              </div>
              <div className="flex items-center bg-[#F7F8FA] p-[4px] space-x-[6px] rounded-[5px]">
                <span>50-79 min</span>
              </div>
            </div>
            <div>
              <button className="bg-[#F3BA00] p-[.2rem]">
                <Image
                  src="/assets/icons/btn-icon.svg"
                  alt="btn-icon"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="shadow rounded-[10px] text-[12px]">
          <div>
            <Image
              src="/assets/images/pizza.svg"
              alt="pizza"
              width={277}
              height={250}
            />
          </div>
          <div className="flex items-center justify-between my-[1rem] px-[12.5px]">
            <p>Home made pizza</p>
            <p>$19</p>
          </div>

          <div className="flex items-center justify-between px-[12.5px] pb-[12.5px]">
            <div className="flex items-center space-x-[12px]">
              <div className="flex items-center bg-[#F7F8FA] py-[4px] px-[6px] space-x-[6px] rounded-[5px]">
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={12}
                  height={12}
                />
                <span>4.7</span>
              </div>
              <div className="flex items-center bg-[#F7F8FA] p-[4px] space-x-[6px] rounded-[5px]">
                <span>50-79 min</span>
              </div>
            </div>
            <div>
              <button className="bg-[#F3BA00] p-[.2rem]">
                <Image
                  src="/assets/icons/btn-icon.svg"
                  alt="btn-icon"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="shadow rounded-[10px] text-[12px]">
          <div>
            <Image
              src="/assets/images/pizza.svg"
              alt="pizza"
              width={277}
              height={250}
            />
          </div>
          <div className="flex items-center justify-between my-[1rem] px-[12.5px]">
            <p>Home made pizza</p>
            <p>$19</p>
          </div>

          <div className="flex items-center justify-between px-[12.5px] pb-[12.5px]">
            <div className="flex items-center space-x-[12px]">
              <div className="flex items-center bg-[#F7F8FA] py-[4px] px-[6px] space-x-[6px] rounded-[5px]">
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={12}
                  height={12}
                />
                <span>4.7</span>
              </div>
              <div className="flex items-center bg-[#F7F8FA] p-[4px] space-x-[6px] rounded-[5px]">
                <span>50-79 min</span>
              </div>
            </div>
            <div>
              <button className="bg-[#F3BA00] p-[.2rem]">
                <Image
                  src="/assets/icons/btn-icon.svg"
                  alt="btn-icon"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="shadow rounded-[10px] text-[12px]">
          <div>
            <Image
              src="/assets/images/pizza.svg"
              alt="pizza"
              width={277}
              height={250}
            />
          </div>
          <div className="flex items-center justify-between my-[1rem] px-[12.5px]">
            <p>Home made pizza</p>
            <p>$19</p>
          </div>

          <div className="flex items-center justify-between px-[12.5px] pb-[12.5px]">
            <div className="flex items-center space-x-[12px]">
              <div className="flex items-center bg-[#F7F8FA] py-[4px] px-[6px] space-x-[6px] rounded-[5px]">
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={12}
                  height={12}
                />
                <span>4.7</span>
              </div>
              <div className="flex items-center bg-[#F7F8FA] p-[4px] space-x-[6px] rounded-[5px]">
                <span>50-79 min</span>
              </div>
            </div>
            <div>
              <button className="bg-[#F3BA00] p-[.2rem]">
                <Image
                  src="/assets/icons/btn-icon.svg"
                  alt="btn-icon"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="shadow rounded-[10px] text-[12px]">
          <div>
            <Image
              src="/assets/images/pizza.svg"
              alt="pizza"
              width={277}
              height={250}
            />
          </div>
          <div className="flex items-center justify-between my-[1rem] px-[12.5px]">
            <p>Home made pizza</p>
            <p>$19</p>
          </div>

          <div className="flex items-center justify-between px-[12.5px] pb-[12.5px]">
            <div className="flex items-center space-x-[12px]">
              <div className="flex items-center bg-[#F7F8FA] py-[4px] px-[6px] space-x-[6px] rounded-[5px]">
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={12}
                  height={12}
                />
                <span>4.7</span>
              </div>
              <div className="flex items-center bg-[#F7F8FA] p-[4px] space-x-[6px] rounded-[5px]">
                <span>50-79 min</span>
              </div>
            </div>
            <div>
              <button className="bg-[#F3BA00] p-[.2rem]">
                <Image
                  src="/assets/icons/btn-icon.svg"
                  alt="btn-icon"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="shadow rounded-[10px] text-[12px]">
          <div>
            <Image
              src="/assets/images/pizza.svg"
              alt="pizza"
              width={277}
              height={250}
            />
          </div>
          <div className="flex items-center justify-between my-[1rem] px-[12.5px]">
            <p>Home made pizza</p>
            <p>$19</p>
          </div>

          <div className="flex items-center justify-between px-[12.5px] pb-[12.5px]">
            <div className="flex items-center space-x-[12px]">
              <div className="flex items-center bg-[#F7F8FA] py-[4px] px-[6px] space-x-[6px] rounded-[5px]">
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={12}
                  height={12}
                />
                <span>4.7</span>
              </div>
              <div className="flex items-center bg-[#F7F8FA] p-[4px] space-x-[6px] rounded-[5px]">
                <span>50-79 min</span>
              </div>
            </div>
            <div>
              <button className="bg-[#F3BA00] p-[.2rem]">
                <Image
                  src="/assets/icons/btn-icon.svg"
                  alt="btn-icon"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="shadow rounded-[10px] text-[12px]">
          <div>
            <Image
              src="/assets/images/pizza.svg"
              alt="pizza"
              width={277}
              height={250}
            />
          </div>
          <div className="flex items-center justify-between my-[1rem] px-[12.5px]">
            <p>Home made pizza</p>
            <p>$19</p>
          </div>

          <div className="flex items-center justify-between px-[12.5px] pb-[12.5px]">
            <div className="flex items-center space-x-[12px]">
              <div className="flex items-center bg-[#F7F8FA] py-[4px] px-[6px] space-x-[6px] rounded-[5px]">
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={12}
                  height={12}
                />
                <span>4.7</span>
              </div>
              <div className="flex items-center bg-[#F7F8FA] p-[4px] space-x-[6px] rounded-[5px]">
                <span>50-79 min</span>
              </div>
            </div>
            <div>
              <button className="bg-[#F3BA00] p-[.2rem]">
                <Image
                  src="/assets/icons/btn-icon.svg"
                  alt="btn-icon"
                  width={11}
                  height={11}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
