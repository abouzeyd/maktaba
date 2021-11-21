import '../user/User.css';
import Topbar from '../../component/topbar/Topbar';
import Sidebar from '../../component/sidebar/sidebar';

const User = () => {
  return (
    <div>
      <Topbar />
      <div className=" content">
        <Sidebar />
        <div className="user__container">
          <div className="user__information">
            <h5>USER</h5>
            <div className="user__identity">
              <p>nom d'utilisateur:Abouzayd</p>
              <p>mot de passe:12345</p>
            </div>
          </div>
          <div className="user__div">
            <a href="/createUser" className="user__button">
              <span className="user__add">+</span> Creer un utilisateur
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;