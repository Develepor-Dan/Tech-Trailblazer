module.exports = {
     format_date: (date) => {
       const formattedMonth = date.getMonth() + 1; // Adjust for zero-based months
       const formattedDay = date.getDate();
       const formattedYear = date.getFullYear();
   
       return `${formattedMonth}/${formattedDay}/${formattedYear}`;
     },
   };
   