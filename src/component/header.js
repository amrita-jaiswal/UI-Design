import React, { Component } from "react";
import { Typography, Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import path from "../Assets/path.svg";
import ScrollableTabsButtonPrevent from "./tab.js";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./index.css";


class Header extends Component {
    render() {
        return (
            <Container maxWidth="sm">
                <Typography
                    component="div"
                    style={{ backgroundColor: "#3DA8FF", height: 92, maxWidth: "100%" }}
                >
                    <img className="center"
                    src={path}
                    alt="logo design"
                    style={{
                        position: "relative",
                        display: 'block',
                        margin: '0 auto',
                        top: 11,
                        height: 50
                    }}
                />
                    <MoreVertIcon style={{ position: "relative", top: -25, right:"-45vh", color: '#1E5A9C' }} />
               </Typography>     
                <Grid container>
                    <MenuIcon style={{
                        position: "absolute",
                        top: 27,
                        paddingLeft: 13,
                        color: "#4b4552"
                    }} />
                    {/* <MenuIcon style={{
                        position: "absolute",
                        top: 37,
                        paddingLeft: 30,
                        color: "#4b4552"
                    }} />
                    <MenuIcon style={{
                        position: "absolute",
                        top: 47,
                        paddingLeft: 48,
                        color: "#4b4552"
                    }} /> */}

                    {/* <MenuIcon style={{ position: "absolute", top: 23, paddingLeft: 86, color: "#611E9C" }} /> */}
                </Grid>
                     

                
                <ScrollableTabsButtonPrevent />
            </Container>
        );
    }
}

export default Header;
