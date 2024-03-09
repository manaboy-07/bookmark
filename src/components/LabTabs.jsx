import * as React from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tab1 from "./Tab1";
import tab1Img from "../images/illustration-features-tab-1.svg";
import tab2Img from "../images/illustration-features-tab-2.svg";
import tab3Img from "../images/illustration-features-tab-3.svg";
import Tabz from "./Tabz";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: red,
    secondary: purple,
  },
});

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className="font-extrabold text-2xl"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center text-center">
          <h2
            className="font-bold my-3"
            style={{
              fontSize: "28px",
            }}
          >
            Features
          </h2>
          <h4 className="text-slate-400 text-center">
            Our aim is to make it quick and easy for you to access your <br />
            favourite websites. Your bookmarks sync between your devices <br />{" "}
            so you can access them on the go.
          </h4>
        </div>
      </div>
      <Box sx={{ width: "100%" }} className=" my-10">
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            marginRight: "29%",
            marginLeft: "29%",
          }}
        >
          <ThemeProvider theme={theme}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              aria-label="basic tabs example"
              centered
            >
              <Tab label="Simple Bookmarking" {...a11yProps(0)} />
              <Tab label="Speedy Searching" {...a11yProps(1)} />
              <Tab label="Easy Sharing" {...a11yProps(2)} />
            </Tabs>
          </ThemeProvider>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Tabz
            src={tab1Img}
            header={" Bookmark in one click"}
            text="Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites."
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Tabz
            src={tab2Img}
            text="  Our powerful search feature will help you find saved sites in no time at all. 
  No need to trawl through all of your bookmarks."
            header={"Intelligent Search"}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Tabz
            header={"Share your bookmarks"}
            src={tab3Img}
            text=" Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button."
          />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
