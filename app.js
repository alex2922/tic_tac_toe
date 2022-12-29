

$(document).ready(function(){
    $(document).click(function(event){
        alert("You've clicked: " + event.target.nodeName + ", id: " + event.target.id);
    });
});