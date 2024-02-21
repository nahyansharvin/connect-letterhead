const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//To structure Date
export const getDate = (dateStr: Date) => {
    const date = new Date(dateStr);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};


//To get Day from Date
export const getDay = (dateStr: Date) => {
    const date = new Date(dateStr);
    return days[date.getDay()];
};