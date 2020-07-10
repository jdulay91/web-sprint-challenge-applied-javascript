// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then( res =>{    
    // const megaArray = [res.data.articles.bootstrap,res.data.articles.javascript,res.data.articles.jquery,res.data.articles.node,res.data.articles.technology]
    // megaArray.forEach(array=>{
    //     array.forEach(element=>{
    //         articleMaker(element)
    //     })
    // })
    const bootStrapArray = res.data.articles.bootstrap    
    bootStrapArray.forEach(element => {
        articleMaker(element,'bootStrapStretch')
    });
    
    const javascriptArray = res.data.articles.javascript
    javascriptArray.forEach(element => {
        articleMaker(element,'javascriptStretch')
    });

    const jqueryArray = res.data.articles.jquery;
    jqueryArray.forEach(element=>{
        articleMaker(element,'jqueryStretch')
    })

    const nodeArray = res.data.articles.node
    nodeArray.forEach(element=>{
        articleMaker(element,'nodeStretch')
    })

    const technologyArray = res.data.articles.technology
    technologyArray.forEach(element=>{
        articleMaker(element,'technologyStretch')
    })


})
.catch(err=>{
    console.log(err)
})

const articleMaker= (dataObject,stretchClass) => {
    
    //element Creation
    const outerDiv = document.createElement('div');
    const firstChildDiv = document.createElement('div');
    const secondChildDiv = document.createElement('div');
    const firstGrandChildDiv = document.createElement('div');
    const imageOfAuthor = document.createElement('img');
    const spanAuthor = document.createElement('span');

    //class
    outerDiv.classList.add('card');
    outerDiv.classList.add(stretchClass)    
    firstChildDiv.classList.add('headline');
    secondChildDiv.classList.add('author')
    firstGrandChildDiv.classList.add('img-container')
    imageOfAuthor.setAttribute('src',dataObject.authorPhoto)

    //textContent
    firstChildDiv.textContent = dataObject.headline;
    spanAuthor.textContent = `By ${dataObject.authorName}`

    //structure
    outerDiv.appendChild(firstChildDiv)
    outerDiv.appendChild(secondChildDiv)
    secondChildDiv.appendChild(firstGrandChildDiv)
    firstGrandChildDiv.appendChild(imageOfAuthor)
    secondChildDiv.appendChild(spanAuthor)

    outerDiv.addEventListener('click', () =>{
        console.log(dataObject.headline)
    })

    //appending
    const divCardContainer = document.querySelector('.cards-container')
    divCardContainer.appendChild(outerDiv)    
}

//stretch






// javascriptTab
// bootstrapTab
// technologyTab
// jqueryTab
// nodeTab