$('.checked').click(function() {
	
});

activatePopup = function() {
	var popupMarkup = '<div class="popup">' + '</div>';
	return popupMarkup;
}

$('body').prepend(activatePopup());

$('.checked').each(function() {
	// Sets popup text based on title attribute
	var popup = $('.popup');
	var popupText = $(this).attr('title');
	$(this).attr('title', '');
	
	//Grabs Position data for trigger element
	var offset = $(this).offset();
	var posTop = offset.top;
	var posLeft = offset.left;
	
	
	$(this).click(function() {
		popup.html(popupText);
		if (popup.is(":hidden")) {
			popup.fadeIn('slow');
		} else {
			popup.fadeOut('slow');
		}
		
		popupPos(posTop, posLeft);
		
		$(this).toggleClass('unchecked');
		$(this).toggleClass('checked');
		
	});
	
		
//	popup.click(function() {
//		$(this).fadeOut('slow');
//	});
	
});

popupPos = function(top, left) {
	var yPos = (top - 80) + 'px';
	var xPos = (left + 40) + 'px';
	
	$('.popup').css({'top' : yPos, 'left' : xPos});
}

