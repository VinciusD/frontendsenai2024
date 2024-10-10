const imgBanner = ['assets/img/Captura de tela 2024-10-08 112427.png', 'assets/img/Captura de tela 2024-10-08 120608.png', 'assets/img/Captura de tela 2024-10-08 120652.png'];

let fotoInicial = 0;

function slider(){
    const banner = document.getElementById('banner');
    banner.style.backgroundImage = `url('${imgBanner[fotoInicial]}')`;
    fotoInicial++;
    if(fotoInicial >= imgBanner.length){
        fotoInicial = 0;
    }
}

setInterval(slider, 5000)