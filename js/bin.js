"use strict";

const btn = document.querySelector("#one-item__form");
const radioButtonsSize = document.querySelectorAll('input[name="size"]');
const radioButtonsColor = document.querySelectorAll('input[name="color"]');
const inputCount = document.querySelector('input[name="count"]');
const inputChangeCount = document.querySelector('.one-item__addItem_input');

inputChangeCount.addEventListener("click", event=>{
    console.log(event.target);
    if (event.target.classList.contains('one-item__addItem_plusItem')) {
        inputCount.value++;
    }
    else if (event.target.classList.contains('one-item__addItem_minusItem')) {
        inputCount.value--;

    }
});
const dataItem = !localStorage.getItem("cart") ? [] : JSON.parse(localStorage.getItem("cart"));

btn.addEventListener("click", () => {
    let selectedSize, selectedColor;
    for (const radioButton of radioButtonsSize) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }
    for (const radioButton of radioButtonsColor) {
        if (radioButton.checked) {
            selectedColor = radioButton.value;
            break;
        }
    }
    const currentItem = {
        id: Itemid,
        size: selectedSize,
        color: selectedColor,
        count: Number(inputCount.value),
    }
    let canPush = true;
    if (dataItem.length !== 0){
        for (let item of dataItem) {
            if (item.id === currentItem.id && item.size === currentItem.size && item.color === currentItem.color) {
                console.log(item);
                console.log(currentItem);
                item.count += Number(inputCount.value);
                canPush = false;
                break;
            }
        }
    }
    if (canPush) {
        dataItem.push(currentItem);
    }
    localStorage.setItem('cart', JSON.stringify(dataItem));


});












