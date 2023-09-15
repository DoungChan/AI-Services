import React, { useEffect, useState } from "react";
import { filter, shuffle } from "lodash";
import data from "@/data/data";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";
import Image from "next/image";
import Center from "@/components/Center";
const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

function ServiceDetail() {
  const query = useRouter().query.id;
  const router = useRouter();
  const [color, setColor] = useState("");
  const [activePage, setActivePage] = useState(false);
  useEffect(() => {
    setColor(shuffle(colors).pop());
    setTimeout(() => {
      setActivePage(true);
    }, 300);
  }, [query]);

  const [filterData, setFilterData] = useState([]);
  const [relateTedData, setRelateddData] = useState([]);
  useEffect(() => {
    let parsedData;
    const filterDataByCategoryName = () => {
      const filteredData = data.filter((item) => item.handle === query);
      const stringifyData = JSON.stringify(filteredData);
      if (stringifyData) {
        try {
          parsedData = JSON.parse(stringifyData);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
      setFilterData(parsedData);
    }; // Convert to JSON-formatted string
    const relateTedData = () => {
      const filteredData = data.filter((item) => item.handle === query);

      console.log("Filtered Data:", filteredData);

      const stringifyData = JSON.stringify(filteredData);

      if (stringifyData) {
        try {
          parsedData = JSON.parse(stringifyData);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }

      console.log("Parsed Data:", parsedData);

      setRelateddData(parsedData);
    };
    relateTedData(query);
    filterDataByCategoryName(query);
  }, [query]);

  // share format
  let url = `https://ai-services-nine.vercel.app/service-detail/${query}`;

  return (
    <>
      {activePage ? (
        <div
          className={`w-full h-screen overflow-auto bg-gradient-to-b to-[#121212] ${color} px-5 `}
        >
          {/* <section
      className={`flex items-end bg-gradient-to-b to-[#121212] ${color} h-80 text-white w-full `}
    >
      <div>
        <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold"></h1>
      </div>
    </section> */}

          <div className="overflow-y-auto mx-auto rounded-lg w-full md:w-4/5  lg:w-3/5 xl:w-2/5">
            <h1 className="text-center py-11 text-[50px] font-bold">
              <font>{filterData[0]?.name} </font>
            </h1>
            <p className="text-center">
              <font></font>
            </p>
            <img
              src={filterData[0]?.image}
              className="object-contain w-full h-full"
            />

            <div className="mt-6">
              <div className="space-x-2">
                {filterData[0]?.categories.map((category, index) => (
                  <a
                    className="inline-flex items-center rounded-full bg-[#fce9e8] my-1 px-2.5 py-0.5 text-xs font-medium text-[#e1554d] md:transition-opacity md:ease-in md:hover:opacity-75"
                    key={index}
                    onClick={() => router.push(`/category/${category.handle}`)}
                  >
                    <font>
                      <font>{category.name}</font>
                    </font>
                  </a>
                ))}
              </div>
              <div>
                <div className="md:flex md:items-center md:justify-between">
                  <h1 className="mt-3 text-3xl font-medium ">
                    <font>
                      <font>{filterData[0]?.name}</font>
                    </font>
                  </h1>
                  <p className="hidden md:block mt-4 md:mt-3 text-sm text-gray-text">
                    <font>
                      <font>{filterData[0]?.month_visited_count}</font>
                    </font>
                  </p>
                </div>
                <div className="flex flex-row ">
                  {/* <img src="/view.png" /> */}
                  <p className="md:hidden mt-4 text-xs text-gray-text">
                    {filterData[0]?.month_visited_count}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 mt-4">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center sm:col-span-1 sm:px-0">
                    <dt className="text-sm font-medium leading-6 bg-[#252525] px-2 py-1 rounded whitespace-nowrap">
                      <font>
                        <font>Official site</font>
                      </font>
                    </dt>
                  </div>
                </dl>
              </div>
              <div className="mt-6 lg:col-span-5">
                <div className="my-6 rounded-md bg-[#252525] bg-opacity-60 py-6 px-4 md:px-5">
                  <div className="recommend-point">
                    <div className="text-base text-white">
                      <ul role="list">
                        <li className="relative mt-3 first-of-type:mt-0 pl-6">
                          <font>
                            <font>{filterData[0]?.description}</font>
                          </font>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <a
                  target="_blank"
                  href="https://ottertune.com"
                  className={` my-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3.5 text-lg font-medium text-white hover:bg-primary-hover md:duration-150 md:ease-in`}
                >
                  <font>
                    <font>Try using {filterData[0]?.name}</font>
                  </font>
                </a>
                <div className="my-6 rounded-md bg-[#252525] bg-opacity-60 py-4 px-4 md:px-5 justify-center items-center ">
                  <h1 className="text-xl font-bold text-center">Share</h1>

                  <div className="text-base text-white flex flex-1 justify-between px-5">
                    <div className="flex flex-row w-full md:gap-24 gap-10 justify-center items-center py-4">
                      <FacebookShareButton
                        url={url}
                        quote="Check out the new promotion on PromoKh!"
                      >
                        <Image
                          src={"/facebook.png"}
                          alt="Twitter"
                          className=" cursor-pointer"
                          width={52}
                          height={52}
                        />
                      </FacebookShareButton>

                      <TwitterShareButton
                        url={url}
                        hashtags={["travel", "adventure"]}
                      >
                        <Image
                          src={"/twitter.png"}
                          alt="Twitter"
                          className=" cursor-pointer"
                          width={52}
                          height={52}
                        />
                      </TwitterShareButton>
                      <TelegramShareButton url={url}>
                        <Image
                          src={"/telegram.png"}
                          alt="telegram"
                          className=" cursor-pointer"
                          width={52}
                          height={52}
                        />
                      </TelegramShareButton>
                    </div>
                  </div>
                </div>
                <h1 className="text-3xl font-medium  py-10"> Related AI app</h1>
                <div className="my-6  border-t-2 bg-opacity-60 py-6 px-4 md:px-5 justify-center items-center">
                  <div className=" flex flex-wrap xl:grid-cols-3 min-[1650px]:grid-cols-4 min-[1000px]:grid-cols-1  lg:grid-cols-2 sm:grid-cols-1 grid-cols-2 grid-flow-row gap-10 justify-start">
                    {relateTedData.slice(0, 3).map((data, index) => (
                      <div
                        key={index}
                        className={`rounded-[10px] w-fit font-black text-2xl flex flex-col px-3 py-3 justify-center bg-[#282828] bg-opacity-70 hover:bg-opacity-100 duration-500 ease-in-out cursor-pointer`}
                        onClick={() =>
                          router.push(`/service-detail/${data.handle}`)
                        }
                      >
                        <div className="w-40 h-240 bg-black rounded-[10px] overflow-hidden group-hover:opacity-75 transition-opacity duration-300 ease-in-out">
                          <img
                            className="object-cover w-full h-full "
                            src={data.image}
                          ></img>
                        </div>
                        <div className="py-1">
                          <div className="space-x-2 w-full flex flext-col">
                            {data.categories
                              .slice(0, 2)
                              .map((category, index) => (
                                <div key={index}>
                                  <a
                                    href={`/category/${category.handle}`}
                                    className="inline-flex items-center px-1 rounded-full h-5 bg-[#fce9e8] mt-1 text-[10px] font-medium text-[#121212] md:transition-opacity md:ease-in md:hover:opacity-75"
                                    onClick={(event) => {
                                      event.stopPropagation(); // Stop event propagation
                                      router.push(
                                        `/category/${category.handle}`
                                      ); // Navigate to category page
                                    }}
                                  >
                                    <font>
                                      <font>{category.name}</font>
                                    </font>
                                  </a>
                                </div>
                              ))}
                          </div>
                          <div className="flex justify-between items-center">
                            <h1
                              className={`text-sm font-bold  rounded-xl w-fit`}
                            >
                              {data.name}
                            </h1>

                            <div className="justify-center items-center mt-4">
                              <img src="/star.png" className="w-4 h-4" />
                              <h1 className="text-sm font-bold mb-4  rounded-3xl w-fit">
                                {data.review} 7.4
                              </h1>
                            </div>
                          </div>
                          <div className="">
                            <p className="text-slate-200 text-xs overflow-wrap-break-word text-opacity-60 max-w-[100px] max-h-7 overflow-clip">
                              {data.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div
          className={`w-full h-screen flex justify-center items-center bg-gradient-to-b to-[#121212] ${color}`}
        ></div>
      )}
    </>
  );
}

export default ServiceDetail;
