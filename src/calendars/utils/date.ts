// utils/dateUtils.ts
export const yearsAgoFromBigBang = (years: number): string => {
    // Convert years relative to the Big Bang (e.g., Cosmic Timeline)
    const bigBangEpoch = 13.8e9; // Age of the Universe
    return `${years} years ago, it was approximately ${bigBangEpoch - years} years from the Big Bang.`;
};