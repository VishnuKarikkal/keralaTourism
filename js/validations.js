            // log-In form validation
function validateLogIn()
{
let usernameLogIn = document.getElementById("usernameLogIn");
let passwordLogIn = document.getElementById("passwordLogIn");
                     // must include lower case upper case ,number and @ symbol
let regExUsername = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@])(?!.*\s).{8,}$/ 
//atleast 8 chars, atleast-1 lower case, 1 upper case, 1 number, 1 among[!@#$%&*] and no blank spaces
let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*])(?=.*[0-9])(?!.*\s).{8,}$/

let validateFlagPassword = true;
let validateFlagUsername = true;
                                    // validation 'test'
                                    //username test
if(regExUsername.test(usernameLogIn.value))
{                                   //if test passed
    document.getElementById("usernameHelp").textContent = "Looks Good";
    document.getElementById("usernameHelp").classList.remove('wrong');
    document.getElementById("usernameHelp").classList.remove('text-muted');
    document.getElementById("usernameHelp").classList.add("good");
    validateFlagUsername = true;
}
else
{                                   //if test failed
    document.getElementById("usernameHelp").textContent = "Please Enter a Valid Username";
    document.getElementById("usernameHelp").classList.remove('text-muted');
    document.getElementById("usernameHelp").classList.remove('good');
    document.getElementById("usernameHelp").classList.add('wrong');
    validateFlagUsername = false;
}
                                        // password test
if(regExPassword.test(passwordLogIn.value))
{
    document.getElementById("passwordHelp").textContent = "Looks Good";
    document.getElementById("passwordHelp").classList.remove("wrong");
    document.getElementById("passwordHelp").classList.add("good");
    validateFlagPassword = true;
}
else
{
    document.getElementById("passwordHelp").textContent = "must include atleast 8 characters including lowercase uppercase and any among !@#$%&*";
    document.getElementById("passwordHelp").classList.remove("good");
    document.getElementById("passwordHelp").classList.add("wrong");
    validateFlagPassword = false;
}
            //checking whether all fields passed validation
if(validateFlagUsername && validateFlagPassword)
{
return true;
}
return false;
}
  
            //sign-up validation
function validateSignUp()
{
    //regular expressions
            // example123@ghhd.abc.ilk
let regExEmail = /^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
            // only letters (no space nor special chars)
let regExName = /^([a-zA-Z])+$/
            // let regLastname = /^[a-zA-Z\s]$/
            // must include lower case upper case ,number and @ symbol
let regExUsername = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@])(?!.*\s).{8,}$/
//atleast 8 chars, atleast-1 lower case, 1 upper case, 1 number, 1 among[!@#$%&*] and no blank spaces
let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*])(?=.*[0-9])(?!.*\s).{8,}$/
        //xxx-xxx-xxxx or xxx.xxx.xxxx or xxx xxx xxxx  ->phone number formats
let regExPhoneNum = /^((\d{3})\s(\d{3})\s(\d{4}))|((\d{3})\.(\d{3})\.(\d{4}))|((\d{3})\-(\d{3})\-(\d{4}))$/
            // to check whether any element's validation test failed or not
            // flags are initially set to 'true'
let validateFlag = true;

let textElement = document.getElementById("firstNameText");
                            // first-name validation
if(regExName.test(textElement.value))
{
        document.getElementById("firstNameHelp").textContent = "looks good!";
        document.getElementById("firstNameHelp").classList.remove('wrong');
        document.getElementById("firstNameHelp").classList.add('good');
}
else
{
        document.getElementById("firstNameHelp").textContent = "invalid!";
        document.getElementById("firstNameHelp").classList.remove('good');
        document.getElementById("firstNameHelp").classList.add('wrong');
        validateFlag = false;
}
        
textElement = document.getElementById("lastNameText");
                            // last-name validation
if(regExName.test(textElement.value))
{
        document.getElementById("lastNameHelp").textContent = "looks good!";
        document.getElementById("lastNameHelp").classList.remove('wrong');
        document.getElementById("lastNameHelp").classList.add('good');
}
else
{
        document.getElementById("lastNameHelp").textContent = "invalid!";
        document.getElementById("lastNameHelp").classList.remove('good');
        document.getElementById("lastNameHelp").classList.add('wrong');
        validateFlag = false;
}

