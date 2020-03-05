import React from 'react';
import './Profile.css'

const rootPath = `/${window.location.pathname.indexOf('my-blog') > -1 ? 'my-blog/' : ''}`;

const Profile: React.FC = () => {

  return <div className="profile">
    <div className="profile-picture">
      <img src={`${rootPath}pictures/profile_picture.jpg`} alt="Profile"/>
    </div>
  </div>;
};

export default Profile;
