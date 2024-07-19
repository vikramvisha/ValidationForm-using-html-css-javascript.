function validationform(){
    var Firstname=document.validateform.Firstname.value;
    var Lastname=document.validateform.Lastname.value;
    var City=document.validateform.City.value;
    var Phonenumber =document.validateform.Phonenumber.value;
    var Address=document.validateform.Address.value;
    var password=document.validateform.password.value;
    if(Firstname == null || Firstname == ""){
       alert("name should not be blank");
       return false;
    }
    else if(password.length<6){
       alert("password length atleast be 6 character long");
       return false;
    }
    
    }
   
   