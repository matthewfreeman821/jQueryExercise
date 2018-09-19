//Select all divs and turn background to purple
$('div').css('background', 'purple');

//Select the divs with class highlight and make them 200px wide
$('.highlight').css('width', '200px');

// Select the div with id thrid and give it an orange border
$('#third').css('border', '3px dotted orange');

//Select the first div only and change its font color to pink
$('div:first-of-type').css('color', 'pink');
//This way also works, but is slower because it is native to jQuery, not CSS, the first option is more ideal
//$('div:first').css('color', 'pink');