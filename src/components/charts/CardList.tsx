const LineBar = ({ data, title }: any) => {
  return (
    <>
      <div className='text-lg text-black font-bold mb-2 font-sans'>{title}</div>

      <div>
        {data &&
          data.map((row: any, index: any) => {
            return (
              <div className='flex first:mb-6'>
                {row.map((item: any, i: any) => {
                  return (
                    <div className='mr-10'>
                      <div className='text-base text-black mb-2 font-sans'>
                        Finalized Blocks
                      </div>
                      <div className='text-lg text-primary font-sans'>
                        16,324,880
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </>
  );
};
export default LineBar;