textElement = document.getElementById("usernameText");
                //username validation
if(regExUsername.test(textElement.value))
{
       document.getElementById("userNameHelp").textContent = "looks good!";
       document.getElementById("userNameHelp").classList.remove('wrong');
       document.getElementById("userNameHelp").classList.add('good');
}
else
{
      document.getElementById("userNameHelp").textContent = "invalid!";
      document.getElementById("userNameHelp").classList.remove('good');
      document.getElementById("userNameHelp").classList.add('wrong');
      validateFlag = false;
}

textElement = document.getElementById("passwordText");
                        // password validation
if(regExPassword.test(textElement.value))
{
      document.getElementById("passwordHelp").textContent = "looks good!";
      document.getElementById("passwordHelp").classList.remove('wrong');
      document.getElementById("passwordHelp").classList.remove('text-warning');
      document.getElementById("passwordHelp").classList.add('good');
}
else
{
     document.getElementById("passwordHelp").textContent = "invalid!";
     document.getElementById("passwordHelp").classList.remove('good');
     document.getElementById("passwordHelp").classList.remove('text-warning');
     document.getElementById("passwordHelp").classList.add('wrong');
     validateFlag = false;
}

textElement = document.getElementById("phoneText");
                        // phone number validation
if(regExPhoneNum.test(textElement.value))
{
     document.getElementById("phoneHelp").textContent = "looks good!";
     document.getElementById("phoneHelp").classList.remove('wrong');
     document.getElementById("phoneHelp").classList.add('good');
}
else
{
    document.getElementById("phoneHelp").textContent = "invalid!";
    document.getElementById("phoneHelp").classList.remove('good');
    document.getElementById("phoneHelp").classList.add('wrong');
    validateFlag = false;
}

textElement = document.getElementById("emailText");
                        // email validation
if(regExEmail.test(textElement.value))
{
     document.getElementById("emailHelp").textContent = "looks good!";
     document.getElementById("emailHelp").classList.remove('wrong');
     document.getElementById("emailHelp").classList.add('good');
}
else
{
    document.getElementById("emailHelp").textContent = "invalid!";
    document.getElementById("emailHelp").classList.remove('good');
    document.getElementById("emailHelp").classList.add('wrong');
    validateFlag = false;
}

let radioMale = document.getElementById("radioMale");
let radioFemale = document.getElementById("radioFemale");
let radioOther = document.getElementById("radioOther");
                        // whether selected gender
if((radioMale.checked)||(radioFemale.checked)||(radioOther.checked))
{
    document.getElementById("genderHelp").textContent = "hmm..thats Ok!";
    document.getElementById("genderHelp").classList.remove('wrong');
    document.getElementById("genderHelp").classList.add('good');
}
else
{
    document.getElementById("genderHelp").textContent = "please select";
    document.getElementById("genderHelp").classList.remove('good');
    document.getElementById("genderHelp").classList.add('wrong');
    validateFlag = false;
}

textElement = document.getElementById("countryDropdown");
                            // wheteher made country selection
if(textElement.value =="" )
{
    document.getElementById("countryHelp").textContent = "please select"
    document.getElementById("countryHelp").classList.remove('good');
    document.getElementById("countryHelp").classList.add('wrong');
    validateFlag = false;
}
else
{ 
    document.getElementById("countryHelp").textContent = "hmm..thats Ok!"
    document.getElementById("countryHelp").classList.remove('wrong');
    document.getElementById("countryHelp").classList.add('good');
}

textElement = document.getElementById("termsCheck");
                // whether terms and conditions is checked or not
if(textElement.checked)
{
    document.getElementById("termsCheckHelp").textContent = "hmm..thats Ok!"
    document.getElementById("termsCheckHelp").classList.remove('wrong');
    document.getElementById("termsCheckHelp").classList.add('good');
}
else
{
    document.getElementById("termsCheckHelp").textContent = "you must agree before submitting"
    document.getElementById("termsCheckHelp").classList.remove('good');
    document.getElementById("termsCheckHelp").classList.add('wrong');
    validateFlag = false;
}

//returning validateFlag ; if the validateFlag is showing true or not: true means everything is valid
return validateFlag;
}

            // to check the strength of password entered
