import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavDrawer } from "../NavDrawer/NavDrawer.js";

export default class NavBar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            drawerOpened: false
        };
    }
    toggleDrawer = booleanValue => () => {
        this.setState({
            drawerOpened: booleanValue
        });
    };

    render() {
        return (
            <div>
                <AppBar style={{position: "relative"}}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Menu"
                            onClick={this.toggleDrawer(true)}
                        >
                        <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Material-React
                        </Typography>
                    </Toolbar>
                </AppBar>

                <NavDrawer
                    isAuthenticated={this.props.isAuthenticated}
                    drawerOpened={this.state.drawerOpened}
                    toggleDrawer={this.toggleDrawer}
                />
            </div>
        );
    }
}
