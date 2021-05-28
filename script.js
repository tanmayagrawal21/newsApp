var newsQuery= document.getElementById("text-query");
var searchButton= document.getElementById("search-button")



// Defaults News Query
search("latest news");
//-----------------------
searchButton.addEventListener("click", function(){
    var value= newsQuery.value;
    console.log(value);
    search(value);
})

newsQuery.addEventListener("keyup", function(e){
    var value= newsQuery.value;
    if(e.which==13){
        console.log(value);
        search(value);
    }
})


function pushToDOM(value){
    var response= JSON.parse(value).response.results;
    console.log(response);
    var cur=0;
    var resultsPage= document.getElementById("news-results");
    resultsPage.innerHTML="";

    response.forEach(function(newsItem){
        resultsPage.innerHTML+="<p class=\"news-item\">"+newsItem.webTitle+"</p>"
    })
    /*
    var moreButton= document.getElementById("more-button");
    moreButton.addEventListener('click',function(){

    })
    */
}


function search(query){
    var url="https://content.guardianapis.com/search?q="+query+"&api-key=c22584e0-996a-46fb-bf9f-0c0d0fd9d619";


    //AJAX Request
    var NewsAJAXCall= new XMLHttpRequest();
    NewsAJAXCall.open('GET', url );
    NewsAJAXCall.send();

    NewsAJAXCall.addEventListener('load', function(rawNews){
        var response=rawNews.currentTarget.responseText;
        pushToDOM(response);
    })
}