function myAll() {
    document.getElementById("ref_all").style.display = "flex";
    document.getElementById("ref_aix").style.display = "none";
    document.getElementById("ref_paris").style.display = "none";
  }
  function myAix() {
    document.getElementById("ref_all").style.display = "none";
    document.getElementById("ref_aix").style.display = "flex";
    document.getElementById("ref_paris").style.display = "none";
  }
  function myParis() {
    document.getElementById("ref_all").style.display = "none";
    document.getElementById("ref_aix").style.display = "none";
    document.getElementById("ref_paris").style.display = "flex";
  }

window.setInterval(function(){
$('.nbr').each(function() {
    $(this).animate({left: $(this).data('percentage')}, {
        duration: 4000,step: function(now, fx) { var data = Math.round(now);
            $(this).text(data + ' ');}});});	   
}, 15000);
