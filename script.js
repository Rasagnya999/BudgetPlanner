function validate() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value
    const mobile = document.getElementById("mobile").value;
    const message = document.getElementById("message").value;
    
    
    const nameError = document.getElementById("nameError");
    const mobileError = document.getElementById("mobileError");
    const emailError = document.getElementById("emailError");
    

    
    let nameStatus = mobileStatus = emailStatus = messageStatus= false;
    
    const alphaExp = /^[a-zA-Z]+$/;
    const numExp = /^[0-9]+$/;
    const emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    

    //Name Validation
    if(username === "") {
        nameError.innerHTML = "Please Enter Name";
    } else {
        if (username.match(alphaExp)){
            nameError.innerHTML = "";
            nameStatus = true;
        } else {
            nameError.innerHTML = "Only Characters";
        }
    }
    
    //Mobile validation
    if (mobile === ""){
        mobileError.innerHTML = "Please Enter Mobile Number";
    } else {
        if(mobile.match(numExp)){
            if(mobile.length === 10){
                mobileError.innerHTML = "";
                mobileStatus = true;
            }
           else{
            mobileError.innerHTML = "10 Digits Mobile Number";
           
           }
           
        }
        else {
            mobileError.innerHTML = "Only Digits"
        }
    }
    
    //E-Mail validation
    if(email === "") {
        emailError.innerHTML = "Please Enter E-mail address";
    } else {
        if (email.match(emailExp)){
            emailError.innerHTML = "";
            emailStatus = true;
        } else {
            emailError.innerHTML = "Enter Valid Email I'd";
        }
    }
    
    ///Message validation
    if(message === "") {
        messageError.innerHTML = "Please Enter Message";
    } else {
        if (message){
            messageError.innerHTML = "";
            messageStatus = true;
        } else {
            messageError.innerHTML = "true";
        }
    }
    
    
    
    
    
    //Return validation
    if (nameStatus && mobileStatus && emailStatus && messageStatus){
        return true;
    } else {
        return false;
    }
}

function loginvalidate() {
    var phoneInput = document.getElementById('phoneInput').value;
    var phoneError = document.getElementById('phoneError');
    var numExp = /^[0-9]+$/; 
    var phoneStatus = false;
    
    if (phoneInput === "") {
      phoneError.innerHTML = "Please Enter Mobile Number";
    } else {
      if (phoneInput.match(numExp)) {
        if (phoneInput.length === 10) {
          phoneError.innerHTML = "";
          phoneStatus = true;
        } else {
          phoneError.innerHTML = "10 Digits Mobile Number";
        }
      } else {
        phoneError.innerHTML = "Only Digits";
      }
    }
    
    return phoneStatus; 
  }

  function login1validate() {
    var phoneInput1 = document.getElementById('phoneInput1').value;
    var phoneError1 = document.getElementById('phoneError1');
    var numExp = /^[0-9]+$/; 
    var phoneStatus1 = false;
    
    if (phoneInput1 === "") {
      phoneError1.innerHTML = "Please Enter Mobile Number";
    } else {
      if (phoneInput1.match(numExp)) {
        if (phoneInput1.length === 10) {
          phoneError1.innerHTML = "";
          phoneStatus1 = true;
        } else {
          phoneError1.innerHTML = "10 Digits Mobile Number";
        }
      } else {
        phoneError1.innerHTML = "Only Digits";
      }
    }
    
    return phoneStatus1; 
  }
  
  
  function login2validate() {
    var phoneInput2 = document.getElementById('phoneInput2').value;
    var phoneError2 = document.getElementById('phoneError2');
    var numExp = /^[0-9]+$/; 
    var phoneStatus2 = false;
    
    if (phoneInput2 === "") {
      phoneError2.innerHTML = "Please Enter Mobile Number";
    } else {
      if (phoneInput2.match(numExp)) {
        if (phoneInput2.length === 10) {
          phoneError2.innerHTML = "";
          phoneStatus2 = true;
        } else {
          phoneError2.innerHTML = "10 Digits Mobile Number";
        }
      } else {
        phoneError2.innerHTML = "Only Digits";
      }
    }
    
    return phoneStatus2; 
  }

  function login3validate() {
    var phoneInput3 = document.getElementById('phoneInput3').value;
    var phoneError3 = document.getElementById('phoneError3');
    var numExp = /^[0-9]+$/; 
    var phoneStatus3 = false;
    
    if (phoneInput3 === "") {
      phoneError3.innerHTML = "Please Enter Mobile Number";
    } else {
      if (phoneInput3.match(numExp)) {
        if (phoneInput3.length === 10) {
          phoneError3.innerHTML = "";
          phoneStatus3 = true;
        } else {
          phoneError3.innerHTML = "10 Digits Mobile Number";
        }
      } else {
        phoneError3.innerHTML = "Only Digits";
      }
    }
    
    return phoneStatus3; 
  }




    

  