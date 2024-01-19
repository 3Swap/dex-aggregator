"use client";

import * as React from "react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import NewWidget from "./NewWidget";
import { CustomTabPanel, TabCell, TabsContainer, a11yProps } from ".";
import WidgetFrom from "./WidgetFrom";
import { Chain, ChainsResponse, Token, TokensObject } from "@/utils/types";
import { getChains, getTokens } from "@/utils/helpers";

export default function IconTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [chains, setChains] = React.useState<ChainsResponse | null>(null);
  const [tokens, setTokens] = React.useState<TokensObject | null>(null);

  const [selectedChainState, setSelectedChainState] =
    React.useState<Chain | null>(null);

  const [selectedTokenState, setSelectedTokenState] =
    React.useState<Token | null>(null);

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

  const handleSelectChain = (selectedChain: Chain) => {
    console.log("Selected Chain:", selectedChain);
    setSelectedChainState(selectedChain);
    if (selectedTokenState !== null) {
      setShowFrom(0);
    }
  };
  const handleSelectToken = (selectedToken: Token) => {
    console.log("Selected Token:", selectedToken);
    setSelectedTokenState(selectedToken);
    if (selectedChainState !== null) {
      setShowFrom(0);
    }
  };

  const [showFrom, setShowFrom] = React.useState(0);

  return (
    <Box
      sx={{
        width: "50vw",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TabsContainer
        value={value}
        onChange={handleChange}
        aria-label="icon tabs example"
      >
        <TabCell
          icon={
            <SwapHorizIcon
              sx={{
                marginRight: 0.75,
                marginTop: `${theme.spacing(0.5)} !important`,
              }}
            />
          }
          aria-label="phone"
          sx={{
            marginRight: 0.75,
            marginBottom: `${theme.spacing(0.75)} !important`,
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
          label="Exchange"
          {...a11yProps(0)}
        />

        <TabCell
          icon={
            <EvStationOutlinedIcon
              sx={{
                marginRight: 0.75,
                marginTop: `${theme.spacing(0.5)} !important`,
              }}
            />
          }
          aria-label="favorite"
          sx={{
            marginRight: 0.75,
            marginBottom: `${theme.spacing(0.75)} !important`,
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
          label="Gas"
          {...a11yProps(1)}
        />

        <TabCell
          icon={
            <CreditCardIcon
              sx={{
                marginRight: 0.75,
                marginTop: `${theme.spacing(0.5)} !important`,
              }}
            />
          }
          aria-label="person"
          sx={{
            marginRight: 0.75,
            marginBottom: `${theme.spacing(0.75)} !important`,
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
          label="Buy"
          {...a11yProps(2)}
        />
      </TabsContainer>

      {showFrom === 0 && (
        <CustomTabPanel value={value} index={0}>
          <NewWidget
            title="Exchange"
            onClickFrom={() => setShowFrom(1)}
            selectedChainState={selectedChainState}
            selectedTokenState={selectedTokenState}
          />
        </CustomTabPanel>
      )}
      {showFrom === 1 && (
        <CustomTabPanel value={value} index={0}>
          <WidgetFrom
            onClickFrom={() => setShowFrom(0)}
            onSelectChain={handleSelectChain}
            onSelectToken={handleSelectToken}
            chains={chains}
            tokens={tokens}
          />
        </CustomTabPanel>
      )}
      <CustomTabPanel value={value} index={1}>
        {/* <NewWidget title="Gas" /> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
