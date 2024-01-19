import axios from "axios";
import { ChainsResponse, TokensObject } from "./types";

export const getChains = async () => {
  const optionalChainTypes = "EVM";
  const result = await axios.get<ChainsResponse>("https://li.quest/v1/chains", {
    params: { chainTypes: optionalChainTypes },
  });

  return result?.data;
};

export const getTokens = async () => {
  const optionalFilter = ["ETH", 137];
  const optionalChainTypes = "EVM";
  const result = await axios.get<TokensObject>("https://li.quest/v1/tokens", {
    params: {
      chains: optionalFilter.join(","),
      chainTypes: optionalChainTypes,
    },
  });

  return result.data;
};


export const ShortenedAddress = ({ address }: { address: string }) => {
  const shortenedAddress =
    address.length > 9
      ? `${address.slice(0, 5)}...${address.slice(-4)}`
      : address;

  return <span>{shortenedAddress}</span>;
};