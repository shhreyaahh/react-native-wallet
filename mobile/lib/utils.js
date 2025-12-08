//for formating the date as in our database we put dates in a different style but we want it in another style  


// lib/utils.js
export function formatDate(dateString) {
  // format date nicely
  // example: from this 👉 2025-05-20 to this 👉 May 20, 2025
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}