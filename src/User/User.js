import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// function descendingComparator(a, b, orderBy) {
//     if (b[orderBy] < a[orderBy]) {
//         return -1;
//     }
//     if (b[orderBy] > a[orderBy]) {
//         return 1;
//     }
//     return 0;
// }

// function getComparator(order, orderBy) {
//     return order === 'desc'
//         ? (a, b) => descendingComparator(a, b, orderBy)
//         : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//     const stabilizedThis = array.map((el, index) => [el, index]);
//     stabilizedThis.sort((a, b) => {
//         const order = comparator(a[0], b[0]);
//         if (order !== 0) return order;
//         return a[1] - b[1];
//     });
//     return stabilizedThis.map((el) => el[0]);
// }

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    }
});


// const useToolbarStyles = makeStyles((theme) => ({
//     root: {
//         paddingLeft: theme.spacing(2),
//         paddingRight: theme.spacing(1),
//     },
//     highlight:
//         theme.palette.type === 'light'
//             ? {
//                 color: theme.palette.secondary.main,
//                 backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//             }
//             : {
//                 color: theme.palette.text.primary,
//                 backgroundColor: theme.palette.secondary.dark,
//             },
//     title: {
//         flex: '1 1 100%',
//     },
// }));

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

export default function Users() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} >
                <TableHead>
                    <TableRow>
                        <TableCell >Name</TableCell>
                        <TableCell >Email</TableCell>
                        <TableCell >Code</TableCell>
                        <TableCell >Sex</TableCell>
                        <TableCell >Date of birth</TableCell>
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
