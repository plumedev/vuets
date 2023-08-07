import { v4 as uuidv4 } from 'uuid';

export default class UuidService {
    public static generateUniqueId(): string {
        return uuidv4();
    }
}
