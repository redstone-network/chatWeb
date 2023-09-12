import React from 'react';
import useStore from '@store/store';

import PlusIcon from '@icon/PlusIcon';

import { ChatInterface } from '@type/chat';
import { generateDefaultChat } from '@constants/chat';
import WhatIcon from '@icon/whatIcon';
import TwitterIcon from '@icon/Twitter';
import DiscordIcon from '@icon/Discord';
const NewMessageButton = React.memo(
  ({ messageIndex }: { messageIndex: number }) => {
    const setChats = useStore((state) => state.setChats);
    const currentChatIndex = useStore((state) => state.currentChatIndex);
    const setCurrentChatIndex = useStore((state) => state.setCurrentChatIndex);
    const list = [
      {
        id:1,
        title:'List the recent valuable project airdrops and the specific steps to participate in them.',
      },
      {
        id:2,
        title:'List the recent valuable project airdrops and the specific steps to participate in them.',
      },
      {
        id:3,
        title:'List the recent valuable project airdrops and the specific steps to participate in them.',
      }
    ]
    return (
      <div className='h-full w-full relative'>
        <div className='text-center font-sans text-lg mt-10 mb-4'>Don’t know what to ask? Try these questions.</div>
        <div className='pt-4 pb-4 w-[820px] mx-auto flex  justify-between'>
        {list.map((item)=>{
          return (<div key={item.id} className="bg-white rounded px-8 py-6 border-slate-400 h-[165px] w-[260px] border flex flex-col items-center justify-between hover:bg-gray-200">
            <div><WhatIcon/></div>
            <div className="text-center text-lg">List the recent valuable project airdrops and the specific steps to participate in them.</div>
          </div>)
        })}
        </div>
        <div className='pt-4 w-[820px] mx-auto flex  justify-between'>
        {list.map((item)=>{
          return (<div key={item.id} className="bg-white rounded px-8 py-6 border-slate-400 h-[165px] w-[260px] border flex flex-col items-center justify-between">
            <div><WhatIcon/></div>
            <div className="text-center text-lg">List the recent valuable project airdrops and the specific steps to participate in them.</div>
          </div>)
        })}
        </div>
        <div className='w-[820px] mx-auto bg-white rounded border px-[120px] py-6 border-slate-400  mt-6 mb-6'>
          <div className="text-[24px] font-semibold	 leading-[28px] text-center mb-4">Earn insight points by asking 5 quality questions daily & redeem for airdrops in the future.</div>
          <div className='text-center text-[24px] leading-[28px] mb-4'>Join discord and follow us on twitter to keep updated!</div>
          <div className="flex justify-center">
            <DiscordIcon/>
            <div className='w-8'></div>
            <TwitterIcon/>
          </div>
        </div>
      </div>
    );
  }
);

export default NewMessageButton;
