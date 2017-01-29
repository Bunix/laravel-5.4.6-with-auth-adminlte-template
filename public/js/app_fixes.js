/**
 * Created by nicolas on 28/01/17.
 */
$(document).ready(function(){
   //Corregir funcionamiento de menu de usuario
    $('#user-menu').click(ControlNavbarMenu);
    $('#messages-menu').click(ControlNavbarMenu);
    $('#notifications-menu').click(ControlNavbarMenu);
    $('#tasks-menu').click(ControlNavbarMenu);

});

function ControlNavbarMenu(){
    if($(this).hasClass('open'))
        $(this).removeClass('open');
    else{
        $(this).addClass('open');
    }
}
