function drawCalendar(year, month) {
    const headlines = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const num_weeks = 7;

    // use last day of the month for getting number of days for the month.
    const daysInMonth = new Date(year, month, 0).getDate();

    // Get the day of the week for the first day of the month
    const firstDayOfWeek = new Date(year, month - 1, 1).getDay();

    let calendar = [headlines];
    let week = new Array(num_weeks).fill(0);


    for (let day = 1; day <= daysInMonth; day++) {
        // Calculate the index for the current day in the week array
        const dayIndex = (firstDayOfWeek + day - 1) % num_weeks;

        week[dayIndex] = day;

        if (dayIndex === 6 || day === daysInMonth) {
            calendar.push([...week]);
            week.fill(0);
        }
    }

    console.log(prettyPrint(calendar));
}

function prettyPrint(calendar) {
    return calendar.map(row => 
        row.map(day => day === 0 ? '   ' : day.toString().padStart(3)).join('  '));
}

drawCalendar(2025, 3); // march 2025
drawCalendar(2023, 10);