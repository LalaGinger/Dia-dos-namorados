const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Lista de GIFs para alternar ao clicar no Yes
const gifs = [
    "https://media4.giphy.com/media/3IssNhLo1hCEnRhgZP/giphy.webp?cid=790b76110uctutpxzz35gwdhvpultpw6f7gt332b65dwrl0p&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    "https://media1.giphy.com/media/KmxmoHUGPDjfQXqGgv/200.webp?cid=ecf05e47w3fmqqcvkjxgh04adro56b9oboalik6t787888b6&ep=v1_gifs_search&rid=200.webp&ct=g",
    "https://media4.giphy.com/media/42YlR8u9gV5Cw/giphy.webp?cid=ecf05e47w2pkpriydo128go1e311m0zhiyb4t0r5o8pauwuj&ep=v1_gifs_search&rid=giphy.webp&ct=g"
];

// Quando clicar no botão Yes
yesBtn.addEventListener("click", () => {
    question.innerHTML = "YAaah, U my sweet now!💖";
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    gif.src = randomGif; // Corrigido o nome da variável
});

// Quando passar o mouse no botão No, ele se move
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Limites para o botão não sair da tela
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX); // Corrigido erro de digitação
    const randomY = Math.floor(Math.random() * maxY); // Corrigido erro de digitação

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});