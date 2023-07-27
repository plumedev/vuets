import { TransactionType } from '@/models/transactionTypes';
import store from '@/store';

class LocalStorageService {
    public save(key: string, value: any): void {
        const existingValues: any[] = this.get(key) || [];
        existingValues.push(value);
        const formattedValue = JSON.stringify(existingValues);
        localStorage.setItem(key, formattedValue);
    }

    public get<T>(key: string): T | null {
        const stringValue = localStorage.getItem(key);
        if (stringValue === null) {
            return null;
        }
        const localStorageContent = JSON.parse(stringValue);
        return localStorageContent as T;
    }

    public remove(key: string): void {
        localStorage.removeItem(key);
    }

    public syncWithStore(key: string): void {
        const transactions = this.get<TransactionType[]>(key);
        if (transactions) {
            store.commit('syncTransactions', transactions);
        }
    }
}

export default new LocalStorageService();
