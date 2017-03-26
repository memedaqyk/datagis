/*global $ */
//回到顶部
var backTop = document.getElementById('backTop');
backTop.onclick = function() {
	window.scrollBy(0, -100);
	};

var text;

var _main = document.getElementsByTagName('main')[0];
_main.style.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 40 + 'px';


$(document).ready(function(){
		$('p.menu_head').click(function(){
			$(this).css('background-color', '#097979').siblings().css('background-color', '#399999');
			$(this).next('div.menu_body').slideToggle(200).siblings('div.menu_body').slideUp('slow');

			
			if($(this).text() === text) {
				$(this).css('background-color', '#399999');
				// console.log(1);
			}
			text = $(this).text();
			
	});
});

var map;
require([
	'esri/map',
	'esri/dijit/Scalebar',
	'dojo/parser',
	'dojo/domReady!'
	], function (Map, Scalebar, parser) {
		parser.parse();

		map = new Map('map', {
		basemap: 'topo',
		center: [117.27, 31.86],
		zoom: 13
	});

	var scalebar = new Scalebar({
		map: map,
		scalebarUnit: 'dual',
		attachTo: 'bottom-left'
	});
});
