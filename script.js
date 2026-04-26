const infoBox = document.getElementById("infoBox");
const infoText = document.getElementById("infoText");
const extraButtonArea = document.getElementById("extraButtonArea");

function resetBox(){
    infoBox.classList.remove("hidden");
    extraButtonArea.innerHTML = "";
}

function showLabel(){
    resetBox();
    infoText.innerHTML = "Ehh, OsziEntertaiment Records® NIEDŁUGO, OD RAZU PO WYJŚCIU PRINCE OF TRAP 😝 Póki co Jung Collective Label 27®";
}

function showUnreleased(){
    let code = prompt("WPISZ KOD DOSTĘPU:");
    if(code === "DziwkiKoksTajskiBoks"){
        resetBox();
        infoText.innerHTML = "KOD POPRAWNY 🔥 DOSTĘP ODBLOKOWANY";
        extraButtonArea.innerHTML = '<button class=\"extraBtn\" onclick=\"goDrive()\">DAWAJ</button>';
    }else if(code !== null){
        resetBox();
        infoText.innerHTML = "Zły kod 😝";
    }
}

function goDrive(){
    window.location.href = "https://drive.google.com/drive/folders/1pJ6kK4lmBKyCd_dyvoWSCph5VRht89jV";
}

function showTracks(){
    resetBox();
    infoText.innerHTML = "WEJDŹ NA PROFIL SOUNDCLOUD OSZI 🔥🔥🔥";
    extraButtonArea.innerHTML = '<button class=\"extraBtn\" onclick=\"goSound()\">SOUNDCLOUD</button>';
}

function goSound(){
    window.location.href = "https://on.soundcloud.com/F0f9gB5iQihzvU89z2";
}

function showTeam(){
    resetBox();
    infoText.innerHTML = "Jeśli serio ci zależy, DM na discord: 0szikoszi";
}



const canvas = document.getElementById("fireCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<120;i++){
    particles.push({
        x:Math.random()*canvas.width,
        y:canvas.height + Math.random()*canvas.height,
        size:Math.random()*12+4,
        speed:Math.random()*3+1,
        alpha:Math.random()
    });
}

function drawFire(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let p of particles){
        ctx.beginPath();
        let gradient = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.size);
        gradient.addColorStop(0,`rgba(255,255,100,${p.alpha})`);
        gradient.addColorStop(0.4,`rgba(255,100,0,${p.alpha})`);
        gradient.addColorStop(1,"rgba(255,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fill();

        p.y -= p.speed;
        p.x += Math.sin(p.y*0.05);

        if(p.y < -20){
            p.y = canvas.height + 20;
            p.x = Math.random()*canvas.width;
        }
    }

    requestAnimationFrame(drawFire);
}
drawFire();
