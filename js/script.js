document.addEventListener('DOMContentLoaded', () => {
   const startYear = 2014;
   const currentYear = new Date().getFullYear() - startYear;
   const months = new Date().getMonth();
   const exp = currentYear + ' years ' + months + ' months';
   document.querySelector('#experience').innerText = exp;
})
