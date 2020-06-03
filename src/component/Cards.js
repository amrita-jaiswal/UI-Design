import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        maxHeight: 350,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#ECF2F3",
        borderRadius: 0,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        marginBottom: 40
    },

});

export default function Cards() {
    const classes = useStyles();

    return (
        <Grid container>
            <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <img src={require("../Assets/Avatar 2@2x.png")} alt="avatar" />
                    <Typography
                        gutterBottom
                        component="h2"
                        style={{ fontWeight: "bold", color: "black" }}
                    >
                        Space for a longer title to display here
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Space for some sub-copy to display here.
          </Typography>
                    <br />
                    <Typography
                        gutterBottom
                        component="h1"
                        style={{ fontWeight: "bold", color: "black", fontSize: 20 }}
                    >
                        $999/month
          </Typography>
                </CardContent>
                </CardActionArea>
                <CardActionArea>
                    <img
                        className="img-responsive"
                        id="image1"
                        src={require("../Assets/Photo 2@3x.png")}
                        height="380px"
                        alt="nature"
                        onClick={() => window.open("https://drive.google.com/file/d/16baBuhJJi65A-F-c4QVW2QFcg944Idu6/view?usp=sharing", '_blank')}
                        style={{
                            // maxHeight: 380,
                            marginLeft: 48,
                            marginTop: -9,
                            position: 'relative',
                            cursor: 'pointer'
                        }}
                    />

                    <CheckCircleIcon color="action" style={{ position: 'relative', top: -354, left: 292 }} />
                </CardActionArea>
            </Card>

            <br />
            <br />

            <Card className={classes.root}>
                <CardContent>
                    <img src={require("../Assets/Avatar 3@2x.png")} alt="avatar" />
                    <Typography
                        gutterBottom
                        component="h2"
                        style={{ fontWeight: "bold", color: "black" }}
                    >
                        Space for a longer title to display here
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Space for some sub-copy to display here.
          </Typography>
                    <br />
                    <Typography
                        gutterBottom
                        component="h1"
                        style={{ fontWeight: "bold", color: "black", fontSize: 20 }}
                    >
                        $999/month
          </Typography>
                </CardContent>
                <CardActionArea>
                    <img 
                        className="img-responsive"
                        src={require("../Assets/Photo 3@3x.png")}
                        alt="nature"
                        style={{
                            maxHeight: 380,
                            marginLeft: 48,
                            marginTop: -9,
                            position: 'relative',
                        }}
                    />
                    <CheckCircleIcon style={{ position: 'relative', top: -354, left: 292, color: "#fff" }} />
          />
        </CardActionArea>
            </Card>

            <br />
            <br />

            <Card className={classes.root}>
                <CardContent>
                    <img src={require("../Assets/Avatar 1@2x.png")} alt="avatar" />
                    <Typography
                        gutterBottom
                        component="h2"
                        style={{ fontWeight: "bold", color: "black" }}
                    >
                        Space for a longer title to display here
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Space for some sub-copy to display here.
          </Typography>
                    <br />
                    <Typography
                        gutterBottom
                        component="h1"
                        style={{ fontWeight: "bold", color: "black", fontSize: 20 }}
                    >
                        $999/month
          </Typography>
                </CardContent>
                <CardActionArea>
                    <img
                        className="img-responsive"
                        src={require("../Assets/Photo 1@3x.png")}
                        alt="nature"
                        style={{
                            maxHeight: 380,
                            marginLeft: 48,
                            marginTop: -9,
                            position: 'relative',
                        }}
                    />
                    <CheckCircleIcon color="action" style={{ position: 'relative', top: -354, left: 292 }} />
                </CardActionArea>
            </Card>
        </Grid>
    );
}
