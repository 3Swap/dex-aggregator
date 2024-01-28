"use client";

import * as React from "react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { CustomTabPanel, TabCell, TabsContainer, a11yProps } from ".";
import { Chain, ChainsResponse, Token, TokensObject } from "@/utils/types";
import { getChains, getTokens } from "@/utils/helpers";
import { TabBody } from "./SwapTabBody";

type TabState = {
  selectedChain: Chain | null;
  selectedToken: Token | null;
};

const createInitialState = (): TabState => ({
  selectedChain: null,
  selectedToken: null,
});

export default function IconTabs({value, setValue, handleValueChange}: {value: number, setValue: React.Dispatch<React.SetStateAction<number>>, handleValueChange: (event: React.SyntheticEvent, newValue: number) => void}) {
  const theme = useTheme();
  // const [value, setValue] = React.useState(2);

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };

  const [chains, setChains] = React.useState<ChainsResponse | null>(null);
  const [tokens, setTokens] = React.useState<TokensObject | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const chainsData = await getChains();
        setChains(chainsData);

        const tokensData = await getTokens();
        setTokens(tokensData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [showTabsInExchange, setShowTabsInExchange] = React.useState(0);
  const [showTabsInGas, setShowTabsInGas] = React.useState(0);
  const [fromState, setFromState] = React.useState(createInitialState());
  const [toState, setToState] = React.useState(createInitialState());
  const [fromStateGas, setFromStateGas] = React.useState(createInitialState());
  const [toStateGas, setToStateGas] = React.useState(createInitialState());

  const handleSelectFromChain = (selectedChain: Chain) => {
    setFromState((prevState) => ({
      ...prevState,
      selectedChain,
    }));
    if (fromState.selectedToken !== null) {
      setShowTabsInExchange(0);
    }
  };

  const handleSelectFromToken = (selectedToken: Token) => {
    setFromState((prevState) => ({
      ...prevState,
      selectedToken,
    }));
    if (fromState.selectedChain !== null) {
      setShowTabsInExchange(0);
    }
  };

  const handleSelectToChain = (selectedChain: Chain) => {
    setToState((prevState) => ({
      ...prevState,
      selectedChain,
    }));
    if (toState.selectedToken !== null) {
      setShowTabsInExchange(0);
    }
  };

  const handleSelectToToken = (selectedToken: Token) => {
    setToState((prevState) => ({
      ...prevState,
      selectedToken,
    }));
    if (toState.selectedChain !== null) {
      setShowTabsInExchange(0);
    }
  };

  //   gas version for all these
  const handleSelectFromChainGas = (selectedChain: Chain) => {
    setFromStateGas((prevState) => ({
      ...prevState,
      selectedChain,
    }));
    if (fromStateGas.selectedToken !== null) {
      setShowTabsInGas(0);
    }
  };

  const handleSelectFromTokenGas = (selectedToken: Token) => {
    setFromStateGas((prevState) => ({
      ...prevState,
      selectedToken,
    }));
    if (fromStateGas.selectedChain !== null) {
      setShowTabsInGas(0);
    }
  };

  const handleSelectToChainGas = (selectedChain: Chain) => {
    setToStateGas((prevState) => ({
      ...prevState,
      selectedChain,
    }));
    if (toStateGas.selectedToken !== null) {
      setShowTabsInGas(0);
    }
  };

  const handleSelectToTokenGas = (selectedToken: Token) => {
    setToStateGas((prevState) => ({
      ...prevState,
      selectedToken,
    }));
    if (toStateGas.selectedChain !== null) {
      setShowTabsInGas(0);
    }
  };

  const [paymentAmountExchange, setPaymentAmountExchange] = React.useState<
    number | string
  >("");
  const [paymentAmountGas, setPaymentAmountGas] = React.useState<
    number | string
  >("");

  return (
    <Box
      sx={{
        width: "50vw",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 20,
      }}
    >
      <TabsContainer
        value={value}
        onChange={handleValueChange}
        aria-label="icon tabs example"
      >
        {[
          { label: "Exchange", icon: <SwapHorizIcon /> },
          { label: "Gas", icon: <EvStationOutlinedIcon /> },
          { label: "Buy", icon: <CreditCardIcon /> },
        ].map((tab, index) => (
          <TabCell
            key={index}
            icon={tab.icon}
            aria-label={tab.label.toLowerCase()}
            sx={{
              marginRight: 0.75,
              marginBottom: `${theme.spacing(0.75)} !important`,
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
            label={tab.label}
            {...a11yProps(index)}
          />
        ))}
      </TabsContainer>

      <div className=" flex flex-col tablet:flex-row gap-8 z-20">
        <TabBody
          tabIndex={0}
          title="Exchange"
          action="from"
          setShowTabsInExchange={setShowTabsInExchange}
          fromState={fromState}
          toState={toState}
          handleSelectFromChain={handleSelectFromChain}
          handleSelectFromToken={handleSelectFromToken}
          handleSelectToChain={handleSelectToChain}
          handleSelectToToken={handleSelectToToken}
          showTabsInExchange={showTabsInExchange}
          chains={chains}
          tokens={tokens}
          value={value}
          paymentAmount={paymentAmountExchange}
          HandlePaymentAmount={(e) => setPaymentAmountExchange(e.target.value)}
        />

        {paymentAmountExchange &&
          fromState.selectedChain &&
          fromState.selectedToken &&
          toState.selectedChain &&
          toState.selectedToken && (
            <CustomTabPanel value={value} index={0}>
              <div className=" flex flex-col mx-auto gap-6 min-w-[20rem] tablet:max-w-xs">
                <div className=" flex justify-between items-center">
                  <h1 className=" font-bold text-[28px]">You get</h1>
                </div>
              </div>
            </CustomTabPanel>
          )}
      </div>

      <TabBody
        tabIndex={1}
        title="Gas"
        action="to"
        setShowTabsInExchange={setShowTabsInGas}
        fromState={fromStateGas}
        toState={toStateGas}
        handleSelectFromChain={handleSelectFromChainGas}
        handleSelectFromToken={handleSelectFromTokenGas}
        handleSelectToChain={handleSelectToChainGas}
        handleSelectToToken={handleSelectToTokenGas}
        showTabsInExchange={showTabsInGas}
        chains={chains}
        tokens={tokens}
        value={value}
        paymentAmount={paymentAmountGas}
        HandlePaymentAmount={(e) => setPaymentAmountGas(e.target.value)}
      />

      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
