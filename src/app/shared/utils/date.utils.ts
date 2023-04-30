export function convertToSupportDate(input: string = ''): string {
    const date = new Date(input);
    if (date?.toString() !== 'Invalid Date') {
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();;
        const year = date.getFullYear();
        return `${year}-${month}-${day}T00:00:00`;
    } else {
        return '';
    }

}
