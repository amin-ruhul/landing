import Image from "next/image";

function Blog() {
  return (
    <div className="px-[2.25rem] lg:px-[6.25rem] bg-[#FFFFFF] pt-[6.25rem] py-[7.188rem]">
      <h1 className="text-[1.5rem] font-semibold mb-[1.5rem]">Our Blog</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8">
        <div className="flex flex-col items-center mb-[2.938rem]">
          <div className="w-full h-[183px] lg:h-[283px] relative mb-[0.7rem]">
            <Image src="/assets/images/blog-1.svg" alt="blog-picture" fill />
          </div>
          <div className="flex flex-col items-start ">
            <p className="text-[1.3rem] font-semibold">
              Most Satisfying Cake decorating Cake ideas{" "}
            </p>
            <p className="text-[0.75rem] mt-[0.5rem]">
              Quis hendrerit nibh mauris sed faucibus. <br />
              Quis hendrerit nibh mauris sed faucibus.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 lg:row-span-2 flex flex-col items-center mb-[2.938rem]">
          <div className="w-full h-[250px] lg:h-[621px] relative mb-[0.7rem]">
            <Image src="/assets/images/blog-big.svg" alt="blog-picture" fill />
          </div>

          <div className="flex flex-col items-start mt-[1rem]">
            <p className="text-[1.3rem] font-semibold">
              Most Satisfying Cake decorating Cake ideas{" "}
            </p>
            <p className="text-[0.75rem] mt-[0.5rem]">
              Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh
              mauris sed faucibus.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-[2.938rem]">
          <div className="w-full h-[183px] lg:h-[283px]  relative mb-[0.7rem]">
            <Image src="/assets/images/blog-1.svg" alt="blog-picture" fill />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[1.3rem] font-semibold">
              Most Satisfying Cake decorating Cake ideas{" "}
            </p>
            <p className="text-[0.75rem] mt-[0.5rem]">
              Quis hendrerit nibh mauris sed faucibus. <br />
              Quis hendrerit nibh mauris sed faucibus.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-[2.938rem]">
          <div className="w-full h-[183px] lg:h-[283px]  relative mb-[0.7rem]">
            <Image src="/assets/images/blog-1.svg" alt="blog-picture" fill />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[1.3rem] font-semibold">
              Most Satisfying Cake decorating Cake ideas{" "}
            </p>
            <p className="text-[0.75rem] mt-[0.5rem]">
              Quis hendrerit nibh mauris sed faucibus. <br />
              Quis hendrerit nibh mauris sed faucibus.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-[2.938rem]">
          <div className="w-full h-[183px] lg:h-[283px]  relative mb-[0.7rem]">
            <Image src="/assets/images/blog-1.svg" alt="blog-picture" fill />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[1.3rem] font-semibold">
              Most Satisfying Cake decorating Cake ideas{" "}
            </p>
            <p className="text-[0.75rem] mt-[0.5rem]">
              Quis hendrerit nibh mauris sed faucibus. <br />
              Quis hendrerit nibh mauris sed faucibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
