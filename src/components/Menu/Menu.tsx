import React, { useEffect, useState } from 'react';
import useStore from '@store/store';

import NewChat from './NewChat';
import ChatHistoryList from './ChatHistoryList';
import LogoIcon from '@icon/LogoIcon2';
import ChatDataInsight from '@src/assets/chat-data-insight.png';
import MenuIcon from '@icon/MenuIcon';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = () => setMenuOpen(!menuOpen);

  return (
    <div id='menu' className='bg-white'>
      <div className='md:hidden'>
        <div className='p-2'>
          <MenuIcon onClick={toggle}></MenuIcon>
        </div>
        <div
          onClick={toggle}
          className={`fixed w-full z-10 min-h-full bg-gray-600 ${
            menuOpen ? '' : 'hidden'
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className='w-2/3 bg-white h-screen'
          >
            <ChatHistoryList />
          </div>
        </div>
      </div>
      <div className="w-sidebar px-2 flex flex-col h-full justify-between">
        <header className='flex items-end border-b border-gary_new-1 p-4'>
          <div className='pr-2'>
            <LogoIcon />
          </div>
          <img className='h-4.5 w-35' src={ChatDataInsight} alt='' />
        </header>
        <ChatHistoryList />
        <NewChat />
      </div>
    </div>
  );
};

export default Menu;
