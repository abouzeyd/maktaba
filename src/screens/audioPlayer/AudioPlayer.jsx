import React, { useState, useEffect, useRef } from 'react';
import audios from '../../audio/003.mp3';

const AudioPlayer = ({ dourous }) => {
  const audios = dourous[0].specifyCourt;
  const { sound } = audios[1];
  console.log(sound);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [playing, setPlaying] = useState(true);
  // state

  const audio = useRef(new Audio(audios));
  const intervalRef = useRef();
  const isReady = useRef(false);
  const toggle = () => setPlaying(!playing);
  const { duration } = audio.current;
  console.log(duration);
  const toPrevTrack = () => {
    console.log('prevTrack');
  };
  const toNextTrack = () => {
    console.log('nextTrack');
  };

  //   useEffect(() => {
  //     return playing ? audio.pause() : audio.play();
  //   }, [playing]);

  return (
    <div>
      my audio
      <button onClick={toggle}>{playing ? 'play' : 'pause'}</button>
    </div>
  );
};

export default AudioPlayer;
