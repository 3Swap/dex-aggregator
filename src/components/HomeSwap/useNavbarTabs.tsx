import CreditCardIcon from "@mui/icons-material/CreditCard";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

export const useNavbarTabs = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const output = [
    {
      label: t("Exchange"),
      value: 0,
      icon: (
        <SwapHorizIcon
          sx={{
            marginRight: 0.75,
            marginBottom: `${theme.spacing(0)} !important`,
            color: "white",
            // ? theme.palette.white.main
            // : theme.palette.black.main,
          }}
        />
      ),
        // onClick: handleClickTab("exchange"),
        onClick: null,
    },
    {
      label: t("Gas"),
        // onClick: handleClickTab("refuel"),
        onClick: null,
      value: 1,
      icon: (
        <EvStationOutlinedIcon
          sx={{
            marginRight: 0.75,
            marginBottom: `${theme.spacing(0)} !important`,
            color: "white",
            // ? theme.palette.white.main
            // : theme.palette.black.main,
          }}
        />
      ),
    },
    {
      label: t("Buy"),
        // onClick: handleClickTab("buy"),
        onClick: null,
      value: 2,
      icon: (
        <CreditCardIcon
          sx={{
            marginRight: 0.75,
            marginBottom: `${theme.spacing(0)} !important`,
            color: "white",
            //   theme.palette.mode === "dark"
            // ? theme.palette.white.main
            // : theme.palette.black.main,
          }}
        />
      ),
    },
  ];

  return output;
};
