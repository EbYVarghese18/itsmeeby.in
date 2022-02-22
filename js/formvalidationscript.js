function validate()
{
    var username = document.getElementById('uname');
    var email = document.getElementById('email');
    var mobile = document.getElementById('mobile');
    var address = document.getElementById('address');
    var comments = document.getElementById('comments');
    
    if(username.value.trim() == "" || email.value.trim() == "" || mobile.value.trim() == "" || address.value.trim() == "" || comments.value.trim() == "")
    {
        alert("Please fill up the fields");
        return false;
    }
    else
    {
        true;
    }
}