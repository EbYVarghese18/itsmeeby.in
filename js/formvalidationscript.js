function validate()
{
    const username = document.getElementById('uname');
    const email = document.getElementById('email');
    const mobile = document.getElementById('mobile');
    const address = document.getElementById('address');
    const comments = document.getElementById('comments');
    
    if(username.value.trim() == "" || email.value.trim() == "" || mobile.value.trim() == "" || address.value.trim() == "" || comments.value.trim() == "")
    {
        alert("Please fill up the fields");
        return false;
    }
    else
    {
        return true;
    }
}