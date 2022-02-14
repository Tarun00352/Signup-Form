	 function registration()
	 {

	 	var fullname= document.getElementById("t1").value;
	 	var email_id= document.getElementById("t2").value;
	 	var user_name= document.getElementById("t3").value;
	 	var password= document.getElementById("t4").value;			
	 	var cpwd= document.getElementById("t5").value;

	        //email id expression code
	        var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
	        var letters = /^[A-Za-z]+$/;
	        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	        if(fullname=='')
	        {
	        	alert('Please enter your full name');
	        }
	        else if(!letters.test(fullname))
	        {
	        	alert('Name field required only alphabet characters');
	        }
	        else if(email_id=='')
	        {
	        	alert('Please enter your user email id');
	        }
	        else if (!filter.test(email_id))
	        {
	        	alert('Please Enter Valid Email');
	        }
	        else if(user_name=='')
	        {
	        	alert('Please enter the user name.');
	        }
	        else if(!letters.test(user_name))
	        {
	        	alert('User name field required only alphabet characters');
	        }
	        else if(password=='')
	        {
	        	alert('Please enter Password');
	        }
	        else if(cpwd=='')
	        {
	        	alert('Please Enter Confirm Password');
	        }
	        else if(!pwd_expression.test(password))
	        {
	        	alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
	        }
	        else if(password != cpwd)
	        {
	        	alert ('Password not Matched');
	        }
	        else if(document.getElementById("t5").value.length < 6)
	        {
	        	alert ('Password minimum length should be 6');
	        }
	        else if(document.getElementById("t5").value.length > 12)
	        {
	        	alert ('Password max length should be 12');
	        }
	        else
	        {				                            
	        	alert('Thank You for Signup & You are Redirecting to LueurTech Software Solutions Website');
	        	 window.location = "https://lueurtech.com/";
				 
				}
			}
			function clearFunc()
			{
				document.getElementById("t1").value="";
				document.getElementById("t2").value="";
				document.getElementById("t3").value="";
				document.getElementById("t4").value="";
				document.getElementById("t5").value="";
			}