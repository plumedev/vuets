import { TransactionType } from '@/models/transactionTypes';

export interface Transaction {
    label: string;
    date: string;
    amount: number;
    uuid: string;
    type: TransactionType;
  }
