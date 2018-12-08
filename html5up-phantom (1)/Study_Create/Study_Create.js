function check_only(chk){
    var obj = document.getElementsByName("chkbox");
    for(var i=0; i<obj.length; i++){
        if(obj[i] != chk){
            obj[i].checked = false;
        }
    }
}
function check_only2(chk2){
    var obj = document.getElementsByName("chkbox2");
    for(var i=0; i<obj.length; i++){
        if(obj[i] != chk2){
            obj[i].checked = false;
        }
    }
}
