"use strict";

function buyItem(id) {

    for (let i = 0; i < magazineItems.length; i++) {
        if (magazineItems[i].id == id) {
            localStorage.setItem("Product", magazineItems[i].id);
            break;
        }
    }
}

const itemPrice = document.querySelector(".one-item__price");
const magazineTitle = document.querySelector(".magazine__title_text");
const itemImg = document.querySelector(".one-item__container_img");
const magazineCrumbs = document.querySelector(".magazine__title_crumbs");

let Itemid = localStorage.getItem("Product");

if (magazineTitle){
    magazineTitle.innerHTML = magazineItems[Itemid].name;
}

let typeItem;
let typeItemlink;

if (magazineItems[Itemid].sortId == 1 ) {
    typeItem = "Пальто";
    typeItemlink = "../pages/magazineCoat.html"
} else if (magazineItems[Itemid].sortId == 2) {
    typeItem = "Свитшоты";
    typeItemlink = "../pages/magazineSvitshot.html"
} else if (magazineItems[Itemid].sortId == 3) {
    typeItem = "Кардиганы";
    typeItemlink = "../pages/magazineCardigans.html"
} else if (magazineItems[Itemid].sortId == 4) {
    typeItem = "Толстовки";
    typeItemlink = "../pages/magazineSweatshirts.html"
} else {
    typeItem = "";
    typeItemlink = "#"
}
if (magazineCrumbs){
    magazineCrumbs.innerHTML = `<span><a class="__hover" href="../index.html">Главная</a> - <a class="__hover" href="${typeItemlink}">${typeItem}</a> - </span>${magazineItems[Itemid].name}`;
}
if (itemImg){
    itemImg.innerHTML = ` <img src="${magazineItems[Itemid].img}" alt="cover">`;
    itemPrice.innerHTML += `<div class="one-item__price">$${magazineItems[Itemid].price}</div>`;
}

const Samecards = document.querySelector(".one-item__same_cards");
if (Samecards){
    let j = 0
    for (let i = 0; i < 3; i++) {
        for (; j < magazineItems.length; j++) {
            if ((magazineItems[j].sortId === magazineItems[Itemid].sortId) && (magazineItems[j].id !== magazineItems[Itemid].id)) {
                Samecards.innerHTML += `
    <a href="oneItem.html" onClick="buyItem(${j})">
        <div class="collection-container__slide">
            <div class="collection-container__image"><img src="${magazineItems[j].img}" alt="cover"></div>
            <p class="collection-container__image_name">${magazineItems[j].name}</p>
            <p class="collection-container__image_price"><span class="collection-container__image_price">${magazineItems[j].discount}</span> $${magazineItems[j].price}</p>
        </div>
    </a>
`;
                j++;
                break;
            }
        }
        if (j >= magazineItems.length) {
            break;
        }
    }
}

