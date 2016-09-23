
$(function ():void { 
    $('#facegetter').on('click', function (e) {
        e.preventDefault();

        var username: string = $('#hubuser').val();
        var usinfo: string = 'https://api.github.com/users/' + username;

        requestJSON(usinfo, function (json):void {
            if (json.message == "Not Found") {
                swal("Free handle!", "There's nobody going by that name right now");

            } else {
                swal("Taken!", "Some handsome devil's already scored that username.");
                var realname:string = json.name;

                if (realname == undefined) { realname = '...someone who has not revealed their true name!'; }

                var output: HTMLElement = document.getElementById('output');
                output.innerHTML = realname
            }
        });
    });
    function requestJSON(url, callback):void {
        $.ajax({
            url: url,
            complete: function (xhr):void {
                callback.call(null, xhr.responseJSON);
            }
        });
    }
})