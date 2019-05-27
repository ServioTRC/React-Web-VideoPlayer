import React, {useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components';
import Video from '../Video';
import Playlist from '../containers/Playlist';
import StyledBogoPlayer from '../styles/StyledBogoPlayer';

const theme = {
    bgcolor: "#353535",
    bgcolorItem: "#414141",
    bgcolorItemActive: "#405c63",
    bgcolorPlay: "#526d4e",
    border: "none",
    borderPlayed: "none",
    color: "#fff"
};

const themeLight = {
    bgcolor: "#fff",
    bgcolorItem: "#fff",
    bgcolorItemActive: "#80a7b1",
    bgcolorPlay: "#526d4e",
    border: "1px solid #353535",
    borderPlayed: "none",
    color: "#353535"
};

const BogoPlayer = props => {

    const videos = JSON.parse(document.querySelector('[name="videos"]').value);

    const [state, setState] = useState({
        videos: videos.playlist,
        activeVideo: videos.playlist[0],
        nightMode: true,
        playlistId: videos.playlistId,
        autoplay: false,
    });

    useEffect(
        () => {
            const videoId = props.match.params.activeVideo;
            if(videoId !== undefined){
                const newActiveVideo = state.videos.findIndex(
                    video => video.id === videoId
                );
                setState({
                    ...state, //Clone state
                    activeVideo: state.videos[newActiveVideo],
                    autoplay: props.location.autoplay,
                });
            } else {
                props.history.push({
                    pathname: `/${state.activeVideo.id}`,
                    autoplay: false
                });
            }
        },
        [props.match.params.activeVideo]
    );

    const nightModeCallback = () => {
        setState(prevState => ({
            ...prevState, 
            nightMode: !prevState.nightMode
        }));
    };

    const endCallback = () => {
        const videoId = props.match.params.activeVideo;
        const currentVideoIndex = state.videos.findIndex(
            video => video.id === videoId
        );
        const nextVideo = currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1;
        props.history.push({
            pathname: `${state.videos[nextVideo].id}`,
            autoplay: false
        });
    }

    const progressCallback = event => {
        if(event.playedSeconds > 10 && event.playedSeconds < 11){
            setState({
                ...state,
                videos: state.videos.map(element => {
                    return element.id === state.activeVideo.id ? 
                    {...element, played: true}
                    : element;
                })
            })
        }
    }


    return (
        <ThemeProvider theme={state.nightMode ? theme : themeLight}>
            {state.videos !== null ? (
                <StyledBogoPlayer>
                    <Video 
                        active={state.activeVideo}
                        autoplay={state.autoplay}
                        endCallback={endCallback}
                        progressCallback={progressCallback}
                    />
                    <Playlist
                        videos={state.videos}
                        active={state.activeVideo}
                        nightModeCallback={nightModeCallback}
                        nightMode={state.nightMode}
                    />
                </StyledBogoPlayer>
            ) : null}
        </ThemeProvider>
    );
};

export default BogoPlayer;