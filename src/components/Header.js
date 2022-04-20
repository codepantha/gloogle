import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { BsCardImage } from 'react-icons/bs';
import { TiNews } from 'react-icons/ti';
import { BsPlayBtnFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import Search from './Search';

const Header = () => {
  return (
    <section className="header__container w-100 flex flex-column pa3 mb4">
      <div className="header__container-topmenu flex justify-between items-center mb3">
        <AiOutlineMenu size={24} color="#041C32" />
        <p className="f3 f2-l lh-copy" style={{ color: "#041C32" }}>
          <span className="blue">G</span>
          <span className="dark-red">l</span>
          <span className="gold">o</span>
          <span className="light-blue">o</span>
          <span className="green">g</span>
          <span className="red">l</span>
          <span className="blue">e</span>
        </p>
        <div className="ba-none br4 pa2 bg-gray white">Hi</div>
      </div>
      <Search />
      <nav className="w-100 flex justify-between justify-around-m justify-center-l gap-4 items-end mt1">
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive
              ? "gray link link:active pointer bb mh3-l flex items-center"
              : "gray link pointer mh3-l flex items-center"
          }
        >
          <BsSearch className="navIcon" />
          <p className="f5">Search</p>
        </NavLink>
        <NavLink
          to="/image"
          className={({ isActive }) =>
            isActive
              ? "gray link link:active pointer bb mh3-l flex items-center"
              : "gray link pointer mh3-l flex items-center"
          }
        >
          <BsCardImage className="navIcon" />
          <p className="f5">Images</p>
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive
              ? "gray link link:active pointer bb mh3-l flex items-center"
              : "gray link pointer mh3-l flex items-center"
          }
        >
          <TiNews className="navIcon" />
          <p className="f5">News</p>
        </NavLink>
        <NavLink
          to="/videos"
          className={({ isActive }) =>
            isActive
              ? "gray link link:active pointer bb mh3-l flex items-center"
              : "gray link pointer mh3-l flex items-center"
          }
        >
          <BsPlayBtnFill className="navIcon" />
          <p className="f5">Videos</p>
        </NavLink>
      </nav>
    </section>
  );
};

export default Header;
