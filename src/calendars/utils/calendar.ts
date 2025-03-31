// utils/calendarUtils.ts
export const convertToCosmicTimeline = (gregorianYear: number): string => {
    // Assuming Year 0 = Big Bang (13.8 billion years ago)
    const cosmicYear = 13.8e9 - gregorianYear; 
    return `In the Cosmic Timeline, this would be the year ${cosmicYear}.`;
};