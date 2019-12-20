jQuery(document).ready(function($) {

	// hide messages 
	$("#error").hide();
	$("#success").hide();
	
	// on submit...
	$("#contactForm #submit").click(function() {
		$("#error").hide();
		
		//required:
		
		//name
		var name = $("input#name").val();
		if(name == ""){
			$("#error").fadeIn().text("Full names required.");
			$("input#name").focus();
			return false;
		}
		if(name == "Fullname"){
			$("#error").fadeIn().text("Full names required.");
			$("input#name").focus();
			return false;
		}
		
		
		
		
		// email
		var email = $("input#email").val();
		if(email == ""){
			$("#error").fadeIn().text("Email address required");
			$("input#email").focus();
			return false;
		}
		if(email == "Email"){
			$("#error").fadeIn().text("Email address required");
			$("input#email").focus();
			return false;
		}
		
		
		
		
		
		// tel
		var tel = $("input#tel").val();
		if(tel == ""){
			$("#error").fadeIn().text("Telephone Number required");
			$("input#tel").focus();
			return false;
		}
		if(tel == "Telephone"){
			$("#error").fadeIn().text("Telephone Number required");
			$("input#tel").focus();
			return false;
		}
		
		
		
		// comments
		var comments = $("#comments").val();
		if(comments == ""){
			$("#error").fadeIn().text("Telephone Number required");
			$("input#comments").focus();
			return false;
		}
		if(comments == "Message"){
			$("#error").fadeIn().text("Telephone Number required");
			$("input#comments").focus();
			return false;
		}
		
		// send mail php
		var sendMailUrl = $("#sendMailUrl").val();
		
		//to, from & subject
		var to = $("#to").val();
		var from = $("#from").val();
		var subject = $("#subject").val();
		
		// data string
		var dataString = 'name='+ name
						+ '&email=' + email        
						+ '&tel=' + tel
						+ '&comments=' + comments
						+ '&to=' + to
						+ '&from=' + from
						+ '&subject=' + subject;						         
		// ajax
		$.ajax({
			type:"POST",
			url: sendMailUrl,
			data: dataString,
			success: success()
		});
	});  
		
		
	// on success...
	 function success(){
	 	$("#success").fadeIn();
	 	$("#contactForm").fadeOut();
	 }
	
    return false;
});

