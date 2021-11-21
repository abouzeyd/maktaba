import React from 'react';
import './HomeDashboard.css';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import PersonIcon from '@mui/icons-material/Person';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import { Link } from 'react-router-dom';

const HomeDashboard = () => {
  return (
    <div className="home__dashboard">
      {homeDashboard.map((item, index) => {
        return (
          <Link to={item.link} className="home__item" key={index}>
            <span className="home__title">{item.title}</span>
            <item.icon style={{ fontSize: 40 }} />
          </Link>
        );
      })}
    </div>
  );
};

export default HomeDashboard;

const homeDashboard = [
  {
    icon: PersonIcon,
    title: 'Users',
    link: '/usersList',
  },
  {
    icon: HeadsetMicIcon,
    title: 'Cours',
    link: '/coursAudio',
  },
  {
    icon: LineStyleIcon,
    title: 'Conference',
    link: '/conferencesAudio',
  },
  {
    icon: SettingsVoiceIcon,
    title: 'Preches',
    link: '/prechesAudio',
  },
];
