import { Chain, ChainsResponse, Token, TokensObject } from "@/utils/types";
import { useTheme } from "@mui/material";
import React from "react";
import WidgetFrom from "./WidgetFrom";
import { CustomTabPanel } from ".";
import NewWidget from "./NewWidget";

type ExchangeTabProps = {
  tabIndex: number;
  title: string;
  action: "from" | "to";
  setShowTabsInExchange: React.Dispatch<React.SetStateAction<number>>;
  fromState: {
    selectedChain: Chain | null;
    selectedToken: Token | null;
  };
  toState: {
    selectedChain: Chain | null;
    selectedToken: Token | null;
  };
  handleSelectFromChain: (selectedChain: Chain) => void;
  handleSelectFromToken: (selectedToken: Token) => void;
  handleSelectToChain: (selectedChain: Chain) => void;
  handleSelectToToken: (selectedToken: Token) => void;
  showTabsInExchange: number;
  chains: ChainsResponse | null;
  tokens: TokensObject | null;
  value: number;
  paymentAmount: number | string;
  HandlePaymentAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TabBody: React.FC<ExchangeTabProps> = ({
  tabIndex,
  title,
  action,
  setShowTabsInExchange,
  fromState,
  toState,
  handleSelectFromChain,
  handleSelectFromToken,
  handleSelectToChain,
  handleSelectToToken,
  showTabsInExchange,
  chains,
  tokens,
  value,
  paymentAmount,
  HandlePaymentAmount,
}) => {
  const theme = useTheme();

  const renderWidgetFrom = (
    onSelectChain: (selectedChain: Chain) => void,
    onSelectToken: (selectedToken: Token) => void
  ) => (
    <WidgetFrom
      action={action}
      onClickFrom={() => setShowTabsInExchange(0)}
      onSelectChain={onSelectChain}
      onSelectToken={onSelectToken}
      chains={chains}
      tokens={tokens}
    />
  );

  return (
    <CustomTabPanel value={value} index={tabIndex}>
      {showTabsInExchange === 0 && (
        <NewWidget
          title={title}
          onClickFrom={() => setShowTabsInExchange(1)}
          onClickTo={() => setShowTabsInExchange(2)}
          selectedFromChainState={fromState.selectedChain}
          selectedFromTokenState={fromState.selectedToken}
          selectedToChainState={toState.selectedChain}
          selectedToTokenState={toState.selectedToken}
          paymentAmount={paymentAmount}
          HandlePaymentAmount={HandlePaymentAmount}
        />
      )}

      {showTabsInExchange === 1 &&
        renderWidgetFrom(handleSelectFromChain, handleSelectFromToken)}

      {showTabsInExchange === 2 &&
        renderWidgetFrom(handleSelectToChain, handleSelectToToken)}
    </CustomTabPanel>
  );
};
