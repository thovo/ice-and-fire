import { API_URL } from '@constants/api.constant';

export function getId(value: string, apiKey: string = ''): string {
    const length = (API_URL + apiKey).length;
    return value.slice(length);
}