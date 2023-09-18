var done = false;
var tasks = [];


$('.button').click(function () {
    var task = $('#newTask').val();
    if (task != '') {
        tasks.push(task);
        $('#taskList').html('');
        tasks.forEach(element => {
            $('#taskList').append('<li><span>' + element + '</span><div class="actions"><input type="checkbox" class="trash"></input><button class="trash_button">Trash</button></div></li>');
        });
        $('.trash_button').hide();
        $('#newTask').val('');
    }
});

$(document).on('change', '.trash', function() {
    var $span = $(this).parent().siblings('span');
    if($(this).prop('checked')) {
        $span.addClass('line');
        $(this).parent().find('.trash_button').show();
    } else {
        $span.removeClass('line');
        $(this).parent().find('.trash_button').hide();
    }
});

$(document).on('click', '.trash_button', function(){
    var taskText = $(this).parent().siblings('span').text();
    var index = tasks.indexOf(taskText);
    tasks.splice(index, 1);
    
    $(this).parent().parent().remove();
});







