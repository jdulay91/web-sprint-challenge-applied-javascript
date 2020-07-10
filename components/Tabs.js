// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios
.get(' https://lambda-times-backend.herokuapp.com/topics')
.then(res =>{
     
    const dataARR = res.data.topics    
    dataARR.forEach(data => {
        const divTabCreation = document.createElement('div');
        divTabCreation.classList.add('tab');
        divTabCreation.textContent = data;
        divTabTargetter.appendChild(divTabCreation);        
    });

    const tabTarget = document.querySelectorAll('.tab')
    // tabTarget[0].id ='javascriptTab'
    // tabTarget[1].id = 'bootstrapTab'
    // tabTarget[2].id = 'technologyTab'
    // tabTarget[3].id = 'jqueryTab'
    // tabTarget[4].id = 'nodeTab'
    tabTarget[0].addEventListener('click',()=>{
        const allCardsArray = Array.from(document.getElementsByClassName('card'))
        for(let i=0 ; i<allCardsArray.length; i++){
            if (allCardsArray[i].classList.contains('javascriptStretch')){
            }else{
                allCardsArray[i].style.display = 'none'
            }
        }
        
    })
    tabTarget[1].addEventListener('click',()=>{
        const allCardsArray = Array.from(document.getElementsByClassName('card'))
        for(let i=0 ; i<allCardsArray.length; i++){
            if (allCardsArray[i].classList.contains('bootStrapStretch')){
            }else{
                allCardsArray[i].style.display = 'none'
            }
        }
        
    }) 
    tabTarget[2].addEventListener('click',()=>{
        const allCardsArray = Array.from(document.getElementsByClassName('card'))
        for(let i=0 ; i<allCardsArray.length; i++){
            if (allCardsArray[i].classList.contains('technologyStretch')){
            }else{
                allCardsArray[i].style.display = 'none'
            }
        }
        
    }) 
    tabTarget[3].addEventListener('click',()=>{
        const allCardsArray = Array.from(document.getElementsByClassName('card'))
        for(let i=0 ; i<allCardsArray.length; i++){
            if (allCardsArray[i].classList.contains('jqueryStretch')){
            }else{
                allCardsArray[i].style.display = 'none'
            }
        }
        
    }) 
    tabTarget[4].addEventListener('click',()=>{
        const allCardsArray = Array.from(document.getElementsByClassName('card'))
        for(let i=0 ; i<allCardsArray.length; i++){
            if (allCardsArray[i].classList.contains('nodeStretch')){
            }else{
                allCardsArray[i].style.display = 'none'
            }
        }
        
    }) 
     
    
    
})
.catch(err => {
    console.log(err)
})

const divTabTargetter = document.querySelector('.topics')

const bootStrapClass = document.getElementsByClassName('bootStrapStretch')
const javaScriptClass = document.getElementsByClassName('javascriptStretch')
const technologyClass = document.getElementsByClassName('technologyStretch')
const nodeClass = document.getElementsByClassName('nodeStretch')
const jqueryClass = document.getElementsByClassName('jqueryStretch')
