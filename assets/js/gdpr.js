//Detect region from IP address and track if not from Europe 
$.getJSON('https://json.geoiplookup.io/api?callback=?', function(data) {
			// console.log(JSON.stringify(data, null, 2));
			$.getJSON('https://gpdr.geoiplookup.io/'+data.ip, function(d2){
				// console.log(d2);
				if(d2.gdpr !== "true"){
					// console.log("tracking gtag");
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'UA-123908964-1');
				}
			});
		});