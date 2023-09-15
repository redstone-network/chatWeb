import SettingsMenu from '@components/SettingsMenu';
import Discord from '@icon/Discord';
import LogoutIcon from '@icon/LogoutIcon';
import Twitter from '@icon/Twitter';
import useStore from '@store/store';
import React from 'react';

const NewChat = () => {
  const token  = useStore((state) => state.token);
  const setToken  = useStore((state) => state.setToken);
  const account = useStore((state) => state.account);
  const setAccount = useStore((state) => state.setAccount);
  const logout = () => {
    setToken('');
    setAccount('');
  }
  return (
    <div className='border-t shrink-0 px-4 pt-6 pb-5 relative'>
      {/* <div className='right-4	bg-gradient-to-tr text-sm from-btnStart to-btnEnd absolute text-white py- text-center rounded py-0.5 px-2'>
        Free
      </div>
      <div className='flex items-center pb-4'>
        <div className='mr-2'>
          <img className="w-10 h-10" src={Avatar} alt="" />
        </div>
        <div>
          <div className='text-black text-base'>User</div>
          <div className='text-gray-500	text-sm'>0xfw...gw35</div>
        </div>
      </div> */}
      <SettingsMenu />
      <div className='flex text-sm text-gray-900 items-center justify-around py-2'>
        <span onClick={logout} className="cursor-pointer">
          <LogoutIcon />
        </span>
        <span onClick={() => {window.open('https://twitter.com/ChatdataInsight')}}  className="cursor-pointer">
          <Twitter />
        </span>
        <span className="cursor-pointer">
          <Discord />
        </span>
      </div>
    </div>
  );
};

export default NewChat;
