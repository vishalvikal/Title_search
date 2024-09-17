form = document.getElementById("searchForm");
Result = document.getElementById("ResultContainer")
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let Title= document.getElementById("exampleInputTitle").value 
    document.getElementById("exampleInputTitle").value = ""
    console.log(Title);
    fetch("http://localhost:3000/api/search",
        {
            method: "POST",
            body: JSON
            .stringify
            ({
              Title:Title
            }),
            headers: {
              "Content-type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((json) => createCard(json));
  })
function createCard(jsonResponse){
   
    if (!jsonResponse) {
        return
    }

    jsonResponse.map((value, index,arr)=>{
        var mainDiv = document.createElement('div');
        mainDiv.className = "card"
        mainDiv.style='width: 18rem';
        var innerDiv = document.createElement('div');
        innerDiv.className = "card-body";
        var cardTitle = document.createElement('h5');
        
        cardTitle.className = "card-title"
        cardTitle.innerText = value.title;
        var cardText = document.createElement('p');
        cardText.className = "card-text"
        cardText.innerText ="Some quick example text to build on the card title and make up the bulk of the card's content."
        
        mainDiv.appendChild(innerDiv)
        innerDiv.appendChild(cardTitle)
        innerDiv.appendChild(cardText);
        Result.appendChild(mainDiv)

        return value
    })
}
console.log("clicked");