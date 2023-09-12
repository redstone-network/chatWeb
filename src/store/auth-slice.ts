import { defaultAPIEndpoint } from '@constants/auth';
import { StoreSlice } from './store';

export interface AuthSlice {
  apiKey?: string;
  apiEndpoint: string;
  account: string;
  token: string;
  answerCount: number;
  answerTime: string;
  firstVisit: boolean;
  setApiKey: (apiKey: string) => void;
  setAccount: (account: string) => void;
  setToken: (token: string) => void;
  setAnswerCount: (answerCount: number) => void;
  setAnswerTime: (answerTime: string) => void;
  setApiEndpoint: (apiEndpoint: string) => void;
  setFirstVisit: (firstVisit: boolean) => void;
}

export const createAuthSlice: StoreSlice<AuthSlice> = (set, get) => ({
  apiEndpoint: defaultAPIEndpoint,
  account:'',
  token: '',
  answerCount: 0,
  answerTime: '',
  apiKey: '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',
  firstVisit: true,
  setApiKey: (apiKey: string) => {
    set((prev: AuthSlice) => ({
      ...prev,
      apiKey: apiKey,
    }));
  },
  setAccount: (account: string) => {
    set((prev: AuthSlice) => ({
      ...prev,
      account: account,
    }));
  },
  setToken: (token: string) => {
    set((prev: AuthSlice) => ({
      ...prev,
      token: token,
    }));
  },
  setAnswerCount: (answerCount: number) => {
    set((prev: AuthSlice) => ({
      ...prev,
      answerCount: answerCount,
    }));
  },
  setAnswerTime: (answerTime: string) => {
    set((prev: AuthSlice) => ({
      ...prev,
      answerTime: answerTime,
    }));
  },
  setApiEndpoint: (apiEndpoint: string) => {
    set((prev: AuthSlice) => ({
      ...prev,
      apiEndpoint: apiEndpoint,
    }));
  },
  setFirstVisit: (firstVisit: boolean) => {
    set((prev: AuthSlice) => ({
      ...prev,
      firstVisit: firstVisit,
    }));
  },
});
