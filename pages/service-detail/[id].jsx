import {
  ArrowDownCircleIcon,
  ArrowLeftCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import useImageColor from "use-image-color";
import React, { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { Image } from "use-image-color";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

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
  const [color, setColor] = useState("");
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);

  return (
    <div className="w-full h-screen overflow-auto bg-[#121212] p-4">
      <div className="overflow-y-auto  mx-auto rounded-lg w-full md:w-4/5  lg:w-3/5 xl:w-2/5">
        <img
          src="https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/zev.png"
          className="object-contain w-full h-full"
        />

        <div className="mt-6">
          <div className="space-x-2">
            <a
              href="https://app-liv.jp/ai/tools?tag=23/"
              className="inline-flex items-center rounded-full bg-[#fce9e8] my-1 px-2.5 py-0.5 text-xs font-medium text-[#e1554d] md:transition-opacity md:ease-in md:hover:opacity-75"
            >
              <font>
                <font>chatbot</font>
              </font>
            </a>
            <a
              href="https://app-liv.jp/ai/tools?tag=811/"
              className="inline-flex items-center rounded-full bg-[#fce9e8] my-1 px-2.5 py-0.5 text-xs font-medium text-[#e1554d] md:transition-opacity md:ease-in md:hover:opacity-75"
            >
              <font>
                <font>Paid</font>
              </font>
            </a>
          </div>
          <div>
            <div className="md:flex md:items-center md:justify-between">
              <h1 className="mt-3 text-3xl font-medium ">
                <font>
                  <font>Zev</font>
                </font>
              </h1>
              <p className="hidden md:block mt-4 md:mt-3 text-sm text-gray-text">
                <font>
                  <font>Last updated: April 25, 2023</font>
                </font>
              </p>
            </div>
            <p className="text-base text-gray-text"></p>
            <p className="md:hidden mt-4 text-xs text-gray-text">
              最終更新日：2023年04月25日
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 mt-4">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center sm:col-span-1 sm:px-0">
                <dt className="text-sm font-medium leading-6 bg-[#252525] px-2 py-1 rounded whitespace-nowrap">
                  <font>
                    <font>Official site</font>
                  </font>
                </dt>
                <dd className="pl-4 text-sm leading-6 text-primary-text whitespace-break-spaces">
                  <a
                    target="_blank"
                    href="https://zevbot.com/"
                    className="break-all"
                  >
                    <font>
                      <font>https://zevbot.com/</font>
                    </font>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-6 lg:col-span-5">
            <div className="my-6 rounded-md bg-[#252525] py-6 px-4 md:px-5">
              <div className="recommend-point">
                <div className="text-base text-white">
                  <ul role="list">
                    <li className="relative mt-3 first-of-type:mt-0 pl-6">
                      <font>
                        <font>
                          Zev works with popular instant messaging apps like
                          Telegram, LINE, and Viber and gives you access to the
                          latest and most advanced AI assistant called ChatGPT.
                        </font>
                      </font>
                    </li>
                    <li className="relative mt-3 first-of-type:mt-0 pl-6">
                      <font>
                        <font>
                          Zev can answer queries, provide personalized
                          recommendations, and assist with translations.{" "}
                        </font>
                        <font>
                          Users can also switch between different personalities
                          such as a chef, travel planner, or social media
                          manager.
                        </font>
                      </font>
                    </li>
                    <li className="relative mt-3 first-of-type:mt-0 pl-6">
                      <font>
                        <font>
                          Zev stores several hours of conversation history and
                          allows users to pick up where they left off.{" "}
                        </font>
                        <font>
                          The tool also supports group conversations on
                          Telegram, where up to 50 people can participate at the
                          same time.
                        </font>
                      </font>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a
              target="_blank"
              href="https://zevbot.com/"
              className={` my-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3.5 text-lg font-medium text-white hover:bg-primary-hover md:duration-150 md:ease-in`}
            >
              <font>
                <font>Try using Zev</font>
              </font>
            </a>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="mt-20 mb-6 text-2xl font-bold text-white border-b-2 border-gray-line pb-2.5">
            <font>
              <font>Overview of Zev</font>
            </font>
          </h2>

          <p className="my-4 text-base leading-7 text-white">
            <font>
              <font>
                Zev is an AI-powered assistant that integrates with popular
                instant messaging applications such as Telegram, LINE, and
                Viber, and gives you access to the latest and most advanced AI
                assistant called ChatGPT.{" "}
              </font>
              <font>
                Zev can answer queries, provide personalized recommendations,
                help with translations, and much more.{" "}
              </font>
              <font>
                Users can also take advantage of the tool's persona feature,
                which allows them to switch between different personalities such
                as chefs, travel planners, and social media managers, each with
                their own unique way of speaking for more personal
                conversations.{" "}
              </font>
              <font>
                Zev saves hours of conversation history and allows users to pick
                up where they left off.{" "}
              </font>
              <font>
                The tool supports group conversations on Telegram, where up to
                50 members can participate at the same time.{" "}
              </font>
              <font>
                Zev has a free trial and after an introductory period there is a
                $10 monthly subscription fee.{" "}
              </font>
              <font>
                Overall, Zev is a powerful AI chatbot assistant that allows
                users to easily and intuitively access advanced AI features from
                their favorite messaging app.
              </font>
            </font>
          </p>
          <a
            target="_blank"
            href="https://zevbot.com/"
            className="my-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3.5 text-lg font-medium text-white hover:bg-primary-hover md:duration-150 md:ease-in"
          >
            <font>
              <font>Try using Zev</font>
            </font>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
