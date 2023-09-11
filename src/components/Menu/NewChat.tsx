import Discord from '@icon/Discord';
import LogoutIcon from '@icon/LogoutIcon';
import Twitter from '@icon/Twitter';
import React from 'react';

const NewChat = () => {
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
      <div className='font-bold	text-black text-base flex items-center justify-center rounded-lg	 border-textHig border h-8 w-[212px] cursor-pointer mx-auto mb-3'>
        Connect Wallet
      </div>
      <div className='flex text-sm text-gray-900 items-center justify-around py-2'>
        <LogoutIcon/>
        <Twitter/>
        <Discord/>
      </div>
    </div>
  );
};

export default NewChat;
