import dayjs from 'dayjs';
import 'dayjs/locale/fr';

export default class DayJsService {
    public static getActiveMonth() {
        return dayjs();
    }
}
