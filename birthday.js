   // Function to activate confetti effect
   function activateConfetti() {
    confetti({
particleCount: 100,  // You can adjust the number of particles
spread: 160,        // You can adjust the spread of particles
origin: { x: 0.5, y: 0.6 },  // Adjust the position (0.5, 0.5 is the center)
});

confetti({
particleCount: 100,  // You can adjust the number of particles
spread: 160,        // You can adjust the spread of particles
origin: { x: 1.3, y: 0.7 },  // Adjust the position (0.3, 0.7 is an example)
});
}

// Trigger the confetti effect when the window has fully loaded
(function($){
    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
})(jQuery);

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

$(document).ready(function () {
	var mouse;
	var state = 'on';
	$('body').disableSelection();
	$(['light_bulb_on.png', 'light_bulb_off.png', 'chain_on.png', 'chain_off.png']).preload();

	$('#bulb_' + state).hide();
	$('#chain_' + state).hide();
    $('#birthday').hide();

	setTimeout(function () {
		$('#message').fadeOut(1500);
	}, 2000)

	$('#chain_container').draggable({
		containment: "parent",
		start: function (e) {
			mouse = e.pageY;
	
		},
		stop: function (e) {
			flipSwitch(e);
			animateChain();
            if (state=='off'){
                activateConfetti();
            }
		}
	});

	function animateChain() {
		$('#chain_container').animate({top: 0}, 100);
	};

	function flipSwitch(e) {
		if (e.pageY >= mouse + 100) {
			$('body').addClass(state);
			$('#bulb_' + state).show();
			$('#chain_' + state).show();
            $('#birthday').show();
			
			if (state == 'on') {
				state = 'off';
			} else {
				state = 'on'

			}
			$('body').removeClass(state);
			$('#bulb_' + state).hide();
			$('#chain_' + state).hide();
		}
	}
});
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  // 👇️ hide button
  btn.style.display = 'none';

  // 👇️ show div
  const box = document.getElementById('box');
  box.style.display = 'block';
});
