function showPopup(type){
    const popup = document.getElementById("popup");
    const text = document.getElementById("popupText");

    if(type === "label"){
        text.innerHTML = `
        <h2>Jung Collective Label®</h2>
        <p>Jung Collective Label 27® to idealny dla zaczynających twórców i artystów label oraz wytwórnia do której Oszi posiada prawa wraz z JungPonczkiem czyli głównym założycielem.</p>
        <p>Chcesz dołączyć? JUŻ NIEDŁUGO</p>
        `;
    }

    if(type === "unreleased"){
        text.innerHTML = `
        <h2>UnReleased 💜</h2>
        <p>KOD WYMAGANY</p>
        <input id="code" placeholder="wpisz kod">
        <button onclick="checkCode()">ODKRYJ</button>
        <div id="hidden"></div>
        `;
    }

    if(type === "tracks"){
        text.innerHTML = `
        <h2>UTWORY</h2>
        <p>WSZYSTKIE UTWORY ZNAJDZIESZ TU MORDO</p>
        <a href="https://on.soundcloud.com/oPT1JlHVfEGnkhrjL4" target="_blank">SoundCloud</a>
        `;
    }

    if(type === "future"){
        text.innerHTML = `
        <h2>CO SIĘ SZYKUJE?</h2>
        <p>Oszi powróci z projektem "Prince Of Trap"</p>
        <p>To nie jest debiut — ale prawie nikt go jeszcze nie zna.</p>
        <p>Nadchodzi też feat z 9ecd.</p>
        `;
    }

    popup.style.display = "flex";
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}

function checkCode(){
    const code = document.getElementById("code").value;
    const hidden = document.getElementById("hidden");

    if(code === "DziwkiKoksTajskiBoks"){
        hidden.innerHTML = "<p>✔ Dostęp odblokowany (na razie pusty folder)</p>";
    } else {
        hidden.innerHTML = "<p>❌ zły kod</p>";
    }
}
