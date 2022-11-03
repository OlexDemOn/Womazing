const sortButtons = document.querySelector(".sort-buttons");
const magazineSlides = document.querySelector(".magazine__slides")
const paginationItem = document.querySelector(".magazine__pagination");
const magazineText = document.getElementsByClassName("magazine__subtitle_text");
let maxItems = magazineItems.length;
var sortId;

for (item of sortButtons.children) {
    if (item.children[0].classList.contains("sort-button_active")) {
        sortId = item.children[0].id.toString().slice(-1);
        break;
    }
}
if (sortId != 0) {
    let counter = 0;
    for (item of magazineItems) {
        if (item.sortId == sortId) {
            counter++;
        }
    }
    maxItems = counter;
}
console.log(maxItems);
for (let i = 1; i <= maxItems / 9 + 1; i++) {
    paginationItem.innerHTML += `<div id="magazine__pagination-button${i}" class="magazine__pagination-button">${i}</div>`;
}

paginationItem.children[0].classList.add("magazine__pagination-button_active");

paginationItem.addEventListener("click", event => {
    if (event.target.classList.contains("magazine__pagination-button")) {
        for (item of paginationItem.children) {
            item.classList.remove("magazine__pagination-button_active");
        }
        event.target.classList.add("magazine__pagination-button_active");
        pagination(Number(event.target.id.toString().slice(-1)) * 9, maxItems, sortId);
    }
})

pagination(9, maxItems, sortId);

function pagination(page, maxItems, id) {
    deleteall();
    let lastItem;
    if (page > maxItems) {
        lastItem = maxItems;
    } else {
        lastItem = page
    }
    let j = 0;
    magazineText[0].innerHTML = `Показано: ${lastItem - page + 9} из ${maxItems} товаров`;
    magazineText[1].innerHTML = `Показано: ${lastItem - page + 9} из ${maxItems} товаров`;
    for (let i = page - 9; i < lastItem; i++) {
        if (id == 0) {
            magazineSlides.innerHTML += `
            <a href="oneItem.html" onClick="buyItem(${i})">
                <div class="collection-container__slide">
                    <div class="collection-container__image"><img src="${magazineItems[i].img}" alt="cover"></div>
                    <p class="collection-container__image_name">${magazineItems[i].name}</p>
                    <p class="collection-container__image_price"><span class="collection-container__image_price">${magazineItems[i].discount}</span> $${magazineItems[i].price}</p>
                </div>
            </a>`;
        } else {
            for (; j < magazineItems.length; j++) {
                if (magazineItems[j].sortId == id) {
                    console.log(j);
                    magazineSlides.innerHTML += `
                    <a href="oneItem.html" onClick="buyItem(${j})">
                        <div class="collection-container__slide">
                            <div class="collection-container__image"><img src="${magazineItems[j].img}" alt="cover"></div>
                            <p class="collection-container__image_name">${magazineItems[j].name}</p>
                            <p class="collection-container__image_price"><span class="collection-container__image_price">${magazineItems[j].discount}</span> $${magazineItems[j].price}</p>
                        </div>
                    </a>`;
                    j++;
                    break;
                }
            }
            if (j > magazineItems.length) {

                break;
            }
        }
    }
}

function deleteall() {
    let length = magazineSlides.children.length;
    for (let i = 0; i < length; i++) {
        magazineSlides.children[0].remove();
    }
}

