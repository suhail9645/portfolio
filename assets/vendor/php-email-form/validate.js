/**
* PHP Email Form Validation - v3.5
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
function forvalidate(){
  var name=document.submit.name.value;
  var email=document.submit.email.value;
  var subject=document.submit.subject.value;
  var message=document.submit.message.value; 
  var regex=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gm;
 var err=document.getElementById("error-sen");
  
 if(name==""){
     err.innerHTML='The Name is Empty'
     
     return false;
}
if(name.length<5){
 err.innerHTML='Name Should Contain five Elements Please Include Fullname';
     return false;
}
if(email=="")
{
 err.innerHTML='Email is Empty';
     return false;
}  
if(regex.test(email)==false){
 err.innerHTML='Invalid Email'
 return false
}
if(subject.length<5){
 err.innerHTML='Should Contain 5 Elements';
 return false
} 
if(message.length<10){
 err.innerHTML='Should Contain 10 Words';
 return false
} 
if(message.length>100){
 err.innerHTML='Exceeds Limit';
 return false
} 
return true;

}