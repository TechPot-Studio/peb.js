/**
 * Checked Out JQuery (Copyright OpenJS Foundation and other contributors, https://openjsf.org/)
 * Uncopied Source-Code
 */
;(function() {
	console.log("Peb.js is available!");
	let sth = document.createElement("link");
	sth.rel = "stylesheet";
	sth.href = "./css/peb-basic.css";
	document.head.appendChild(sth);
	String.prototype.multi = function(t, c="") {
		return Array(t).fill(this).join(c);
	};
	Object.prototype.forEach = function(f) {
		for (let i in this) {
			f(this[i], i, this);
		}
	};
	customElements.define("p-trans", class PebTransElement extends HTMLElement {
		constructor() {
			super();
		}
	});
	customElements.define("p-mark", class PebMarkElement extends HTMLElement {
		constructor() {
			super();
			this.style.color = "attr(color), inherit";
			this.style.fontFamily = "attr(font), inherit"
		}
	})
	const exist = function(v) {
		if (v === void 0) {
			return false;
		} else {
			return true;
		}
	}
	window.translation = function(table) {
		document.querySelectorAll("peb-trans").forEach((c) => {
			c.innerHTML = table[c.getAttribute("p-lang")][c.getAttribute("p-word")];
		});
	};
	window.sum = function(...values) {
		if (values[0].__proto__ === Array.prototype) {
			return sum(...(values[0]))
		} else {
			return eval(values.join("+"))
		}
	};
	window.gen = (function() {
		this.ele = function(n, c="", a={}) {
			let r = document.createElement(n)
			r.appendChild(document.createTextNode(String(c)));
			for (let i of Object.keys(a)) {
				r.setAttribute(i, a[i]);
			}
			return r;
		},
		this.tnode = function(t) {
			return document.createTextNode(String(t));
		}
	})();
	window.pb = function(e, s) {
		if (e[0] === "#" || exist(s)) {
			let ix = s || 0
			  , el = document.querySelectorAll(e).item(ix);
			return new (function RElement() {
				this.selector = e,
				this.id = el.id,
				this.cls = el.classList,
				this.tag = el.tagName;
				this.__proto__ = {
					attr: function(n, f) {
						if (!exist(n)) {
							return el.attributes
						} else if (!exist(f)) {
							switch (typeof(n)) {
								case "string":
									return el.getAttribute(n);
								case "object":
									for (let i in n) {
										el.setAttribute(i, n[i]);
									}
									break;
							}
						} else {
							return el.setAttribute(n, String(f));
						}
					},
					dats: function(n, f) {
						if (!exist(n)) {
							return el.dataset;
						} else if (!exist(f)) {
							switch (typeof(n)) {
								case "string":
									return el.dataset[n];
								case "object":
									for (let i in n) {
										el.dataset[i] = n[i];
									}
							}
						} else {
							return el.dataset[n] = String(f);
						}
					},
					item: function(n, f) {
						if (f) {
							return el[n];
						} else {
							return el[n] = f;
						}
					},
					css: function(n, f) {
						if (!exist(f)) {
							switch (typeof(n)) {
								case "string":
									return el.style[n];
								case "object":
									for (let i in n) {
										el.dataset[i] = n[i];
									}
							}
						} else {
							let ft = String(f)
							return el.style[n] = ft
						}
					},
					insert: function(...v) {
						for (let i in v) {
							el.appendChild(v[i]);
						}
					},
					del: function() {
						return el.parentNode.removeChild(el);
					},
					htm: function(f) {
						if (exist(f)) {
							return el.innerHTML = String(f);
						} else {
							return el.innerHTML;
						}
					},
					txt: function() {
						return el.innerText
					},
					val: function(f) {
						if (exist(f)) {
							return el.value = String(f);
						} else {
							return el.value;
						}
					},
					hide: function() {
						el.dbh = el.style.display;
						return el.style.display = "none";
					},
					show: function(t) {
						if (exist(t)) {
							return el.style.display = String(t);
						} else {
							return el.style.display = el.dbh;
						}
					},
					evt: function(n, f) {
						if (exist(f)) {
							el.addEventListener(n, f);
						} else {
							switch (typeof(n)) {
								case "string":
									el.removeEventListener(n)
									break;
								case "object":
									for (let i in n) {
										el.addEventListener(i, n[i])
									}
							}
						}
					}
				}
			})(); 
		} else {
			return new (function RElementsCollection() {
				let es = document.querySelectorAll(e)
				es.forEach((c, ix) => {
					this[ix] = c;
				});
				this.length = es.length;
				this.__proto__ = {
					forEach: function(f) {
						es.forEach((_c, ix) => {
							f(pb(e, ix), ix);
						})
					},
					item: function(i) {
						return pb(e, i);
					}
				}
			})();
		}
	};
})();
