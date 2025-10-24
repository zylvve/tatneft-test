export function formatTime(date: Date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
}

export function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export function formatFullDate(date: Date) {
    return `${formatDate(date)} ${formatTime(date)}`
}

export function generateAscendingDates(days: number) {
    const dates = [];
    const today = new Date();

    const startDate = new Date(today);
    startDate.setDate(today.getDate() - days + 1);

    for (let i = 0; i < days; i++) {
        const newDate = new Date(startDate);
        newDate.setDate(startDate.getDate() + i);
        dates.push(newDate.toISOString().split('T')[0]);
    }

    return dates;
}