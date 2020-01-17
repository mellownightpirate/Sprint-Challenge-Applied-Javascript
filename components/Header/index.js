// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

// 1. Select the main node/element

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());

function Header(data) {

// 2. Create elements

    const headerDiv = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

// 3. Append child elements

    headerDiv.appendChild(date);
    headerDiv.appendChild(title);
    headerDiv.appendChild(temp);

// 4. Add CSS styles

    headerDiv.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

// 5. Add content
date.textContent = "JANUARY 17, 2020";
title.textContent = "Lambda Times";
temp.textContent = "11°";

    return headerDiv;
};
