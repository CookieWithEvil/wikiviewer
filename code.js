$("#search-submit").click(function(){
   var item = $("#search-item").val();
   var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+item+"&format=json&callback=?";
   
   $.ajax({type:"GET", url: url, async: false, dataType:"json",
           success: function(data){
              for(var i = 0; i<data[1].length; i++){
              $('#results').append("<a href="+data[3][i]+" target='_block'><li><h2>"+data[1][i]+"</h2><p>"+data[2][i]+"</p></li></a>");
              }            
           },
           error: function(errorMessage){
              alert("Error");
           }
   })
});
function clearResults(){
   var x = document.getElementById("search-item");
   if(x.value === ""){
      document.getElementById("results").innerHTML = x.value;
   }
}