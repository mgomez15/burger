$(document).ready(function(){
    $(".newbutton").on("submit", function(event){
        event.preventDefault()
        var id= $(this).children(".burger_id").val()
        $.ajax({
            method:"PUT",
            url:"/api/burgers/" + id
        }).then(function(data){
            location.reload()
        })
    })
})