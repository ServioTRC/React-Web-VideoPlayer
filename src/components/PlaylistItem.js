import React from 'react';
import StyledPlaylisttItem from './styles/StyledPlaylistItem';

const PlaylistItem = ({video, active, played}) => (
        <StyledPlaylisttItem active={active} played={played}>
            <div className="wbn-player__video-nr">{video.num}</div>
            <div className="wbn-player__video-name">{video.title}</div>
            <div className="wbn-player__video-time ">{video.duration }</div>
        </ StyledPlaylisttItem>
    )

export default PlaylistItem;