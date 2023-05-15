import LogoIcon from '@icon/LogoIcon';
import HomeBG from '@icon/HomeBG';
export default function name() {
  const goToBeta = () => {
    window.location.href = 'https://forms.gle/2sLg51Q6tfavRqDMA';
  };
  return (
    <div className='bg-white min-h-screen flex flex-col'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='w-20 mr-7 ml-10'>
            <LogoIcon />
          </div>
          <div className='text-homeMain font-urbanist text-3xl font-extrabold'>
            ChatData Insight
          </div>
        </div>
        <div className='pr-14 pt-7'>
          <button className='text-homeMain border-solid border-2 rounded-md	 px-16 py-2 border-homeMain font-urbanist text-2xl'>
            Sign In
          </button>
        </div>
      </div>
      <div className='flex-grow'>
        <div className='min-h-full pt-32'>
          <div className='font-urbanist text-6xl text-left font-blob pb-14 pl-24'>
            <p>Your trusted </p>
            <p className='bg-gradient-to-r text-homeMain'>decision-making</p>
            <p>assistant</p>
          </div>
          <div className='font-urbanist text-3xl text-left font-medium	pb-24  pl-24'>
            Unlock the power of data <br /> with ChatGPT
          </div>
          <div className='pl-24'>
            <button onClick={goToBeta} className='text-white font-semibold	 text-3xl rounded-2xl bg-gradient-to-l from-btnStart to-btnEnd px-14 py-2'>
              Join Beta
            </button>
          </div>
        </div>
        <div className="absolute bottom-0	right-0 transform translate-x-4 translate-y-4"><HomeBG/></div>
      </div>
    </div>
  );
}
