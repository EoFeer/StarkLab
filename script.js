const soundAudio = document.querySelector(".sound");
const imgSound = document.querySelector(".img-sound");
const buttonJarvis = document.querySelector(".button-section");
const containerArmor = document.querySelector(".containerArmor");
const armorButton = document.querySelector(".armor-button");
const armorSelect = document.querySelector("#armor-select");
const imgMark = document.querySelector(".img-mark");
const title = document.querySelector("h1");
const paragraph = document.querySelector("p");

function Armorchange() {
  if (armorSelect.value == "Mark I") {
    imgMark.src = "./assets/Mark1.png";
    title.innerText = "MARK I";
    paragraph.innerText =
      "Primeira armadura de Tony Stark, movida pelo Reator Arc e equipada com armas improvisadas, símbolo do início da tecnologia do Homem de Ferro.";
  }

  if (armorSelect.value == "Mark II") {
    imgMark.src = "./assets/Mark2.png";
    title.innerText = "MARK II";
    paragraph.innerText =
      "Primeira armadura avançada de Tony Stark, equipada com sistema de voo completo e visor digital, mas ainda limitada em altas altitudes.";
  }

  if (armorSelect.value == "Mark III") {
    imgMark.src = "./assets/Mark3.png";
    title.innerText = "MARK III";
    paragraph.innerText =
      " Armadura totalmente funcional, com voo estável, armas avançadas e design clássico em vermelho e dourado.";
  }

  if (armorSelect.value == "Mark IV") {
    imgMark.src = "./assets/MarkIV.png";
    title.innerText = "MARK IV";
    paragraph.innerText =
      "Armadura refinada e estável, com voo aprimorado e sistema de armas mais eficiente, projetada para uso contínuo.";
  }

  if (armorSelect.value == "Mark V") {
    imgMark.src = "./assets/MarkV.png";
    title.innerText = "MARK V";
    paragraph.innerText =
      "Armadura portátil em forma de maleta, leve e prática, projetada para emergências rápidas com sistema de montagem instantânea.";
  }

  if (armorSelect.value == "Mark VI") {
    imgMark.src = "./assets/MarkVI.png";
    title.innerText = "MARK VI";
    paragraph.innerText =
      "Armadura com Reator Arc triangular, voo estável em grandes altitudes e arsenal aprimorado, marcando evolução em poder e eficiência.";
  }

  if (armorSelect.value == "Mark VII") {
    imgMark.src = "./assets/MarkVII.png";
    title.innerText = "MARK VII";
    paragraph.innerText =
      "Armadura com sistema de implantação automática, equipada com arsenal completo e voo otimizado para combate imediato em situações de emergência.";
  }

  if (armorSelect.value == "Mark XVII") {
    imgMark.src = "./assets/MarkXVII.png";
    title.innerText = "MARK XVII";
    paragraph.innerText =
      "Armadura Heartbreaker (Mark XVII), projetada para poder de fogo máximo, equipada com repulsores de alta intensidade e design reforçado para combates pesados.";
  }

  if (armorSelect.value == "Mark XX") {
    imgMark.src = "./assets/MarkXX.png";
    title.innerText = "MARK XX";
    paragraph.innerText =
      "Armadura Python (Mark XX), projetada para operações furtivas, equipada com sistemas avançados de camuflagem e voo silencioso para infiltrações discretas.";
  }

  if (armorSelect.value == "Mark XXII") {
    imgMark.src = "./assets/MarkXXII.png";
    title.innerText = "MARK XXII";
    paragraph.innerText =
      "Armadura Hotrod (Mark XXII), versão estilizada com pintura inspirada em carros esportivos, equipada com sistemas de voo ágil e arsenal padrão de combate.";
  }

  if (armorSelect.value == "Mark XXIV") {
    imgMark.src = "./assets/MarkXXIV.png";
    title.innerText = "MARK XXIV";
    paragraph.innerText =
      "Armadura Tank (Mark XXIV), projetada para resistência máxima, com blindagem pesada e sistemas defensivos robustos para combates de alta intensidade.";
  }

  if (armorSelect.value == "Mark XLII") {
    imgMark.src = "./assets/MarkXLII.png";
    title.innerText = "MARK XLII";
    paragraph.innerText =
      "Armadura Mark XLII, equipada com sistema de montagem remota e controle por comando mental, permitindo que as peças se unam automaticamente ao corpo de Tony Stark.";
  }

  if (armorSelect.value == "Mark XLIV") {
    imgMark.src = "./assets/MarkXLIV.png";
    title.innerText = "MARK XLIV";
    paragraph.innerText =
      "Armadura Hulkbuster (Mark XLIV), projetada para enfrentar ameaças de grande escala, com blindagem massiva, força extrema e sistemas de contenção avançados.";
  }

  if (armorSelect.value == "Mark L") {
    imgMark.src = "./assets/MarkL.png";
    title.innerText = "MARK L";
    paragraph.innerText =
      "Feita de nanotecnologia, capaz de se materializar instantaneamente no corpo de Tony Stark e se adaptar em tempo real com armas e ferramentas variadas.";
  }

  if (armorSelect.value == "Endo-Sym") {
    containerArmor.style.display = "none";
    imgMark.src = "./assets/Endo-Sym.png";
    title.innerText = "ENDO-SYM";
    paragraph.innerText =
      "Armadura biotecnológica de metal líquido, controlada pela mente e capaz de se adaptar e regenerar em tempo real.";
  }
}

function JarvisArmor() {
  if (containerArmor.style.display === "block") {
    containerArmor.style.display = "none";
  } else {
    containerArmor.style.display = "block";
  }
}

function stopSound() {
  if (imgSound.src.includes("volume-up.png")) {
    soundAudio.muted = true;
    imgSound.src = "./assets/volume.png";
  } else {
    soundAudio.muted = false;
    imgSound.src = "./assets/volume-up.png";
  }
}

window.addEventListener(
  "click",
  () => {
    soundAudio.play();
  },
  { once: true },
);
