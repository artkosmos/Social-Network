import React from 'react';
import style from "../Profile.module.scss";

const ProfileInfo = () => {
  return (
    <div>
      <img className={style.previewPicture}
           src="https://mp2023.nyc3.digitaloceanspaces.com/689084892688/2021/06/24/thumbnails/a47tusiqw9d2au1a.jpg"
           alt="preview"/>
      <div className={style.about}>
        <img className={style.about__avatar}
             src="https://weblinks.ru/wp-content/uploads/2021/04/3zeynnx6ija.jpg"
             alt="avatar"/>
        <div className={style.about__info}></div>
      </div>
    </div>
  );
};

export default ProfileInfo;