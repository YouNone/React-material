import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
}));

export default function About() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<h1>
				About
			</h1>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
				>
					<Typography className={classes.heading}>Home</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
						sit amet blandit leo lobortis eget.
         			</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
				>
					<Typography className={classes.heading}>Users</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Компонент списка пользователей
          			</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
				>
					<Typography className={classes.heading}>Auth</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Компонент входа в систему
          			</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
