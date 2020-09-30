import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
    { id: 'code', numeric: false, disablePadding: false, label: 'Code' },
    { id: 'sex', numeric: false, disablePadding: false, label: 'Sex' },
    { id: 'date_birth', numeric: true, disablePadding: false, label: 'Date of birth' },
];

const users = [
    {
        id: 1,
        name: "Volodya",
        email: "volodya@gmail.com",
        code: '4325ewr3',
        sex: 'male',
        date_birth: '20.02.2015',
    },
    {
        id: 2,
        name: "Grisha",
        email: "grisha@gmail.com",
        code: 'halapenya',
        sex: 'male',
        date_birth: '01.02.2001',
    },
    {
        id: 3,
        name: "Sasha",
        email: "sasha@gmail.com",
        code: 'popart',
        sex: 'female',
        date_birth: '13.01.2005',
    },
    {
        id: 4,
        name: "Alexey",
        email: "alexey@gmail.com",
        code: 'varadara',
        sex: 'male',
        date_birth: '10.10.1996',
    },
    {
        id: 6,
        name: "Anatoliy",
        email: "anatoliy@gmail.com",
        code: 'dsaswr23',
        sex: 'male',
        date_birth: '10.10.1976',
    },
    {
        id: 7,
        name: "vladilen",
        email: "vladilen@gmail.com",
        code: 'oshizil1',
        sex: 'male',
        date_birth: '10.10.1966',
    },
    {
        id: 8,
        name: "Anna",
        email: "anna@gmail.com",
        code: 'ananas',
        sex: 'female',
        date_birth: '10.11.1990',
    },
    {
        id: 9,
        name: "Karl",
        email: "karl@gmail.com",
        code: 'karal',
        sex: 'male',
        date_birth: '10.10.1986',
    },
    {
        id: 10,
        name: "Alla",
        email: "Alla@gmail.com",
        code: 'alalalala',
        sex: 'female',
        date_birth: '10.10.1979',
    },
    {
        id: 11,
        name: "John",
        email: "John@gmail.com",
        code: 'armatura32',
        sex: 'male',
        date_birth: '10.10.1996',
    }
];

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = users.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    return (
        <div>
             <div className="add-button-holder">
                <Link className="text-link" to="/userform">
                    <Button  color="primary" variant="contained" className="add-button">
                        Добавить пользователя
                    </Button>
                </Link>
            </div>
            <TableContainer>
                <Table
                    className="user-table"
                    aria-labelledby="tableTitle"
                    aria-label="enhanced table"
                >
                    <EnhancedTableHead
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={users.length}
                    />
                    <TableBody>
                        {stableSort(users, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                const isItemSelected = isSelected(row.name);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.name)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                    >
                                        <TableCell  id={labelId} scope="row" >{row.name}</TableCell>
                                        <TableCell >{row.email}</TableCell>
                                        <TableCell >{row.code}</TableCell>
                                        <TableCell >{row.sex}</TableCell>
                                        <TableCell >{row.date_birth}</TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            
            ></TablePagination>            
        </div>
    );
}
