var app = {

getnews: function() {
					var error;					
						var content = '';
						var imageRef = '';
						var imageRef1 = '';
						var textContent = '';
						var pubDate = '';
						var dateString = '';
						var author = '';
						var source = '';
						var url = 'https://newsapi.org/v2/top-headlines?sources=axios&apiKey=b7ccb901b71f4c388c1d403222b10910'; // Get top headlines
						
// var url = 'https://newsapi.org/v2/everything?' +
          'q=midterms&' +
          'from=2018-10-18&' +
          'sortBy=popularity&' +
          'apiKey=b7ccb901b71f4c388c1d403222b10910';
          
						fetch(url)
						.then((resp) => resp.json()) // Transform the data into Json
						.then(function(data) {
							console.log(data);
							for(var i=0; i<data.articles.length; ++i){
									// content += '<p><a href=\"' + data.articles[i].url + '\">' + data.articles[i].title + '</a><br><img src=\"' + data.articles[i].urlToImage + ' width=600 border=0\"> <br>Published: ' + data.articles[i].publishedAt + '<br>' + data.articles[i].content + '</p>'
									
									if(data.articles[i].source.name !== null){
									source=data.articles[i].source.name;
									}else{
									source = '';
									}
									if(data.articles[i].content !== null){
									textContent=data.articles[i].content;
									}else{
									textContent = '';
									}
									if(data.articles[i].author !== null){
									author=data.articles[i].author;
									}else{
									author = '';
									}
									if(data.articles[i].urlToImage !== null){
									imageRef='<img src=\"' + data.articles[i].urlToImage + '\" style=\"width:256px;padding:10px;float:left\" border=0\">';
									}else{
									imageRef='';
									}
									
									pubDate = new Date(data.articles[i].publishedAt);
									dateString = pubDate.toDateString();
									content += '<p style=\'margin-left:20px;>' + imageRef + '<a href=\"' + data.articles[i].url + '\" style=\"font-color:white\">' + data.articles[i].title + '</a><br><br>' + textContent + '<br><span>' + author + ' - ' + source +' - ' + dateString + '</span>' + imageRef1 + '</p>';
									
} ;
var output = document.getElementById("news");
output.innerHTML = content;
							})
							.catch(function(error) {
								console.log(error);
							});
  
					}
};

app.getnews();
