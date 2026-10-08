
var botao = document.getElementById("botao-tema");
var escuro = false;

botao.onclick = function() {
    if (escuro == false) {
        document.body.style.backgroundColor = "#181818";
        document.body.style.color = "white";

        document.querySelector(".header").style.backgroundColor = "#222222";
        document.querySelector(".banner").style.backgroundColor = "#181818";
        document.querySelector(".produtos").style.backgroundColor = "#222222";
        document.querySelector(".escolher").style.backgroundColor = "#181818";
        document.querySelector("footer").style.backgroundColor = "#222222";
        document.querySelector(".copyright").style.backgroundColor = "#222222";

        var produtos = document.querySelectorAll(".produto");

        for (var i = 0; i < produtos.length; i++) {
            produtos[i].style.backgroundColor = "#222222";
            produtos[i].style.color = "white";
        }

        var menu = document.querySelectorAll(".menu a");

        for (var i = 0; i < menu.length; i++) {
            menu[i].style.color = "white";
        }

        var links = document.querySelectorAll(".footer-coluna a");

        for (var i = 0; i < links.length; i++) {
            links[i].style.color = "white";
        }

        botao.innerHTML = "☀️";
        botao.style.backgroundColor = "#222222";
        escuro = true;
    } else {
        document.body.style.backgroundColor = "#f8f2e9";
        document.body.style.color = "#171713";

        document.querySelector(".header").style.backgroundColor = "#faf5ed";
        document.querySelector(".banner").style.backgroundColor = "#f7f0e6";
        document.querySelector(".produtos").style.backgroundColor = "#fbf6ef";
        document.querySelector(".escolher").style.backgroundColor = "#f7f0e6";
        document.querySelector("footer").style.backgroundColor = "#faf5ed";
        document.querySelector(".copyright").style.backgroundColor = "#faf5ed";

        var produtos = document.querySelectorAll(".produto");

        for (var i = 0; i < produtos.length; i++) {
            produtos[i].style.backgroundColor = "#fbf6ef";
            produtos[i].style.color = "#171713";
        }

        var menu = document.querySelectorAll(".menu a");

        for (var i = 0; i < menu.length; i++) {
            menu[i].style.color = "#111";
        }

        var links = document.querySelectorAll(".footer-coluna a");

        for (var i = 0; i < links.length; i++) {
            links[i].style.color = "#222";
        }

        botao.innerHTML = "🌙";
        botao.style.backgroundColor = "#faf5ed";
        escuro = false;
    }
};
