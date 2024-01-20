import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import { Token, WidgetFormprops } from "@/utils/types";
import { ShortenedAddress } from "@/utils/helpers";
import { useHoverState } from "@/hooks/useHoverState";
import { useVisibleChains } from "@/hooks/useVisibleChains";

function WidgetFrom({
  onClickFrom,
  chains,
  tokens,
  onSelectChain,
  onSelectToken,
  action,
}: WidgetFormprops) {
  const [searchText, setSearchText] = React.useState("");

  const [visibleChains, handleViewAllChains] = useVisibleChains();
  const [hoveredItems, handleMouseEnter, handleMouseLeave] = useHoverState();
  const [hoveredTokens, handleMouseEnterToken, handleMouseLeaveToken] =
    useHoverState();

  const [focusedChain, setFocusedChain] = React.useState<number | null>(null);
  const [focusedToken, setFocusedToken] = React.useState<number | null>(null);

  return (
    <div className=" flex flex-col gap-6">
      <div className=" flex justify-center items-center relative">
        <div onClick={onClickFrom} className=" absolute left-0">
          <ArrowBackIcon style={{ fontSize: "30px" }} />
        </div>
        <h1 className=" font-bold text-xl">Exchange {action}</h1>
      </div>

      <div className=" grid grid-cols-5 gap-4">
        {chains?.chains?.slice(0, visibleChains).map((dchain, index) => (
          <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            key={dchain?.id}
            onClick={() => {
              onSelectChain && onSelectChain(dchain);
              setFocusedChain(index);
            }}
            className={` ${
              focusedChain === index && "bg-purple-500/30"
            }  bg-gray-500/30 hover:bg-purple-500/30 border border-purple-600/30 rounded-xl w-16 h-16 flex justify-center items-center relative`}
          >
            <img
              src={dchain?.logoURI}
              alt=""
              className="w-12 h-12 rounded-full"
            />
            {hoveredItems[index] && (
              <div className=" rounded-xl absolute bottom-[110%] w-24 h-10 flex justify-center items-center text-center bg-gray-500 border border-white/30 z-10">
                <div className=" relative text-sm">{dchain?.name}</div>
                <div className="triangle" />
              </div>
            )}
          </div>
        ))}
        {visibleChains !== undefined && visibleChains < 10 && (
          <div
            onClick={() => handleViewAllChains(chains?.chains?.length || 0)}
            className=" bg-gray-500/30 hover:bg-purple-500/30 border border-purple-600/30 rounded-xl w-16 h-16 flex justify-center items-center text-lg"
          >
            +{chains?.chains?.length && chains?.chains?.length - visibleChains}
          </div>
        )}
      </div>

      <div className=" relative">
        <input
          type="text"
          placeholder="Search by token name or address"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className=" w-full bg-gray-500/30 hover:bg-purple-500/30 border border-purple-600/30 outline-none h-14 rounded-xl pl-4 pr-12 text-lg"
        />
        <SearchIcon
          sx={{ fontSize: "28px" }}
          className=" absolute right-4 top-[50%] translate-y-[-50%] "
        />
      </div>

      <div className=" h-96 overflow-y-scroll overflow-x-hidden smallspaceforscrollbar">
        {tokens !== null &&
          Object.keys(tokens.tokens).map((chainId: string) => {
            // @ts-ignore
            const filteredTokens = tokens.tokens[chainId].filter(
              (dtoken: Token) =>
                dtoken.name.toLowerCase().includes(searchText.toLowerCase()) ||
                dtoken.address
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) ||
                dtoken.symbol.toLowerCase().includes(searchText.toLowerCase())
            );
            return (
              <div key={chainId} className=" w-[23rem] flex flex-col gap-4">
                {filteredTokens.map((dtoken: Token, index: number) => (
                  <div
                    className={` ${
                      focusedToken === index && "bg-purple-500/30"
                    } flex gap-6 p-3 rounded-2xl items-center hover:bg-purple-500/30`}
                    onMouseEnter={() => handleMouseEnterToken(index)}
                    onMouseLeave={() => handleMouseLeaveToken(index)}
                    key={dtoken.address}
                    onClick={() => {
                      onSelectToken && onSelectToken(dtoken);
                      setFocusedToken(index);
                    }}
                  >
                    {dtoken.logoURI ? (
                      <img
                        src={dtoken.logoURI}
                        className="rounded-full w-12 h-12"
                        alt=""
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-400 relative border border-black/50 font-medium text-xl flex justify-center items-center">
                        {dtoken.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-xl">{dtoken.symbol}</p>
                      <p className="font-light text-sm text-white/50">
                        {hoveredTokens[index] ? (
                          <ShortenedAddress address={dtoken.address} />
                        ) : (
                          dtoken.symbol
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default WidgetFrom;
