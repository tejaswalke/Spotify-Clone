import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { currentTrackIdState } from '../atoms/songAtom';
import usespotify from './usespotify';

function useSongInfo() {
    const SpotifyApi = usespotify();
    const [currentIdTrack, setCurrentIdTrack] =
    useRecoilState(currentTrackIdState);
    const [songInfo, setSongInfo] = useState(null);

    useEffect(() => {
        const fetchSongInfo = async () => {
            if (currentIdTrack) {
                const trackInfo = await fetch(
                    `https://api.spotify.com/v1/tracks/${currentIdTrack}`,
                    {
                        headers: {
                            Authorization: `Bearer ${SpotifyApi.getAccessToken()}`,
                        }
                    }
                ).then(res => res.json());

                setSongInfo(trackInfo);
            }
        };

        fetchSongInfo();
    },[currentIdTrack, SpotifyApi]);

  return songInfo;
}

export default useSongInfo