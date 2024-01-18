import { useMediaQuery } from "@mui/material";
import type { Breakpoint } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { useNavbarTabs } from "./useNavbarTabs";

export const NavbarTabs = () => {
  const theme = useTheme();
  const [ activeTab, setActiveTab ] = useState(1);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md" as Breakpoint));
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  const navbarTabs = useNavbarTabs();

  const containerStyles = {
    display: "none",
    minWidth: 392,
    borderRadius: 28,
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
    div: {
      height: 56,
    },
    ".MuiTabs-indicator": {
      height: 48,
      zIndex: -1,
      borderRadius: 24,
    },
  };

  const tabStyles = {
    height: 48,
    width: 142,
    borderRadius: "24px",
  };

  return (
    <Tabs
      data={navbarTabs}
      value={isDesktop ? activeTab : false}
      onChange={handleChange}
      ariaLabel="navbar-tabs"
      containerStyles={containerStyles}
      tabStyles={tabStyles}
    />
  );
};

// tabs

import type { CSSObject } from "@mui/material";
import { Tooltip } from "@mui/material";

interface TabProps {
  label?: string;
  tooltip?: string;
  value: number;
  icon: JSX.Element;
  onClick: any;
  disabled?: boolean;
}

interface TabsProps {
  data: TabProps[];
  value: number | boolean;
  onChange?: any;
  ariaLabel: string;
  containerStyles?: CSSObject;
  tabStyles?: CSSObject;
}

export const Tabs = ({
  data,
  value,
  onChange,
  ariaLabel,
  containerStyles,
  tabStyles,
}: TabsProps) => {
  return data ? (
    <TabsContainer
      value={value}
      onChange={onChange}
      aria-label={ariaLabel}
      sx={containerStyles}
    >
      {data.map((el, index) => {
        const tab = (
          <Tab
            key={`${el.label ?? "tab-key"}-${index}`}
            onClick={(event) => {
              el.onClick(event, el.value);
            }}
            icon={el.icon}
            label={el.label}
            id={`tab-${el.label ?? "key"}-${el.value}`}
            aria-controls={`simple-tabpanel-${index}`}
            sx={tabStyles}
          />
        );
        return !!el.tooltip ? (
          <Tooltip
            title={el.tooltip ?? null}
            key={`tooltip-${el.label}-${index}`}
            enterTouchDelay={0}
            disableHoverListener={el.disabled}
            componentsProps={{
              popper: { sx: { zIndex: 1700 } },
            }}
            arrow
          >
            {tab}
          </Tooltip>
        ) : (
          tab
        );
      })}
    </TabsContainer>
  ) : null;
};

// tabs style

import type {
  TabProps as TabPropsFirst,
  TabsProps as TabsPropsSecond,
} from "@mui/material";
import { Tab as MuiTab, Tabs as MUITabsTwo, styled } from "@mui/material";
import { useState } from "react";

export const TabsContainer = styled(MUITabsTwo, {
  shouldForwardProp: (prop) => prop !== "styles",
})<TabsPropsSecond>(({ theme }) => ({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "gray",
  margin: "auto",
  padding: 1,
  alignItems: "center",

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

export const Tab = styled(MuiTab, {
  shouldForwardProp: (prop) => prop !== "styles",
})<TabPropsFirst>(({ theme }) => ({
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
  margin: theme.spacing(0.75, 0.5),
  background: "transparent",
  minHeight: "unset",
  color: "white",
  textDecoration: "none",
  "&.Mui-selected": {
    color: "white",
    backgroundColor: "transparent",
  },

  ":hover": {
    backgroundColor: "#31304D",
  },
}));
