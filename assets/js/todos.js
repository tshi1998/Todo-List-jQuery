//Cross off tasks by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropogation;
});

$("input[type='text'").keypress(function(event){
    if (event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class = 'fas fa-minus-circle'></i></span> " + todoText +  "</li>");
    }
})

$(".fa-edit").click(function(){
    $("input[type='text'").fadeToggle();
});