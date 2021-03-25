$(document).ready(function() {

    /* Popovers */
    $("#team-name").popover({placement:'right', trigger:'focus'});
    $("#motto").popover({placement:'right', trigger:'focus'});

    /* Avatar */
    $(".teamavatarimg").click(function() {
        var filename = $(this).attr('value');
        $("#team_avatar_select").val(filename);
        $("#avatarfilename").text("File: " + filename.replace("team/",""));
        $("#avatarclose").click();
    });
    $("#team-avatar").change(function(){
        $("#avatarfilename").text("File: " + $(this).val().replace(/^.*[\\\/]/, ''));
        $("#team_avatar_select").val("");
    });

    $("#uploadbutton").click(function(){
        $("#team-avatar").click(); 
    });
});