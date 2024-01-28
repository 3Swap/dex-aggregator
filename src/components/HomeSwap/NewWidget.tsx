import { Chain, Token } from "@/utils/types";
import SettingsIcon from "@mui/icons-material/Settings";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import WalletIcon from "@mui/icons-material/Wallet";
import React from "react";

type NewWidgetProps = {
  title: string;
  onClickFrom?: () => void;
  onClickTo?: () => void;
  selectedFromChainState: Chain | null;
  selectedFromTokenState: Token | null;
  selectedToChainState: Chain | null;
  selectedToTokenState: Token | null;
  paymentAmount: number | string;
  HandlePaymentAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function NewWidget({
  title,
  onClickFrom,
  onClickTo,
  selectedFromChainState,
  selectedFromTokenState,
  selectedToChainState,
  selectedToTokenState,
  paymentAmount,
  HandlePaymentAmount,
}: NewWidgetProps) {
  return (
    <div className=" flex flex-col mx-auto gap-6 min-w-[392px] tablet:max-w-xs">
      <div className=" flex justify-between items-center">
        <h1 className=" font-bold text-[28px]">{title}</h1>
        <SettingsIcon style={{ fontSize: "30px" }} />
      </div>

      <div className=" relative flex flex-col gap-6">
        {/* This is the From */}
        <div
          onClick={onClickFrom}
          className=" cursor-pointer py-3 px-4 rounded-xl bg-white text-black min-h-28 border-[1.5px] border-[#F3EBFF] flex flex-col gap-2"
        >
          <h2 className=" font-bold text-base">From</h2>

          <div className=" flex gap-4 items-center">
            {selectedFromChainState && selectedFromTokenState !== null ? (
              <div className="relative">
                {selectedFromTokenState.logoURI ? (
                  <img
                    src={selectedFromTokenState.logoURI}
                    alt=""
                    className="w-10 h-10 rounded-full border border-black/50"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-400 relative border border-black/50 font-medium text-xl flex justify-center items-center">
                    {selectedFromTokenState.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className=" w-5 h-5 absolute bottom-[-5px] right-[-5px] bg-gray-400 rounded-full border border-black/50">
                  <img
                    src={selectedFromChainState.logoURI}
                    alt=""
                    className="w-full h-full rounded-full border border-black/50"
                  />
                </div>
              </div>
            ) : (
              <div className=" w-10 h-10 rounded-full bg-[#F3EBFF] relative border border-black/50">
                <div className=" w-4 h-4 absolute bottom-0 right-[-3px] bg-[#F3EBFF] rounded-full border border-black/50" />
              </div>
            )}

            {selectedFromChainState && selectedFromTokenState !== null ? (
              <div>
                <p className=" font-medium text-lg">
                  {selectedFromTokenState.symbol}
                </p>
                <p className=" font-light text-sm text-black/50">
                  on {selectedFromChainState.name}
                </p>
              </div>
            ) : (
              <span className=" font-medium text-xl">
                Select chain and token
              </span>
            )}
          </div>
        </div>

        <div
          className={` ${
            title === "Gas" && "hidden"
          } absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] p-1 z-10 rounded-full bg-white border text-black border-black/50 w-fit`}
        >
          <SwapVertIcon style={{ fontSize: "30px" }} />
        </div>

        {/* This is the To */}
        <div
          onClick={onClickTo}
          className=" cursor-pointer py-3 px-4 rounded-xl bg-white text-black to-transparent min-h-28 border-[1.5px] border-[#F3EBFF] flex flex-col gap-2"
        >
          <h2 className=" font-bold text-base">To</h2>

          <div className=" flex gap-4 items-center">
            {selectedToChainState && selectedToTokenState !== null ? (
              <div className="relative">
                {selectedToTokenState.logoURI ? (
                  <img
                    src={selectedToTokenState.logoURI}
                    alt=""
                    className="w-10 h-10 rounded-full border border-black/50"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#F3EBFF] relative border border-black/50 font-medium text-xl flex justify-center items-center">
                    {selectedToTokenState.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className=" w-5 h-5 absolute bottom-[-5px] right-[-5px] bg-[#F3EBFF] rounded-full border border-black/50">
                  <img
                    src={selectedToChainState.logoURI}
                    alt=""
                    className="w-full h-full rounded-full border border-black/50"
                  />
                </div>
              </div>
            ) : (
              <div className=" w-10 h-10 rounded-full bg-[#F3EBFF] relative border border-black/50">
                <div className=" w-4 h-4 absolute bottom-0 right-[-3px] bg-[#F3EBFF] rounded-full border border-black/50" />
              </div>
            )}

            {selectedToChainState && selectedToTokenState !== null ? (
              <div>
                <p className=" font-medium text-lg">
                  {selectedToTokenState.symbol}
                </p>
                <p className=" font-light text-sm text-black/50">
                  on {selectedToChainState.name}
                </p>
              </div>
            ) : (
              <span className=" font-medium text-xl">
                Select chain {title !== "Gas" && " and token"}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className=" py-3 px-4 rounded-xl bg-white text-black min-h-28 border-[1.5px] border-[#F3EBFF] flex flex-col gap-2">
        <h2 className=" font-bold text-base">You pay</h2>

        <div className=" flex justify-between gap-4">
          <div className=" min-w-fit">
            {selectedFromChainState && selectedFromTokenState !== null ? (
              <div>
                <div className="relative ">
                  {selectedFromTokenState.logoURI ? (
                    <img
                      src={selectedFromTokenState.logoURI}
                      alt=""
                      className="w-10 h-10 rounded-full border border-black/50"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#F3EBFF] relative border border-black/50 font-medium text-xl flex justify-center items-center">
                      {selectedFromTokenState.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className=" w-5 h-5 absolute bottom-[-5px] right-[-5px] bg-[#F3EBFF] rounded-full border border-black/50">
                    <img
                      src={selectedFromChainState.logoURI}
                      alt=""
                      className="w-full h-full rounded-full border border-black/50"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className=" w-10 h-10 rounded-full bg-[#F3EBFF] relative border border-black/50">
                <div className=" w-4 h-4 absolute bottom-0 right-[-3px] bg-[#F3EBFF] rounded-full border border-black/50" />
              </div>
            )}
          </div>

          <div>
            <input
              type="text"
              className="font-bold text-3xl text-black/50 bg-transparent border-transparent outline-none w-full "
              placeholder="0"
              value={paymentAmount}
              onChange={(e) => HandlePaymentAmount(e)}
            />
            <p className=" text-black/40 text-base">$0.00</p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col tablet:flex-row gap-3">
        <button className=" w-full py-4 grow rounded-full font-semibold text-lg bg-purple-500/70 text-white">
          Connect wallet
        </button>
        <button className=" p-4 rounded-full bg-[#F3EBFF]">
          <WalletIcon style={{ fontSize: "30px" }} />
        </button>
      </div>
    </div>
  );
}

export default NewWidget;
