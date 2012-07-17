$(document).ready(function()  {
    var characters = 140;
    $("#counter").append("You have <strong>"+  characters+"</strong> characters remaining");
    $("#micropost_content").keyup(function(){
        if($(this).val().length > characters){
        $(this).val($(this).val().substr(0, characters));
        }
    var remaining = characters -  $(this).val().length;
    $("#counter").html("You have <strong>"+  remaining+"</strong> characters remaining");
    if(remaining <= 10)
    {
        $("#counter").css("color","red");
    }
    else
    {
        $("#counter").css("color","black");
    }
    });
});
