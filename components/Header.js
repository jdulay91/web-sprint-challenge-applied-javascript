// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    //element creator
    const outerHeader = document.createElement('div');
    const spanCreator = document.createElement('span');
    const h1Creator = document.createElement('h1');
    const spanCreator2 = document.createElement('span')

    //class creator
    outerHeader.classList.add('header');
    spanCreator.classList.add('date');
    spanCreator2.classList.add('temp');

    //text
    spanCreator.textContent = 'MARCH 28, 2020';
    h1Creator.textContent = 'Lambda Times';
    spanCreator2.textContent = '98°'

    //makingStructure
    outerHeader.appendChild(spanCreator)
    outerHeader.appendChild(h1Creator)
    outerHeader.appendChild(spanCreator2)

    //domTargetter and appending
    const divHeaderContainer = document.querySelector('.header-container');
    divHeaderContainer.appendChild(outerHeader);    
}

Header();
