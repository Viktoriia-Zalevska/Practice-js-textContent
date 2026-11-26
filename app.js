"use strict";

/*
 * Віджет вільних слотів SmileCare показує заглушки, поки скрипт не заповнить його.
 * 1. Знайди заголовок за класом .widget-title і виведи його поточний текст у консоль.
 * 2. Зміни текст заголовка на "Available slots today".
 * 3. Знайди лічильник за класом .slots-count і зміни його текст на "5".
 */

// Твій код тут
const widgetTitle = document.querySelector(".widget-title");
console.log(widgetTitle.textContent);
widgetTitle.textContent = "Available slots today";
const slotsCount = document.querySelector(".slots-count");
console.log(slotsCount.textContent);
slotsCount.textContent = "5";
