import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Body from './body';
import Cards from "./Cards";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: "#ECF2F3",
    },
    tabStyle: {
        fontSize: 11,
        backgroundColor: "#3DA8FF",
        borderTop: "#3DA8FF",
        justifyContent: 'space-around',
    },
}));

export default function ScrollableTabsButtonPrevent() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.tabStyle}>
                <Tabs
                    fullWidth={true}
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    TabIndicatorProps={{ style: { background: "white", height: 5 } }}
                >
                    <Tab
                        icon={<LocationOnIcon />}
                        aria-label="location"
                        {...a11yProps(0)}
                    />
                    <Tab
                        icon={<CheckCircleIcon />}
                        aria-label="checkbox"
                        {...a11yProps(1)}
                    />
                    <Tab
                        icon={<SearchIcon />}
                        aria-label="search"
                        {...a11yProps(2)}
                    />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} >
                <Body />
                <br />
                <Cards />
            </TabPanel>
            {/* <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
        </div>
    );
}
