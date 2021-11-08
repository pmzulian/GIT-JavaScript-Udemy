// Nullish Coalescing Operator (??)
// Operador de fusión nulo (??)

const numGuests = undefined;
const guest = numGuests || 10;
console.log(guest);

//Nullish: null and undefined (not 0 or '')
const guestCorrect = numGuests ?? 10;
console.log(guestCorrect);
