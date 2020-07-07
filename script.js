var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = 1 + (content.scrollHeight + "%") ;
    } 
  });
}

$(document).ready(function(){
  $('[data-toggle="popover"]').popover({
         //trigger: 'focus',
     trigger: 'hover',
         html: true,
         content: function () {
       return '<img class="img-fluid" src="'+$(this).data('img') + '" />';
         },
         title: 'Toolbox'
   }) 
});