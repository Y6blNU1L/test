;(function (doc, win, undefined) {
			var docEl = doc.documentElement,
			resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
			recalc = function () {
			var clientWidth = docEl.clientWidth;
			if (clientWidth === undefined) return;
			//手机版本取消下面注释
			 //docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';	
 
			// 电脑版
			docEl.style.fontSize = 30* (clientWidth / 750) + 'px';  //30还可以

			};
			if (doc.addEventListener === undefined) return;
			win.addEventListener(resizeEvt, recalc, false);
			doc.addEventListener('DOMContentLoaded', recalc, false)
			
			})(document, window);