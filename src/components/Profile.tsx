import React from 'react';
import ProfilePicture from './profile_picture.jpg';
import GitHubIcon from './github.svg';
import './Profile.css'

const Profile: React.FC = () => {

  return <div className="profile">
    <div className="profile-picture">
      <img src={ProfilePicture} alt="Profile" />
    </div>
    <h3>崔明远/Trim Ryan</h3>
    JavaScript好使！
    <div className="link-list">
      <a href="https://github.com/angryshhh">
        <img src={GitHubIcon} alt="github" />
        angryshhh
      </a>
    </div>
    <div className="profile-footer">© 崔明远 Powered By Trim Ryan</div>
  </div>;
};

export default Profile;
