(function ($) {
	var main = {
		init: function () {
			this.global.init();
			this.header.init();
			this.panel.init();
			this.frontpage.init();
			this.index.init();
			this.single.init();
			this.issue.init();
			this.postsaccordion.init();
			this.videos.init();
			this.editorsnotes.init();
			this.travelfilters.init();
			this.microsite.init();
			this.lightbox.init();
			this.main_menu.init();
			this.preOrderPage.init();
			this.eCommerce.init();
		},

		body: {
			element: $('body'),
		},

		global: {
			init: function () {
				main.body.element.addClass('ready');

				

			

				$("a[href^='#']").on('click', function () {
					var element = $($(this).attr('href'));

					if (element.length) {
						$('html, body').animate(
							{
								scrollTop: element.offset().top,
							},
							500
						);
					}
				});

				$('img').removeAttr('width').removeAttr('height');

				$(window).on('load', this.loaded);
			},
			loaded: function () {
				main.body.element.addClass('loaded');
			},
		},

		header: {
			element: $('#header'),
			init: function () {
				var element = this.element;

				if (!element.length) return;
			},
		},

		main_menu: {
			element: $('.featured-posts-list'),
			init: function () {
				this.element.css({ display: 'none' });
				this.animateBar();
			},
			animateBar: function () {
				const bar = $('.bar', $('.sidebar-loading'));
				const loading_bar = $('.sidebar-loading');
				let width = 1;

				const scene = () => {
					if (width >= 100) {
						clearInterval(id);
						loading_bar.fadeOut(500, () => this.element.fadeIn());
						return;
					}

					width++;
					bar.css({ width: `${width}%` });
				};

				const id = setInterval(scene, 10);
			},
		},

	

		panel: {
			element: $('#panel'),
			init: function () {
				var element = this.element;

				if (!element.length) return;

				var body = main.body.element;

				$('.site-overlay').on('click', function () {
					body.removeClass('panel-visible');
				});

				$('.panel-button').on('click', function () {
					body.toggleClass('panel-visible');
				});
			},
		},

	

		
	};

	window.main = main;

	$(function () {
		window.main.init();
	});
})(jQuery);

(function(){
    'use strict';
  
    document.addEventListener("DOMContentLoaded", function(){
      var currentDate = document.getElementById("date"),
          clock = document.getElementById("clock");
  
      setInterval(function(){
        var time = new Date(),
            hours = time.getHours(),
            minutes=time.getMinutes(),
            month = formatMonth(time.getMonth()), /*pass in the number of the month as argument and use it to loop in our months array */
            date = time.getDate(),
            ampm = "AM";
  
        if (hours >12 ) {
          hours -=12;
          ampm="PM";
        } else if (hours===0) {
          hours=12;
        }
  
        if (minutes<10){
          minutes= "0" + minutes;
        }
  
        var sepClass="";
        if (time.getSeconds() % 2 ===1) {
          sepClass="transparent";
        }
        var sep = '<span class="'+ sepClass + '">:</span>';
  
        currentDate.innerHTML = month + " " + date;
        clock.innerHTML = hours +  sep + minutes ;
      },1000);
  
  
  
      function formatMonth(m){
        m=parseInt(m,10);
  
        if (m<0){
          m=0;
        } else if (m>11) {
          m=11;
        }
  
        var monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];
  
        return monthNames[m];
  
      } /*format monthd*/
    }) /*dom content loaded*/
  
  })();