import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
//do not wirte here SearchIcon

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }
    };
    return (
        //paper component is like a div
        <Paper
            component="form" //form of a form , in this case paper is a searchbar
            onSubmit={handleSubmit} //callback function
            sx={{
                //style property
                borderRadius: 20,
                border: "1px solid #e3e3e3",
                pl: 2, //padding left
                boxShadow: "none",
                mr: { sm: 5 }, //margin right => for only small devices
            }}
        >
            <input
                className="search-bar"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            { /*aria - label='search' after color property */}
            <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
                <Search />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
