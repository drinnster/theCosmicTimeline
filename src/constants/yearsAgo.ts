// Enhanced yearsAgo function for better formatting

export const yearsAgo = (year: number): string => {
    const yearsDifference = Math.round(year);
  
    if (yearsDifference >= 1e9) {
      return `${(yearsDifference / 1e9).toFixed(2)} billion years ago`;
    } else if (yearsDifference >= 1e6) {
      return `${(yearsDifference / 1e6).toFixed(2)} million years ago`;
    } else if (yearsDifference >= 1e3) {
      return `${(yearsDifference / 1e3).toFixed(2)} thousand years ago`;
    } else {
      return `${yearsDifference} years ago`;
    }
  };