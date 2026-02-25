// Function to get the next 1st Saturday of the month
export function getNextFirstSaturday(): string {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDate = today.getDate();
    
    // Check if we need current month or next month
    let targetMonth = currentMonth;
    let targetYear = currentYear;
    
    // Find the first Saturday of current month
    const firstOfMonth = new Date(targetYear, targetMonth, 1);
    const dayOfWeek = firstOfMonth.getDay();
    const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
    const firstSaturday = new Date(targetYear, targetMonth, 1 + daysUntilSaturday);

    // If we've passed the first Saturday of current month, get next month's
    if (currentDate > firstSaturday.getDate()) {
        targetMonth = (currentMonth + 1) % 12;
        if (targetMonth === 0) {
            targetYear = currentYear + 1;
        }

        const nextFirstOfMonth = new Date(targetYear, targetMonth, 1);
        const nextDayOfWeek = nextFirstOfMonth.getDay();
        const nextDaysUntilSaturday = (6 - nextDayOfWeek + 7) % 7;
        const nextFirstSaturday = new Date(targetYear, targetMonth, 1 + nextDaysUntilSaturday);
        
        return `${nextFirstSaturday.getDate()} ${nextFirstSaturday.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}`;
    }
    
    return `${firstSaturday.getDate()} ${firstSaturday.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}`;
}

// Function with ordinal suffix for display (e.g., "1st", "2nd", "3rd")
export function getNextFirstSaturdayWithOrdinal(): string {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDate = today.getDate();
    
    // Check if we need current month or next month
    let targetMonth = currentMonth;
    let targetYear = currentYear;
    
    // Find the first Saturday of current month
    const firstOfMonth = new Date(targetYear, targetMonth, 1);
    const dayOfWeek = firstOfMonth.getDay();
    const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
    const firstSaturday = new Date(targetYear, targetMonth, 1 + daysUntilSaturday);

    // If we've passed the first Saturday of current month, get next month's
    if (currentDate > firstSaturday.getDate()) {
        targetMonth = (currentMonth + 1) % 12;
        if (targetMonth === 0) {
            targetYear = currentYear + 1;
        }

        const nextFirstOfMonth = new Date(targetYear, targetMonth, 1);
        const nextDayOfWeek = nextFirstOfMonth.getDay();
        const nextDaysUntilSaturday = (6 - nextDayOfWeek + 7) % 7;
        const nextFirstSaturday = new Date(targetYear, targetMonth, 1 + nextDaysUntilSaturday);
        
        const day = nextFirstSaturday.getDate();
        const ordinal = getOrdinalSuffix(day);
        return `${day}${ordinal} ${nextFirstSaturday.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}`;
    }
    
    const day = firstSaturday.getDate();
    const ordinal = getOrdinalSuffix(day);
    return `${day}${ordinal} ${firstSaturday.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}`;
}

function getOrdinalSuffix(day: number): string {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}