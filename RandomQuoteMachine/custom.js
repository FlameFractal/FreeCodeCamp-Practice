$('#body').css('background',"#000 url('https://unsplash.it/1920/1080/?random&pseudoParam="+new Date().getTime()+"') no-repeat");

	$("#getQuote").on("click", function() {
		$("#getQuote")[0].innerText="Crunching...";
	  $.ajax({
	    headers: {
	      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
	      Accept: "application/json",
	      "Content-Type": "application/x-www-form-urlencoded"
	    },
	    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
	    success: function(response) {
	        var r = JSON.parse(response);
	        currentQuote = r.quote;
	        currentAuthor = r.author;
	        $("#quoteText").html(r.quote);
	        $("#quoteAuthor").html("- "+r.author+".");
	     	$("#getQuote")[0].innerHTML="<span class='fa fa-info'></span> Get Quote!";
	     	$('#body').css('background',"#000 url('https://unsplash.it/1920/1080/?random&pseudoParam="+new Date().getTime()+"') no-repeat");
	     	$('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + currentQuote + '" - ' + currentAuthor+' @vishal_gauba'));
	     }
	  });
	});
	

