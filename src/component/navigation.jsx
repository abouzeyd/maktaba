import React from 'react';
import navigations from '../data/navigation.json';

const navigation = () => {
  return (
    <div style={style.container}>
      <div style={{ marginTop: 12, color: 'white' }}>Logo</div>
      <div style={style.divNavigation}>
        {navigations.map((item, index) => {
          return (
            <div key={index}>
              <li
                style={{
                  listStyle: 'none',
                  marginLeft: 35,
                }}
              >
                <a
                  href={item.link}
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    fontSize: 17,
                  }}
                >
                  {item.title}
                </a>
              </li>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 12, color: 'white' }}>New Letter</div>
    </div>
  );
};

export default navigation;
const style = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#84b856',
  },
  divNavigation: {
    display: 'flex',
    marginTop: 25,
    marginBottom: 12,
  },
};
