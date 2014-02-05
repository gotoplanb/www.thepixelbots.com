$(document).ready(function() {

	activatePopup = function() {
		var popupMarkup = '<div class="popup">' + '<div class="text-container box-shadow">' + '</div>' + '<div class="popup-bottom">' + '</div>' + '</div>';
		return popupMarkup;
	}
	
	$('body').prepend(activatePopup());
	
	$('.checked').each(function() {
		// Sets popup text based on title attribute
		var popup = $('.popup');
		var textContainer = $('.popup .text-container');
		var popupText = $(this).attr('title');
		$(this).attr('title', '');
		
		
		$(this).click(function() {
		
			//Grabs Position data of trigger element
			var pos = $(this).offset();
			var posTop = pos.top;
			var posLeft = pos.left;
			
			$(this).toggleClass('unchecked');
			$(this).toggleClass('checked');
		
			textContainer.html(popupText);
			if (popup.is(":hidden")) {
				popup.fadeIn('fast');
			} else {
				popup.fadeOut('fast');
			}
			
			setPos(posTop, posLeft);
		});
		
		popup.click(function() {
			popup.fadeOut('fast');
		});
		
		setPos = function(top, left) {
			var pHeight = popup.height();
			var yPos = (top - pHeight - 5) + 'px';
			var xPos = (left + 500) + 'px';
			
			popup.css({'top' : yPos, 'left' : xPos});
		}
	});
	
});



