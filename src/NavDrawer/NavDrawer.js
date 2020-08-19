import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import { ListItem, ListItemText } from "@material-ui/core";

export class NavDrawer extends React.Component {
	render() {
		return (
			<Drawer
				anchor="left"
				open={this.props.drawerOpened}
				onClose={this.props.toggleDrawer(false)}
			>
				<div
					onClick={this.props.toggleDrawer(false)}
					onKeyDown={this.props.toggleDrawer(false)}
				>
					<List style={{ width: 250 }}>
						<Link className='text-link' to="/">
							<ListItem button>
								<ListItemText primary="Home" />
							</ListItem>
						</Link>
						<Link className='text-link' to="/users">
							<ListItem button>
								<ListItemText primary="Users" />
							</ListItem>
						</Link>
						<Link className='text-link' to="/auth">
							<ListItem button>
								<ListItemText primary="Auth" />
							</ListItem>
						</Link>
						<Link className='text-link' to="/about">
							<ListItem button>
								<ListItemText primary="About" />
							</ListItem>
						</Link>
					</List>
				</div>
			</Drawer>
		);
	}
}
