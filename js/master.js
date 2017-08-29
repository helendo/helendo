// // Click on div effect w/ jQuery (Change Opacity)
// $(document).ready(function(){
//     $('.thumb').click(function(){
//         $(this).animate({
//             opacity: '0.5'
//         }, function(){
//             $(this).animate({
//                 opacity: '1'
//             });
//         }); //change this div opacity to 0.5 then back to normal
//     }); //click on thumb div
// }); //jQuery ready


// // Hover over div effect w/ jQuery (Change Opacity)
// $(document).ready(function(){
//     $('.thumb').hover(function(){
//         $(this).animate({
//             opacity: '0.5'
//         }, function(){
//             $(this).animate({
//                 opacity: '1'
//             });
//         }); //change this div opacity to 0.5 then back to normal
//     }); //hover over thumb div
// }); //jQuery ready
// // There is a bug, two divs are effected at the same time


// // This handler will be executed every time the cursor is moved over a different div
// var parent = document.getElementById('thumbs');
//
//
// parent.addEventListener("mouseover", function (event) {
//     // highlight the mouseover target
//     event.target.style.color = "orange";
//
//
//     // reset the color after a short delay
//     setTimeout(function() {
//         event.target.style.color = "";
//     }, 500);
// }), false;


//hover over effect jQuery
$(document).ready(function(){
    $(".thumb").hover(function(){
        $( this ).addClass( "animate-opacity" );
    }, function(){
        $( this ).removeClass( "animate-opacity" );
    });
});
