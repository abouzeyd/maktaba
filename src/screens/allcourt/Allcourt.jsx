import React, { useState, useRef } from 'react';
import './Allcourt.css';
import { useParams } from 'react-router-dom';
import play from '../../assets/play-circle-solid.svg';
import pause from '../../assets/pause-circle-solid.svg';

const Allcourt = ({ dourous }) => {
  const [isplaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // reference il refer notre composant audio
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  const onLoadedMetadata = () => {
    const seconde = Math.floor(audioPlayer.current.duration);
    setDuration(seconde);
    progressBar.current.max = seconde;
  };

  const calculate = (sec) => {
    const hours = Math.floor(sec / 3600) % 60;
    let minute = Math.floor(sec / 60) % 60;
    let seconde = Math.floor(sec % 60);
    return [hours, minute, seconde]
      .map((item) => (item < 10 ? `0${item}` : `${item}`))
      .filter((item, index) => item !== '00' || index > 0)
      .join(':');
  };

  const togglePlayPause = () => {
    const prevValue = isplaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();

      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };
  // console.log(audioPlayer.current.currentTime);

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    progressBar.current.style.setProperty(
      '--seek-before-width',
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
    animationRef.current = requestAnimationFrame(whilePlaying);
  };
  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    progressBar.current.style.setProperty(
      '--seek-before-width',
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };
  const { id } = useParams();
  let idData = dourous.find((x) => x.id === id);
  return (
    <div className="container">
      <p style={{ textAlign: 'center', fontSize: 23, fontWeight: 'bold' }}>
        {idData.title}
      </p>
      <div className="audio__player">
        {idData.specifyCourt.map((item) => {
          console.log(item.id !== id);
          return (
            <div key={item.id} className="sound">
              <div className="sound__title">{item.title}</div>
              <div className="audio__allcourt">
                <audio
                  src={item.sound}
                  preload="metadata"
                  autoPlay={false}
                  onLoadedMetadata={onLoadedMetadata}
                  ref={audioPlayer}
                />
                <button onClick={togglePlayPause} className="play__pause">
                  {isplaying ? (
                    <img src={pause} alt="play" width="20px" />
                  ) : (
                    <img src={play} alt="play" width="20px" />
                  )}
                </button>
                <div className="current__time">{calculate(currentTime)}</div>
                <div>
                  <input
                    type="range"
                    className="progress__bar"
                    defaultValue="0"
                    ref={progressBar}
                    onChange={changeRange}
                    style={{ width: 300 }}
                  />
                </div>
                <div className="duration">
                  {duration && !isNaN(duration) && calculate(duration)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allcourt;
