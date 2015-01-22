

function init() {
    $(document).ready(function(){
               $(".vimeo").colorbox({iframe:true, innerWidth:"90%", innerHeight:"90%", maxWidth:"900px", maxHeight:"550px"});
                
                //Example of preserving a JavaScript event for inline calls.
                $("#click").click(function(){ 
                    $('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
                    return false;
                });
        });

    };
    init();
