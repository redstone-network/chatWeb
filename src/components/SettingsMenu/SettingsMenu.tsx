import React, { useEffect, useState } from 'react';
import PopupModal from '@components/PopupModal';
import detectEthereumProvider from '@metamask/detect-provider';
import ArrowBottom from '@icon/ArrowBottom';
import Toast from '@utils/toast';
import { login } from '@api/api';
import useStore from '@store/store';
import Avatar from '../../assets/user.png';

const SettingsMenu = () => {
  const token  = useStore((state) => state.token);
  const setToken  = useStore((state) => state.setToken);
  const account = useStore((state) => state.account);
  const setAccount = useStore((state) => state.setAccount);
  const answerCount = useStore((state) => state.answerCount);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const [isConnecting, setIsConnecting] = useState(false); 
  const [error, setError] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(''); 
  const refreshAccounts = (accounts: any) => {
    if (accounts.length > 0) {
      setAccount(accounts[0]);
    } else {
      setAccount('');
    }
  };
  const getProvider = async () => {
    const provider = await detectEthereumProvider({ silent: true });
    setHasProvider(Boolean(provider));
    if (provider) {
      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });
      refreshAccounts(accounts);
    }
  };
  useEffect(() => {
    const refreshAccounts = (accounts: any) => {
      
      if (accounts.length > 0) {
        if(account[0] !== account) {
          setToken('');
          setAccount(''); 
        }
      } else {
        setAccount('')
        setToken('');
      } 
    };

    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));
      if (provider) {
        window.ethereum.on('accountsChanged', refreshAccounts);
      }
    };

    getProvider();
    return () => {
      window.ethereum?.removeListener('accountsChanged', refreshAccounts);
    };
  }, []);


  const handleConnect = async () => {
    setIsConnecting(true);
    await window.ethereum
      .request({
        method: 'eth_requestAccounts',
      })
      .then(async (accounts: string[]) => {
        setError(false);
        const res = await login(accounts[0]);
        if (res && res.access_token) {
          setAccount(accounts[0]);
          setToken(res.access_token);
        }
      })
      .catch((err: any) => {
        setError(true);
        setAccount('');
        setErrorMessage(err.message);
      });
    setIsConnecting(false);
  };
  const logout = () => {
    setToken('');
    setAccount('');
  }

  return (
    <>
    {account && (<><div className='right-4	bg-gradient-to-tr text-sm from-btnStart to-btnEnd absolute text-white py- text-center rounded py-0.5 px-2'>
        Free
      </div><div className='flex items-center pb-4'>
          <div className='mr-2'>
            <img className="w-10 h-10" src={Avatar} alt="" />
          </div>
          <div className='cursor-pointer' onClick={() => {
          setIsModalOpen(true);
        }}>
            <div className='text-black text-base'>User</div>
            <div className='text-gray-500	text-sm w-16 truncate'>{account}</div>
          </div>
        </div></>)}
      {!account && <div
        onClick={() => {
          // Toast('Connect Wallet', 'success');
          setIsModalOpen(true);
        }}
        className='font-bold	text-black text-base flex items-center justify-center rounded-lg	 border-textHig border h-10 w-[212px] cursor-pointer mx-auto mb-3'
      >
        Connect Wallet
      </div>}

      {isModalOpen && (
        <PopupModal
          setIsModalOpen={setIsModalOpen}
          title={''}
          cancelButton={false}
        >
          <div className='px-6 border-b border-gray-200 dark:border-gray-600 flex flex-col items-center gap-4'>
            {account === '' && (
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
            {account !== '' && (
              <div className='w-[363px] mx-[120px] text-center'>
                <div className='text-xl mb-2'>{account}</div>
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
                <div onClick={logout} className='text-xl cursor-pointer text-dark-gray border-b-2 mb-10 inline-block	'>
                  Log out
                </div>
              </div>
            )}
            {error && (
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
