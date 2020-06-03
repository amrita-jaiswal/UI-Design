import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";


class Body extends Component {
    render() {
        return (
            <>
                <Grid style={{ display: 'flex', 
                               flexDirection: 'row', 
                            //    justifyContent: 'space-around'
                                }}>
                    <Grid
                        style={{
                            width: 90,
                            height: 30,
                            backgroundColor: "#3DA8FF",
                            borderRadius: 4,
                            color: "#fff",
                            fontSize: 15,
                            textAlign: "center",
                            paddingTop: 5,
                            paddingRight: 10,
                            marginRight:13,
                        }}
                    >
                        Tagone
            <CloseIcon
                            fontSize="small"
                            style={{
                                color: "#000000",
                                marginTop: 2,
                                opacity: "26%",
                                position: "absolute",
                            }}
                        />
                    </Grid>

                    <Grid
                        style={{
                            width: 90,
                            height: 30,
                            backgroundColor: "#3DA8FF",
                            borderRadius: 4,
                            color: "#fff",
                            fontSize: 15,
                            textAlign: "center",
                            paddingTop: 5,
                            paddingRight: 10,
                            marginRight:13,

                        }}
                    >
                        Tagtwo
            <CloseIcon
                            fontSize="small"
                            style={{
                                color: "#000000",
                                marginTop: 2,
                                opacity: "26%",
                                position: "absolute",
                            }}
                        />
                    </Grid>

                    <Grid
                        style={{
                            width: 90,
                            height: 30,
                            backgroundColor: "#3DA8FF",
                            borderRadius: 4,
                            color: "#fff",
                            fontSize: 15,
                            textAlign: "center",
                            paddingTop: 5,
                            paddingRight: 10,
                            marginRight:13,

                        }}
                    >
                        Tagthree
            <CloseIcon
                            fontSize="small"
                            style={{
                                color: "#000000",
                                marginTop: 2,
                                opacity: "26%",
                                position: "absolute",
                            }}
                        />
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default Body;
