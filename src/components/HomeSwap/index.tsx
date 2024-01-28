import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material";
import type { TabsProps, TabProps } from "@mui/material";
import Box from "@mui/material/Box";

export const TabsContainer = styled(Tabs, {
  shouldForwardProp: (prop) => prop !== "styles",
})<TabsProps>(({ theme }) => ({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "gray",
  margin: "auto",
  padding: 1,
  alignItems: "center",
  borderRadius: "35px",
  zIndex: "30",

  ".MuiTabs-flexContainer": {
    alignItems: "center",
  },
  ".MuiTabs-indicator": {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%) scaleY(0.98)",
    backgroundColor: "gray",
    zIndex: "-1",
  },
  "> .MuiTabs-root": {
    minHeight: "unset !important",
  },
  ".MuiTabs-root": {
    minHeight: "unset !important",
  },
}));

export const TabCell = styled(Tab, {
  shouldForwardProp: (prop) => prop !== "styles",
})<TabProps>(({ theme }) => ({
  textTransform: "initial",
  letterSpacing: 0,
  display: "flex",
  flexGrow: 1,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "20px",
  margin: theme.spacing(0.75, 0.75),
  background: "transparent",
  minHeight: "unset",
  color: "black",
  textDecoration: "none",
  borderRadius: "35px",
  "&.Mui-selected": {
    color: "black",
    backgroundColor: "white",
  },

  ":hover": {
    backgroundColor: "#31304D",
  },
}));

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  what?: string;
}

export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, what, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={` ${
        what === "Exchange"
          ? " mt-16"
          : " mt-24 min-w-[392px] rounded-[16px] bg-white text-black shadow-2xl z-50"
      }  lmin-w-[450px]`}
    >
      {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
    </div>
  );
}
