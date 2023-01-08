import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <form action="" className="w-full">
          <h5 className="text-[1.5rem]">
            Do you have a question <br /> or want to become a seller?
          </h5>
          <p className="text-[0.75rem] text-[#1B1C21] mb-[2rem]">
            Fill this form and our manager will contact you next 48 hours.
          </p>

          <div className="w-ful lg:w-[90%]">
            <div className="w-full mb-[1.563rem]">
              <input
                type="text"
                placeholder="Your name"
                className="h-[3.625rem] bg-white w-[47%] lg:w-[40%] mr-[1rem] px-[1.375rem] rounded-[0.625rem] shadow-sm"
              />
              <input
                type="text"
                placeholder="Your e-mail"
                className="h-[3.625rem] bg-white w-[47%] lg:w-[40%] px-[1.375rem] rounded-[0.625rem] shadow-sm"
              />
            </div>
            <div>
              <textarea
                placeholder="Your message"
                className="w-[97%] lg:w-[82%] h-[13.438rem] p-[1.375rem] rounded-[0.625rem] shadow-sm"
              />
            </div>
          </div>
        </form>
        <div className="mt-[1rem] lg:mt-0">
          <Image
            src="assets/images/contact.svg"
            alt="contact"
            width={503}
            height={402}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
