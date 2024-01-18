import * as React from "react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import NewWidget from "./NewWidget";
import { CustomTabPanel, TabCell, TabsContainer, a11yProps } from ".";
import axios from "axios";

export default function IconTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getChains = async () => {
    // this is for requesting for the supported chains!
    const optionalChainTypes = "EVM";
    const result = await axios.get("https://li.quest/v1/chains", {
      params: { chainTypes: optionalChainTypes },
    });
    console.log("this is your result", result);
    return result.data;
  };

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

      <CustomTabPanel value={value} index={0}>
        <NewWidget title="Exchange" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <NewWidget title="Gas" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
