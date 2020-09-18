import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    th: {
        fontWeight: 'bold'
    }

});


const users = [
    {
        id: 1,
        full_name: "Volodya",
        email: "volodya@gmail.com",
        code: 'volodya1',
        sex: 'male',
        date_birth: '20.02.2015',
    },
    {
        id: 2,
        full_name: "Grisha",
        email: "grisha@gmail.com",
        code: 'grisha',
        sex: 'male',
        date_birth: '01.02.2001',
    },
    {
        id: 3,
        full_name: "Sasha",
        email: "sasha@gmail.com",
        code: 'sasha2',
        sex: 'male',
        date_birth: '13.01.2005',
    },
    {
        id: 4,
        full_name: "Alexey",
        email: "alexey@gmail.com",
        code: 'Alexey22',
        sex: 'male',
        date_birth: '10.10.1996',
    }
];
// const headers = ['Name', 'Email', 'Code', 'Sex', 'Date of birth',];
export default function Users(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} aria-label="caption table">
            <Table className={classes.table} >
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.th}>Name</TableCell>
                        <TableCell className={classes.th}>Email</TableCell>
                        <TableCell className={classes.th}>Code</TableCell>
                        <TableCell className={classes.th}>Sex</TableCell>
                        <TableCell className={classes.th}>Date of birth</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell >{row.full_name}</TableCell>
                            <TableCell >{row.email}</TableCell>
                            <TableCell >{row.code}</TableCell>
                            <TableCell >{row.sex}</TableCell>
                            <TableCell >{row.date_birth}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
