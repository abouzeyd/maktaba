import React from 'react';
import './sidebar.css';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import PersonIcon from '@mui/icons-material/Person';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <h5 className="sidebar__title">
            <Link to="/dashboard" className="sidebar__linked">
              Dashboard
            </Link>
          </h5>
          <ul className="sidebar__list">
            {iconeSidebar.map((item, index) => {
              return (
                <li className="sidebar__item" key={index}>
                  <item.icone />
                  <Link to={item.link} className="sidebar__link">
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default sidebar;

const iconeSidebar = [
  {
    icone: HomeIcon,
    title: 'Home',
    link: '/',
  },
  {
    icone: PersonIcon,
    title: 'Users',
    link: '/usersList',
  },
  {
    icone: HeadsetMicIcon,
    title: 'Cours',
    link: '/coursAudio',
  },
  {
    icone: LineStyleIcon,
    title: 'Conferences',
    link: '/ConferencesAudio',
  },
  {
    icone: SettingsVoiceIcon,
    title: 'Prêches',
    link: '/prechesAudio',
  },
];
