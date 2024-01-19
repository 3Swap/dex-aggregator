import { Chain, Token } from "@/utils/types";
import SettingsIcon from "@mui/icons-material/Settings";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import WalletIcon from "@mui/icons-material/Wallet";

type NewWidgetProps = {
  title: string;
  onClickFrom?: () => void;
  selectedChainState: Chain | null;
  selectedTokenState: Token | null;
};

function NewWidget({
  title,
  onClickFrom,
  selectedChainState,
  selectedTokenState,
}: NewWidgetProps) {
  return (
    <div className=" flex flex-col gap-6">
      <div className=" flex justify-between items-center">
        <h1 className=" font-bold text-[28px]">{title}</h1>
        <SettingsIcon style={{ fontSize: "30px" }} />
      </div>

      <div className=" relative flex flex-col gap-6">
        <div
          onClick={onClickFrom}
          className=" cursor-pointer py-3 px-4 rounded-xl bg-gradient-to-r from-gray-500/50 via-white/40 to-transparent min-h-28 border border-white/40 flex flex-col gap-2"
        >
          <h2 className=" font-bold text-base">From</h2>

          <div className=" flex gap-4 items-center">
            {selectedChainState && selectedTokenState !== null ? (
              <div className="relative">
                <img
                  src={selectedTokenState.logoURI}
                  alt=""
                  className="w-10 h-10 rounded-full border border-black/50"
                />
                <div className=" w-5 h-5 absolute bottom-[-5px] right-[-5px] bg-gray-400 rounded-full border border-black/50">
                  <img
                    src={selectedChainState.logoURI}
                    alt=""
                    className="w-full h-full rounded-full border border-black/50"
                  />
                </div>
              </div>
            ) : (
              <div className=" w-10 h-10 rounded-full bg-gray-400 relative border border-black/50">
                <div className=" w-4 h-4 absolute bottom-0 right-[-3px] bg-gray-400 rounded-full border border-black/50" />
              </div>
            )}

            {selectedChainState && selectedTokenState !== null ? (
              <div>
                <p className=" font-medium text-lg">
                  {selectedTokenState.symbol}
                </p>
                <p className=" font-light text-sm text-white/50">
                  on {selectedChainState.name}
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
          } absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] p-1 z-10 rounded-full bg-gray-400 border border-black/50 w-fit`}
        >
          <SwapVertIcon style={{ fontSize: "30px" }} />
        </div>

        <div className=" py-3 px-4 rounded-xl bg-gradient-to-r from-gray-500/50 via-white/40 to-transparent min-h-28 border border-white/40 flex flex-col gap-2">
          <h2 className=" font-bold text-base">To</h2>

          <div className=" flex gap-4 items-center">
            <div className=" w-10 h-10 rounded-full bg-gray-400 relative border border-black/50">
              <div className=" w-4 h-4 absolute bottom-0 right-[-3px] bg-gray-400 rounded-full border border-black/50"></div>
            </div>
            <span className=" font-medium text-xl">
              Select chain {title !== "Gas" && " and token"}
            </span>
          </div>
        </div>
      </div>

      <div className=" py-3 px-4 rounded-xl bg-gradient-to-r from-gray-500/50 via-white/40 to-transparent min-h-28 border border-white/40 flex flex-col gap-2">
        <h2 className=" font-bold text-base">You pay</h2>

        <div className=" flex gap-4">
          <div className=" w-10 h-10 rounded-full bg-gray-400 relative border border-black/50">
            <div className=" w-4 h-4 absolute bottom-0 right-[-3px] bg-gray-400 rounded-full border border-black/50"></div>
          </div>
          <div className=" ">
            <p className=" font-bold text-3xl text-white/50">0</p>
            <p className=" text-white/40 text-base">$0.00</p>
          </div>
        </div>
      </div>

      <div className=" flex gap-3">
        <button className=" w-full py-4 grow rounded-full font-semibold text-lg bg-purple-500/70 text-white">
          Connect wallet
        </button>
        <button className=" p-4 rounded-full bg-gray-400">
          <WalletIcon style={{ fontSize: "30px" }} />
        </button>
      </div>
    </div>
  );
}

export default NewWidget;