document.getElementById("passwordText").addEventListener('input',passwordStrength);
function passwordStrength()
{
let passWord = document.getElementById("passwordText");

if((passWord.value.trim()=="")||(passWord.value.trim().length<8))
{
        document.getElementById("passwordStatus1").classList.add('text-danger');
        document.getElementById("passwordStatus2").classList.add('text-danger');
        document.getElementById("passwordStatus3").classList.add('text-danger');
        document.getElementById("passwordStatus4").classList.add('text-danger');
}
else
{
  //atleast 8 chars, atleast-1 lower case, 1 upper case, 1 number, 1 among[!@#$%&*] and no blank spaces
let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*])(?=.*[0-9])(?!.*\s).{8,}$/
                                        
let numberCount=0;        //number count to count the number of numbers in the input
let speclCharCount=0;     //to count the number of specl char.s in the input 
let spclChars=['!','@','#','$','%','&','*'];    //spcl. char.s array                              
    if(regExPassword.test(passWord.value))
      {                                         // password test
        document.getElementById("passwordStatus1").classList.remove('text-danger');
        document.getElementById("passwordStatus2").classList.remove('text-danger');
        document.getElementById("passwordStatus3").classList.remove('text-danger');
        document.getElementById("passwordStatus4").classList.remove('text-danger');

        document.getElementById("passwordStatus1").classList.remove('text-warning');
        document.getElementById("passwordStatus2").classList.remove('text-warning');

        document.getElementById("passwordStatus3").classList.remove('text-warning');
        document.getElementById("passwordStatus4").classList.remove('text-warning');
        document.getElementById("passwordStatus3").classList.remove('text-success');
        document.getElementById("passwordStatus4").classList.remove('text-success');
                      //status3 and 4 are rated by below mentioned criteria; so kept 'dark' 
        document.getElementById("passwordStatus3").classList.add('text-dark');
        document.getElementById("passwordStatus4").classList.add('text-dark');

//rate strength--- add 2 success spinners for satisfying minimum constraints
//             --- if contains atleast 3 num: add one success spinner
//             --- if contains atleat 2 special chars: add one success spinner
        document.getElementById("passwordStatus1").classList.add('text-success');
        document.getElementById("passwordStatus2").classList.add('text-success');
                //whether contains 3 numbers
        for(let i=0;i<10;i++)
        {
            if(passWord.value.includes(i))
            {
               numberCount++;
            }
            if(numberCount==3)
            {
                //3 numbers found
              document.getElementById("passwordStatus3").classList.remove('text-dark');
              document.getElementById("passwordStatus3").classList.remove('text-warning');
              document.getElementById("passwordStatus3").classList.remove('text-danger');
              document.getElementById("passwordStatus3").classList.add('text-success');
               break;     //exit out
            }
        }
                // whether conatains 2 specl char.s
        for(let i=0;i<7;i++)
        {
            if(passWord.value.includes(spclChars[i]))
            {
              speclCharCount++;
            }
            if(speclCharCount==2)
            {
                //2 special char.s found
              document.getElementById("passwordStatus4").classList.remove('text-dark');
              document.getElementById("passwordStatus4").classList.remove('text-warning');
              document.getElementById("passwordStatus4").classList.remove('text-danger');
              document.getElementById("passwordStatus4").classList.add('text-success');
               break;     //exit out
            }
            
        }
        
      

      }
    else
      {
        document.getElementById("passwordStatus1").classList.remove('text-danger');
        document.getElementById("passwordStatus2").classList.remove('text-danger');
        document.getElementById("passwordStatus3").classList.remove('text-danger');
        document.getElementById("passwordStatus4").classList.remove('text-danger');

        document.getElementById("passwordStatus1").classList.remove('text-success');
        document.getElementById("passwordStatus2").classList.remove('text-success');
        document.getElementById("passwordStatus3").classList.remove('text-success');
        document.getElementById("passwordStatus4").classList.remove('text-success');
        document.getElementById("passwordStatus3").classList.remove('text-dark');
        document.getElementById("passwordStatus4").classList.remove('text-dark');

        document.getElementById("passwordStatus1").classList.add('text-warning');
        document.getElementById("passwordStatus2").classList.add('text-warning');
        document.getElementById("passwordStatus3").classList.add('text-warning');
        document.getElementById("passwordStatus4").classList.add('text-warning');

      }
 
}
 }