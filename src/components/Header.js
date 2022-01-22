import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Search from './Search';

const Header = () => {
  return (
    <section className='header__container w-100 flex flex-column pa3 mb4'>
      <div className='header__container-topmenu flex justify-between items-center mb3'>
        <AiOutlineMenu size={24} />
        <p className="f3 lh-copy">Gloogle</p>
        <div className="ba-none br4 pa2 bg-gray white">Hi</div>
      </div>
      <Search />
      <nav className="w-100 flex justify-between items-end mt1">
        <Link to='/search' className="gray link link:active pointer bb"><p className='f5'>Search</p></Link>
        <Link to='/images' className="gray link link:active pointer"><p className='f5'>Images</p></Link>
        <Link to='/news' className="gray link link:active pointer"><p className='f5'>News</p></Link>
        <Link to='/videos' className="gray link link:active pointer"><p className='f5'>Videos</p></Link>
      </nav>
    </section>
  )
};

export default Header;
