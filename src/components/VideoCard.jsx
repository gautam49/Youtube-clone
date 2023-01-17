import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import parse from 'html-react-parser';
//if our api fails to render data then this will be fetched in that case
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constant'

//here we are destructuring video object into videoId and snippet
const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px', }, boxShadow: 'none', borderRadius: 0 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}> {/*demoVideo*/}
            <CardMedia
                image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                alt={snippet?.title}
                sx={{ width: { xs: '350px', sm: '358px', md: '320px' }, height: '180px' }}
            />
        </Link>
        <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#FFf">
                    {parse(snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60))}
                </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight="bold" color="gray">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                </Typography>
            </Link>
        </CardContent>

    </Card>
);

export default VideoCard;
//here ? is undefined , only used to avoid errors