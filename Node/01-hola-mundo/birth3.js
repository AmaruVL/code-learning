let birthdate = new Date(2000, 1, 29); // 29th Feb 2000
let today = new Date(2001, 1, 28);     // 28th Feb 2001
let year_difference = today.getFullYear() - birthdate.getFullYear();  // 2001 - 2000 = 1
let one_or_zero = (today.getMonth() < birthdate.getMonth()) ||
                  (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()) ? 1 : 0;
let age = year_difference - one_or_zero;
console.log(age);  // Output: 0