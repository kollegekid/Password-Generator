         var password=document.getElementById("input-box");
             function genPassword() {
                 var chars = "0123456789abcdefghijklmnopqrstuvwxyz@%$ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                 var passwordLength = 10;
                 var password = "";
                 for (var i = 0; i <= passwordLength; i++) {
                     var randomNumber = Math.floor(Math.random() * chars.length);
                     password += chars.substring(randomNumber, randomNumber +1);
                 }
                 document.getElementById("input-box").value=password;
             }
         
             function copyPassword() {
               var copyText = document.getElementById("input-box");
               copyText.select();
               copyText.setSelectionRange(0, 999);
               document.execCommand("copy");
               
         }
             function resett(){  
               document.getElementById("input-box").value = "";
             }


