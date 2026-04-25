function openLabel() {
  alert("Jung Collective Label 27® to idealny dla zaczynających twórców i artystów label oraz wytwórnia do której Oszi posiada prawa wraz z JungPonczkiem czyli głównym założycielem. Chcesz dołączyć? JUŻ NIEDŁUGO");
}

function openUnreleased() {
  let code = prompt("Wpisz kod dostępu:");
  if (code === "DziwkiKoksTajskiBoks") {
    window.open("https://drive.google.com/drive/folders/1pJ6kK4lmBKyCd_dyvoWSCph5VRht89jV", "_blank");
  } else {
    alert("Zły kod 💀");
  }
}

function openTracks() {
  alert("WSZYSTKIE UTWORY ZNAJDZIESZ TU MORDO");
  window.open("https://on.soundcloud.com/oPT1JlHVfEGnkhrjL4", "_blank");
}

function openFuture() {
  alert("Co się szykuje? ... jeszcze się dowiesz 😈");
}

function openSecret() {
  let code = prompt("Enter admin code:");
  if (code === "TrapPrince!") {
    alert("ADMIN MODE (na razie pusty 😈)");
  } else {
    alert("Brak dostępu 💀");
  }
}
