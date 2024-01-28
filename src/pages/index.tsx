import Image from "next/image";
import Head from "next/head";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import IconTabs from "@/components/HomeSwap/ThisGuy";
import React from "react";
import { BridgesAndExchangesResponse, ChainsResponse } from "@/utils/types";
import { getChains, getTools } from "@/utils/helpers";
import { log } from "console";

export default function Home() {
  const [value, setValue] = React.useState(0);
  const [tools, setTools] = React.useState<BridgesAndExchangesResponse | null>(
    null
  );
  const [chains, setChains] = React.useState<ChainsResponse | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const toolsData = await getTools();
        setTools(toolsData);

        const chainsData = await getChains();
        setChains(chainsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(tools);
  // console.log(chains);

  // bridges;
  // exchanges;
  // chains;

  const handleScrollToSection = () => {
    const targetSection = document.getElementById("widget");

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setValue(2);
      setShowWidgetCover(false);
    }
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [showWidgetCover, setShowWidgetCover] = React.useState(true);

  const HandleGetStarted = () => {
    setShowWidgetCover(false);
  };

  const dummyArr = [
    { number: chains?.chains && chains.chains.length, value: "Chains" },
    { number: tools?.bridges && tools.bridges.length, value: "Bridges" },
    { number: tools?.exchanges && tools.exchanges.length, value: "DEXs" },
  ];

  return (
    <div>
      <Head>
        <title>3Swap | Dex Aggregator</title>
      </Head>
      <div className="w-full flex flex-col justify-stretch items-center pb-[15rem] relative overflow-x-hidden snap-mandatory snap-x">
        <Navbar visibleLink={true} />
        <Image
          src="/bg/planet-cut.svg"
          width={558}
          height={722}
          alt="Planet"
          className="absolute top-0 left-0 z-0"
        />
        <div className="w-full p-5 mb-[-20rem] flex flex-col items-start gap-y-5 z-10">
          <h2 className="sm:text-6xl text-4xl sm:leading-[4.5rem] leading-[3rem] text-white mt-[4rem]">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 drop-shadow-md bg-clip-text text-transparent shadow-purple-600 font-extrabold">
              Trade with Unprecedented <br />
              Freedom
            </span>{" "}
            - The Decentralized <br />
            Exchange Revolution
          </h2>
          {/* <Link
            href="/exchange"
            className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md"
          >
            Launch dApp
          </Link> */}
          <button
            onClick={handleScrollToSection}
            className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md"
          >
            Launch dApp
          </button>
        </div>
        <div className="ml-auto sm:mb-[-10rem] mb-[4rem]">
          <Image
            src="/bg/planet.svg"
            width={1096}
            height={722}
            alt="planet image"
            className=""
          />
        </div>

        {/* <-- Here is the widget --> */}
        <div
          id="widget"
          className=" min-h-screen w-full flex items-center justify-center relative bg-gradient-to-b from-transparent via-[#F3EBFF] to-[#F3EBFF] snap-center"
        >
          <div className="radialblur opacity-[0.30] rounded-full z-[-1] w-[50vw] h-[40vh] absolute top-[10%] left-[50%] translate-x-[-50%] blur-3xl" />
            <IconTabs
              value={value}
              setValue={setValue}
              handleValueChange={handleChange}
            />
          <div
            className={` ${
              !showWidgetCover && "hidden"
            } absolute w-screen h-[70vh] top-[30%] left-[0%] z-30 bg-gradient-to-t from-purple-200 via-purple-200 to-transparent backdrop-blur-sm flex flex-col justify-center items-center gap-8`}
          >
            <h1 className=" text-[54px] font-[750] bg-gradient-to-l from-[#31007A] to-[#8700B8] bg-clip-text text-transparent">
              Find the best route
            </h1>
            <p className=" font-medium text-[28px]">
              <span className=" font-extrabold">4x audited </span>multi-chain
              liquidity aggregator powered by{" "}
              <span className=" font-extrabold">LI.FI</span>
            </p>

            <div className=" flex justify-center gap-5">
              {dummyArr.map((item, index) => (
                <div className=" flex flex-col gap-1 justify-center items-center py-7 px-11 shadow-md rounded-2xl bg-white">
                  <p className=" font-bold text-4xl">{item.number}</p>
                  <p className=" text-lg font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            <button
              onClick={HandleGetStarted}
              className=" rounded-[28px] bg-[#270061] font-extrabold text-xl w-[247px] h-[56px] text-white"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="bg-[url('/bg/3d.png')] h-[85vh] w-full bg-no-repeat bg-center bg-cover flex items-center justify-center sm:gap-x-10 gap-y-5 sm:flex-row flex-col p-5">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="max-w-[450px] h-[420px] backdrop-blur-lg text-center rounded-xl shadow-xl gap-3 space-y-4 relative"
              >
                <div className="z-20 flex flex-col items-center justify-center h-full space-y-8 p-3 relative">
                  <h3 className="font-extrabold text-4xl text-white">
                    {feature.title}
                  </h3>
                  <p className="font-bold text-white">{feature.subtitle}</p>
                  <p className="text-white">{feature.paragraph}</p>
                  <Link
                    href={feature.linkURl}
                    className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md"
                  >
                    {feature.linkTitle}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center justify-center my-[15rem]">
          <h2 className="text-5xl font-extrabold text-white text-center">
            First DEFI aggregator <br /> on VinuChain
          </h2>
          <p className="text-white text-3xl">Coming soon</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

const features = [
  {
    title: "DEX Made Easy",
    subtitle: "Fast and Secure Exchange of Digital Assets",
    paragraph:
      "Our platform provides a seamless and  secure way to exchange your digital assets Embrace the future of finance with easy cryptocurrency swapping.",
    linkURl: "/exchange",
    linkTitle: "Swap",
  },
  {
    title: "Interconnected Asset Swapping",
    subtitle: "Unifying Digital Assets for Seamless Transactions",
    paragraph:
      "Our platform offers seamless interoperability, bridging the gap between various digital assets.",
    linkURl: "/exchange",
    linkTitle: "Bridge",
  },
];
