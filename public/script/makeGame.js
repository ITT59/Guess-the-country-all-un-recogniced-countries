// Funksjon for å hente lagret landdata fra localStorage
function hentLagretLand() {
  const data = localStorage.getItem('landData');
  if (data) {
    return JSON.parse(data);
  } else {
    console.warn('Ingen landdata funnet i localStorage.');
    return [];
  }
}

const alleLand = hentLagretLand();
const tilfeldigIndeks1 = 20; 
const valgtLand = alleLand[tilfeldigIndeks1];
console.log(`Land: ${valgtLand.country}, Hovedstad: ${valgtLand.capital}`);

