function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  

  function setdropdownactive(e){
    var a= document.getElementById(e)
    a.classList.toggle("active")
  }