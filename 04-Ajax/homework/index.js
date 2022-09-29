$('#boton').click(function () {
    /*var title = document.createElement('h3');
    title.textContent = "Mis Amigos!";
    $('#lista').append(title);*/
    var list = $('#lista');
    list.empty();

    $.get(`http://localhost:5000/amigos/`, result =>  {
            for(var i = 0; i < 7; i++){
            $('#lista').append(`<li>${result[i].name}</li>`);
        }
    });
    $('img').hide();
});

$('#search').click(function(){
    var input = $('#input').val();
    $.get(`http://localhost:5000/amigos/`+ input, function(data) {
    $('#amigo').text(data.name);
    });
});

$('#delete').click(function(){
    var dID = $('#inputDelete').val();
    $.ajax({
        url: `http://localhost:5000/amigos/${dID}`,
        type: 'DELETE',
        success: () => {
            $('#success').text("Chau Amix!");
        }
    });
});
