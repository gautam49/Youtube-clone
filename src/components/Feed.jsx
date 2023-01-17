//It contains sidebar and video feed
import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState([]);
    //It is lefcycle hook which will be called when component loads
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]); //[selectedCategory is dependancy]
    // whenever we change category this function will be recalled

    return (
        // Here Stack is our main wrapper which here wraps left sidebar and main part of page 
        //{Here it is a object of property passed in flexDirection}
        // medium device and larger it will show row wise
        //px for padding horizontal
        // 92 vertical height
        //Typography is used here instead of p tag ans heading tags
        // body1 is like h1 and body2 is like h2
        //margin top
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>

            <Box
                sx={{
                    height: { sx: "auto", md: "92vh" },
                    borderRight: "1px solid #3d3d3d",
                    px: { sx: 0, md: 2 }
                }} >

                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />


                <Typography
                    className="copyright"
                    variant="body2"

                    sx={{ mt: 1.5, color: "#fff", }} >
                    Copyright 2022 Vaibhav Jadhavar
                </Typography>
            </Box>

            <Box p={2} sx={{ oveflowY: 'auto', height: '90vh', flex: 2 }}>
                <Typography variant="h4"
                    fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                    {selectedCategory} <span style={{ color: '#F31503' }}>
                        videos
                    </span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack>
    );
};

export default Feed;
