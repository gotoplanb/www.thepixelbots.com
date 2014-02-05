//Based on fixer.js on http://www.playgroundinc.com

var sectionId = 0;
var sectionPos = 1;
var descriptionHeight = 2;
var descriptionBottom = 3;

var sectionData = new Array();

 
$(window).load(function() { initData(); adjustPos(); });
$(window).resize(function() { initData(); adjustPos(); });
$(window).scroll(function() { adjustPos(); });
 

function initData() {
	$('.process').each(function(i) {
		sectionData[i] = new Array();
		sectionData[i][sectionId] = $(this).attr('id');
		sectionData[i][sectionPos] = $(this).offset();
		sectionData[i][descriptionHeight] = $(this).find('.description').height();
		sectionData[i][descriptionBottom] = sectionData[i][sectionPos].top + $(this).height() - sectionData[i][descriptionHeight];
	});
}

function adjustPos() {
	var windowPos = $(window).scrollTop();
	var i;
	
	for (i = 0; i < sectionData.length; i++) {
		if (windowPos >= sectionData[i][sectionPos].top) {
			if (windowPos >= sectionData[i][descriptionBottom]) {
				$('#' + sectionData[i][sectionId] + ' .description').css({'position':'absolute', 'top':'auto', 'bottom':'0'});
			}
			else {
				$('#' + sectionData[i][sectionId] + ' .description').css({'position':'fixed', 'top':'0', 'bottom':'auto'});
			}
		} else {
				$('#' + sectionData[i][sectionId] + ' .description').css({'position':'static', 'top':'auto', 'bottom':'auto'});
		}
	}
}
