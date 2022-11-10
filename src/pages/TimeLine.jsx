import React from "react";

const TimeLine = () => {
  return (
    <section className="bg-gray-800 text-gray-100">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#00F0B5]">
              <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                Journey of
              </span>
              <h3 className="text-3xl text-[#00F0B5] font-bold uppercase">
                Success
              </h3>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#00F0B5]">
                <h3 className="text-xl font-semibold tracking-wide">
                  Got awarded from BRB
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  Dec 2020
                </time>
                <p className="mt-3">
                  It was the spacial day. I got awarded from BRB for
                  contribution to the economy
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#00F0B5]">
                <h3 className="text-xl font-semibold tracking-wide">
                  Growing as a top consultancy
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  Jul 2019
                </time>
                <p className="mt-3">
                  At this time its almost becoming a top tax and law consultancy
                  and publishing 5 books and provide service 3000 peoples.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#00F0B5]">
                <h3 className="text-xl font-semibold tracking-wide">
                  Started this consultancy
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  Jan 2016
                </time>
                <p className="mt-3">
                  I am started this consultancy with lot of passion and
                  dedication to serve people about tax and law related problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
