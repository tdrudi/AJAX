const $showGif = $("#showGif");
const $searchInput = $("#search");

//Add a Gif
function addGif(results){
    let numResults = results.data.length;
    if(numResults){
        let randomIndex = Math.floor(Math.random() * numResults);
        //create new 
        let $newGif = $("<img>", {src: results.data[randomIndex].images.original.url});
        $showGif.append($newGif);
    }
}

//Form Submission
$("form").on("submit", async function(e){
    e.preventDefault();
    let searchTerm = $searchInput.val();
    $searchInput.val("");
   
    const searchResponse = await axios.get("http://api.giphy.com/v1/gifs/search", 
    {params: {q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
   
    addGif(searchResponse.data);
});


//Remove Gif
$("#remove").on("click", function(){
  $showGif.empty();
});