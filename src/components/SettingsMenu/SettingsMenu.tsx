import React, { useEffect, useState } from 'react';
import PopupModal from '@components/PopupModal';
import detectEthereumProvider from '@metamask/detect-provider';
import ArrowBottom from '@icon/ArrowBottom';

const SettingsMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const initialState = { accounts: [] }; /* New */
  const [wallet, setWallet] = useState(initialState); /* New */
  const [isConnecting, setIsConnecting] = useState(false); /* New */
  const [error, setError] = useState(false); /* New */
  const [errorMessage, setErrorMessage] = useState(''); /* New */
  useEffect(() => {
    const refreshAccounts = (accounts: any) => {
      /* New */
      if (accounts.length > 0) {
        /* New */
        updateWallet(accounts); /* New */
      } else {
        /* New */
        // if length 0, user is disconnected                    /* New */
        setWallet(initialState); /* New */
      } /* New */
    }; /* New */

    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      console.log(provider);
      setHasProvider(Boolean(provider)); // transform provider to true or false
      if (provider) {
        /* New */
        const accounts = await window.ethereum.request(
          /* New */
          { method: 'eth_accounts' } /* New */
        ); /* New */
        refreshAccounts(accounts); /* New */
        window.ethereum.on('accountsChanged', refreshAccounts); /* New */
      }
    };

    getProvider();
    return () => {
      /* New */
      window.ethereum?.removeListener('accountsChanged', refreshAccounts);
    };
  }, []);
  const updateWallet = async (accounts: any) => {
    setWallet({ accounts });
  };

  const handleConnect = async () => {
    setIsConnecting(true); /* New */
    await window.ethereum
      .request({
        /* Updated */ method: 'eth_requestAccounts',
      })
      .then((accounts: []) => {
        /* New */
        setError(false); /* New */
        updateWallet(accounts); /* New */
      }) /* New */
      .catch((err: any) => {
        /* New */
        setError(true); /* New */
        setErrorMessage(err.message); /* New */
      }); /* New */
    setIsConnecting(false);
  };
  const disableConnect = Boolean(wallet) && isConnecting;
  return (
    <>
      <a
        className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/3 transition-colors duration-200 text-white cursor-pointer text-sm'
        onClick={() => {
          setIsModalOpen(true);
        }}
      >a</a>
      {isModalOpen && (
        <PopupModal
          setIsModalOpen={setIsModalOpen}
          title={''}
          cancelButton={false}
        >
          <div className='px-6 border-b border-gray-200 dark:border-gray-600 flex flex-col items-center gap-4'>
            {wallet.accounts.length === 0 && (
              <div className='w-[648px]'>
                <div className='text-center text-[36px] leading-[56px] font-blob w-[408px] mx-auto mb-2'>
                  Connect wallet to ask more questions.
                </div>
                <div className='text-center text-lg leading-[28px] font-blob w-[408px] mx-auto mb-10'>
                  Connect wallet and ask 5 good questions to get insight points
                  daily.
                </div>
                <div
                  onClick={handleConnect}
                  className='w-[408px] h-[56px] bg-black text-white rounded-xl font-bold	 text-lg leading-6 mb-16 flex justify-center items-center mx-auto'
                >
                  <ArrowBottom />
                  <span className='ml-4'>Metamask</span>
                </div>
              </div>
            )}
            {wallet.accounts.length > 0 && (
              <div className='w-[363px] mx-[120px] text-center'>
                <div className='text-xl mb-2'>{wallet.accounts[0]}</div>
                <div className='text-2xl font-bold'>Insight Points</div>
                <div className='py-6 text-[48px] font-medium text-textHig'>
                  66
                </div>
                <div className='text-xl text-dark-gray leading-7 mb-2'>
                  Ask 5 good questions every day and receive 1 insight point for
                  each question. You can earn up to 5 points daily and redeem
                  for airdrops in the future.
                </div>
                <div className='text-2xl mb-1'>You have asked</div>
                <div className='text-2xl p-1 border border-black rounded-xl inline-block my-2 bg-gary_new-1'>
                  3/5
                </div>
                <div className='text-2xl mb-4'>valid questions today.</div>
                <div className='text-xl text-dark-gray border-b-2 mb-10 inline-block	'>
                  Log out
                </div>
              </div>
            )}
            {error /* New code block */ && (
              <div onClick={() => setError(false)}>
                <strong>Error:</strong> {errorMessage}
              </div>
            )}
          </div>
        </PopupModal>
      )}
    </>
  );
};

export default SettingsMenu;
