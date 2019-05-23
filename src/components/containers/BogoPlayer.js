import React from 'react';
import {ThemeProvider} from 'styled-components';
import Video from '../Video';
import Playlist from '../containers/Playlist';
import StyledBogoPlayer from '../styled/StyledBogoPlayer';

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
    return (
        <ThemeProvider theme={state.nightMode ? theme : themeLight}>
            <StyledBogoPlayer>
                <Video />
                <Playlist />
            </StyledBogoPlayer>
        </ThemeProvider>
    )
}

export default BogoPlayer;