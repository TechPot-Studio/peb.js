/**
 * Checked Out JQuery (Copyright OpenJS Foundation and other contributors, https://openjsf.org/)
 * Uncopied Source-Code
 */
;(function() {
	console.log("Peb.js is available!");
	
	String.prototype.multi = function(t) {
		return Array(t + 1).join(this);
	};
	Object.prototype.forEach = function(f) {
		for (var i in this) {
			f(this[i], i, this);
		}
	}
	let su = "undefined"
	window.gen = function(cd, ...args) {
		return ({
			el: function(n, c="", a={"pb-empty": "true"}) {
				let rn = document.createElement(n);
				rn.appendChild(document.createTextNode(c));
				for (var i in a) {
					rn.setAttribute(i, a[i]);
				};
				return rn;
			},
			tn: function(t) {
				return document.createTextNode(t)
			}
		})[cd](...args);
	};
	window.pb = function(e, s) {
		if (e[0] === "#" || s + 1) {
			let ix = s || 0
			  , el = document.querySelectorAll(e).item(ix);
			return new (function ResultElement() {
				this.selector = e,
				this.id = el.id,
				this.cls = el.classList,
				this.tag = el.tagName;
				this.__proto__ = {
					attr: function(n, f) {
						let ft = String(f);
						if (ft === su) {
							return el.getAttribute(n);
						} else {
							return el.setAttribute(n, ft);
						}
					},
					item: function(n, f) {
						if (f) {
							return el[n]
						} else {
							return el[n] = f
						}
					},
					css: function(n, f) {
						let ft = String(f);
						if (ft === su) {
							return el.style[n]
						} else {
							return el.style[n] = ft
						}
					},
					insert: function(v) {	
						return el.appendChild(v);
					},
					del: function() {
						return el.parentNode.removeChild(el);
					},
					htm: function(f) {
						let ft = String(f);
						if (ft === su) {
							return el.innerHTML
						} else {
							return el.innerHTML = ft
						}
					},
					txt: function() {
						return el.innerText
					},
					val: function(f) {
						let ft = String(f);
						if (ft === su) {
							return el.value
						} else {
							return el.value = ft
						}
					},
					hide: function() {
						el.dbh = el.style.display;
						return el.style.display = "none";
					},
					show: function(t) {
						if (t) {
							return el.style.display = String(t);
						} else {
							return el.style.display = el.dbh
						}
					}
				}
			})();
		} else {
			return new (function ResultElements(){
				let es = document.querySelectorAll(e)
				this.length = es.length;
				this.__proto__ = {
					each: function(f) {
						for (var i in es) {
							f(pb(e, i), i);
						}
					},
					item: function(i) {
						return pb(e, i)
					}
				}
			})();
		}
	};
})();
