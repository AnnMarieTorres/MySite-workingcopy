function validate(form){
      fail = validatefname(email.fname.value)
      fail += validatelname(email.lname.value)
      fail += validateemail(email.email.value)
      fail += validatemessage(email.message.value)
      
      if(fail=="") return true
      else{
        alert(fail);
        return false
      }
    }
    function validatefname(field){
      return (field=="") ? "Please enter your First Name.\n" : "";
    }
    function validatelname(field){
      return (field=="") ? "Please enter your Last Name.\n" : "";
    }
    function validateemail(field){
      return (field=="") ? "Please enter your Email.\n" : "";
    }
    function validatemessage(field){
      return (field=="") ? "Please enter your Message.\n" : "";
    }
    