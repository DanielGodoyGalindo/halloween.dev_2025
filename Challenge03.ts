/*

Michael Myers has left a pattern on his calendar…

Every year he attacks on Halloween night (October 31st) or on any Friday the 13th.

Your mission is to find all the terror nights of a specific year 🩸

You will receive a year (for example 2025) and must return an array with all the dates in 'YYYY-MM-DD' format where Michael Myers could attack.

If the year is not valid, return an empty array.
Return all dates in the year that are October 31st, and/or Friday the 13th.
Dates must be sorted chronologically.
The format must be exactly 'YYYY-MM-DD' (with leading zeros if needed).
myersCalendar(2025)
// → ['2025-06-13', '2025-09-13', '2025-10-31']

myersCalendar(2026)
// → ['2026-02-13', '2026-03-13', '2026-10-31', '2026-11-13']

myersCalendar(2024)
// → ['2024-09-13', '2024-10-31', '2024-12-13']

*/
function myersCalendar(year: number): string[] {
    if (year === 0 || year === -1) return []
    let output = [];
    const daysMonth: Record<number, number> = { 1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31 };
    // Check leap year
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        daysMonth[2]++;
    }
    // For every month and every day of the month
    for (let month in daysMonth) {
        const monthNum = Number(month);
        for (let i = 1; i <= daysMonth[month]; i++) {
            const date = new Date(year, monthNum - 1, i);
            // get all friday the 13th and halloween date
            if ((date.getDate() === 13 && date.getDay() === 5) || (date.getMonth() === 9 && date.getDate() === 31)) {
                output.push(date.toLocaleDateString());
            }
        }
    }
    // Get "yyyy/mm/dd" format
    const output2: string[] = [];
    output.forEach(date => {
        const splitDate = date.split("/");
        if (splitDate[1].length === 1) splitDate[1] = "0" + splitDate[1];
        if (splitDate[0].length === 1) splitDate[0] = "0" + splitDate[0];
        output2.push(`${splitDate[2]}-${splitDate[0]}-${splitDate[1]}`);
    });
    return output2;
}
