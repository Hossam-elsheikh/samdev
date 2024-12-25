import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function formattedDate(ISODate) {
  const date = new Date(ISODate);

  // Get month names
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const month = months[date.getMonth()]; 
  const day = date.getDate();
  const year = date.getFullYear(); 

  const ordinalSuffix = (n) => {
    if (n > 3 && n < 21) return "th"; 
    switch (n % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  return `${month} ${day}${ordinalSuffix(day)} ${year}`;
}