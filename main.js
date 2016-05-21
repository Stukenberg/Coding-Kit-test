// select: Read More button
// event:  clicked
// modify: expand the height of nearest paragraph

function expandHeightOfParagraph(){
    $(this).siblings("p").css(
        "max-height", "1000px"
    );
}

$(".cd-read-more").click(expandHeightOfParagraph);

/*Animation: Slow expanding height*/
function animateChange(){
  $(this).siblings('p').animate(
    "max-height", "200px"
  );
}
$('.cd-read-more').click(animateChange);
