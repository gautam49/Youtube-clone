import React from 'react';
import { Stack } from '@mui/material';
//It is one dimesional layout components, we are using it as a row to form navbar
import { Link } from 'react-router-dom';
import { logo } from '../utils/constant';
import SearchBar from '../components/SearchBar';

const Navbar = () => (
    <Stack
        direction="row"
        alignItems="center"
        p={2} //padding
        sx={{ // special sx props by which we can give any style to M-UI component
            position: 'sticky',
            background: '#000',
            top: 0,
            justifyContent: 'space-between',
        }}
    >
        {/* It points to home */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt='logo' height={45} />
        </Link>
        <SearchBar />
    </Stack>
);
//instant returning Navbar which returns stack element
export default Navbar;
