// Asynkron funksjon som henter data fra API-et og lagrer det i localStorage
async function hentOgLagreLand() {
  try {
    const response = await fetch('/api/land');
    const data = await response.json();
    // Lagre dataen lokalt som en JSON-streng
    localStorage.setItem('landData', JSON.stringify(data));
  } catch (error) {
    console.error('Feil ved henting av land:', error);
  }
}

// Kjør henting av land når siden lastes
hentOgLagreLand();