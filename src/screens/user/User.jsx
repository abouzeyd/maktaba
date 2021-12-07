import '../user/User.css';
import Topbar from '../../component/topbar/Topbar';
import Sidebar from '../../component/sidebar/sidebar';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div>
      <Topbar />
      <div className=" content">
        <Sidebar />
        <div className="user__container">
          <div className="user__div">
            <Link to="/createUser" className="user__button">
              <span className="user__add">+</span> Creer un utilisateur
            </Link>
          </div>
          <div className="user__div">
            <Link to="/updateUser" className="user__button">
              <span className="user__add">+</span> Metre a jour un utilisateur
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
