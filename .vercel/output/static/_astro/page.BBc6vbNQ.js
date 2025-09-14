var Le = !1,
	Re = !1,
	j = [],
	je = -1;
function er(e) {
	tr(e);
}
function tr(e) {
	j.includes(e) || j.push(e), rr();
}
function nr(e) {
	let t = j.indexOf(e);
	t !== -1 && t > je && j.splice(t, 1);
}
function rr() {
	!Re && !Le && ((Le = !0), queueMicrotask(ir));
}
function ir() {
	(Le = !1), (Re = !0);
	for (let e = 0; e < j.length; e++) j[e](), (je = e);
	(j.length = 0), (je = -1), (Re = !1);
}
var q,
	B,
	W,
	jt,
	Ne = !0;
function or(e) {
	(Ne = !1), e(), (Ne = !0);
}
function sr(e) {
	(q = e.reactive),
		(W = e.release),
		(B = (t) =>
			e.effect(t, {
				scheduler: (n) => {
					Ne ? er(n) : n();
				}
			})),
		(jt = e.raw);
}
function mt(e) {
	B = e;
}
function ar(e) {
	let t = () => {};
	return [
		(r) => {
			let i = B(r);
			return (
				e._x_effects ||
					((e._x_effects = new Set()),
					(e._x_runEffects = () => {
						e._x_effects.forEach((o) => o());
					})),
				e._x_effects.add(i),
				(t = () => {
					i !== void 0 && (e._x_effects.delete(i), W(i));
				}),
				i
			);
		},
		() => {
			t();
		}
	];
}
function Nt(e, t) {
	let n = !0,
		r,
		i = B(() => {
			let o = e();
			JSON.stringify(o),
				n
					? (r = o)
					: queueMicrotask(() => {
							t(o, r), (r = o);
						}),
				(n = !1);
		});
	return () => W(i);
}
var kt = [],
	Ft = [],
	Dt = [];
function ur(e) {
	Dt.push(e);
}
function Xe(e, t) {
	typeof t == 'function'
		? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t))
		: ((t = e), Ft.push(t));
}
function Bt(e) {
	kt.push(e);
}
function Kt(e, t, n) {
	e._x_attributeCleanups || (e._x_attributeCleanups = {}),
		e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
		e._x_attributeCleanups[t].push(n);
}
function Ht(e, t) {
	e._x_attributeCleanups &&
		Object.entries(e._x_attributeCleanups).forEach(([n, r]) => {
			(t === void 0 || t.includes(n)) && (r.forEach((i) => i()), delete e._x_attributeCleanups[n]);
		});
}
function cr(e) {
	for (e._x_effects?.forEach(nr); e._x_cleanups?.length; ) e._x_cleanups.pop()();
}
var Ze = new MutationObserver(nt),
	Qe = !1;
function et() {
	Ze.observe(document, { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0 }),
		(Qe = !0);
}
function zt() {
	lr(), Ze.disconnect(), (Qe = !1);
}
var G = [];
function lr() {
	let e = Ze.takeRecords();
	G.push(() => e.length > 0 && nt(e));
	let t = G.length;
	queueMicrotask(() => {
		if (G.length === t) for (; G.length > 0; ) G.shift()();
	});
}
function g(e) {
	if (!Qe) return e();
	zt();
	let t = e();
	return et(), t;
}
var tt = !1,
	he = [];
function fr() {
	tt = !0;
}
function dr() {
	(tt = !1), nt(he), (he = []);
}
function nt(e) {
	if (tt) {
		he = he.concat(e);
		return;
	}
	let t = [],
		n = new Set(),
		r = new Map(),
		i = new Map();
	for (let o = 0; o < e.length; o++)
		if (
			!e[o].target._x_ignoreMutationObserver &&
			(e[o].type === 'childList' &&
				(e[o].removedNodes.forEach((s) => {
					s.nodeType === 1 && s._x_marker && n.add(s);
				}),
				e[o].addedNodes.forEach((s) => {
					if (s.nodeType === 1) {
						if (n.has(s)) {
							n.delete(s);
							return;
						}
						s._x_marker || t.push(s);
					}
				})),
			e[o].type === 'attributes')
		) {
			let s = e[o].target,
				a = e[o].attributeName,
				u = e[o].oldValue,
				c = () => {
					r.has(s) || r.set(s, []), r.get(s).push({ name: a, value: s.getAttribute(a) });
				},
				l = () => {
					i.has(s) || i.set(s, []), i.get(s).push(a);
				};
			s.hasAttribute(a) && u === null ? c() : s.hasAttribute(a) ? (l(), c()) : l();
		}
	i.forEach((o, s) => {
		Ht(s, o);
	}),
		r.forEach((o, s) => {
			kt.forEach((a) => a(s, o));
		});
	for (let o of n) t.some((s) => s.contains(o)) || Ft.forEach((s) => s(o));
	for (let o of t) o.isConnected && Dt.forEach((s) => s(o));
	(t = null), (n = null), (r = null), (i = null);
}
function qt(e) {
	return oe(H(e));
}
function ie(e, t, n) {
	return (
		(e._x_dataStack = [t, ...H(n || e)]),
		() => {
			e._x_dataStack = e._x_dataStack.filter((r) => r !== t);
		}
	);
}
function H(e) {
	return e._x_dataStack
		? e._x_dataStack
		: typeof ShadowRoot == 'function' && e instanceof ShadowRoot
			? H(e.host)
			: e.parentNode
				? H(e.parentNode)
				: [];
}
function oe(e) {
	return new Proxy({ objects: e }, pr);
}
var pr = {
	ownKeys({ objects: e }) {
		return Array.from(new Set(e.flatMap((t) => Object.keys(t))));
	},
	has({ objects: e }, t) {
		return t == Symbol.unscopables
			? !1
			: e.some((n) => Object.prototype.hasOwnProperty.call(n, t) || Reflect.has(n, t));
	},
	get({ objects: e }, t, n) {
		return t == 'toJSON' ? _r : Reflect.get(e.find((r) => Reflect.has(r, t)) || {}, t, n);
	},
	set({ objects: e }, t, n, r) {
		const i = e.find((s) => Object.prototype.hasOwnProperty.call(s, t)) || e[e.length - 1],
			o = Object.getOwnPropertyDescriptor(i, t);
		return o?.set && o?.get ? o.set.call(r, n) || !0 : Reflect.set(i, t, n);
	}
};
function _r() {
	return Reflect.ownKeys(this).reduce((t, n) => ((t[n] = Reflect.get(this, n)), t), {});
}
function Wt(e) {
	let t = (r) => typeof r == 'object' && !Array.isArray(r) && r !== null,
		n = (r, i = '') => {
			Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(
				([o, { value: s, enumerable: a }]) => {
					if (a === !1 || s === void 0 || (typeof s == 'object' && s !== null && s.__v_skip))
						return;
					let u = i === '' ? o : `${i}.${o}`;
					typeof s == 'object' && s !== null && s._x_interceptor
						? (r[o] = s.initialize(e, u, o))
						: t(s) && s !== r && !(s instanceof Element) && n(s, u);
				}
			);
		};
	return n(e);
}
function Ut(e, t = () => {}) {
	let n = {
		initialValue: void 0,
		_x_interceptor: !0,
		initialize(r, i, o) {
			return e(
				this.initialValue,
				() => hr(r, i),
				(s) => ke(r, i, s),
				i,
				o
			);
		}
	};
	return (
		t(n),
		(r) => {
			if (typeof r == 'object' && r !== null && r._x_interceptor) {
				let i = n.initialize.bind(n);
				n.initialize = (o, s, a) => {
					let u = r.initialize(o, s, a);
					return (n.initialValue = u), i(o, s, a);
				};
			} else n.initialValue = r;
			return n;
		}
	);
}
function hr(e, t) {
	return t.split('.').reduce((n, r) => n[r], e);
}
function ke(e, t, n) {
	if ((typeof t == 'string' && (t = t.split('.')), t.length === 1)) e[t[0]] = n;
	else {
		if (t.length === 0) throw error;
		return e[t[0]] || (e[t[0]] = {}), ke(e[t[0]], t.slice(1), n);
	}
}
var Vt = {};
function A(e, t) {
	Vt[e] = t;
}
function Fe(e, t) {
	let n = gr(t);
	return (
		Object.entries(Vt).forEach(([r, i]) => {
			Object.defineProperty(e, `$${r}`, {
				get() {
					return i(t, n);
				},
				enumerable: !1
			});
		}),
		e
	);
}
function gr(e) {
	let [t, n] = Qt(e),
		r = { interceptor: Ut, ...t };
	return Xe(e, n), r;
}
function xr(e, t, n, ...r) {
	try {
		return n(...r);
	} catch (i) {
		ne(i, e, t);
	}
}
function ne(e, t, n = void 0) {
	(e = Object.assign(e ?? { message: 'No error message given.' }, { el: t, expression: n })),
		console.warn(
			`Alpine Expression Error: ${e.message}

${
	n
		? 'Expression: "' +
			n +
			`"

`
		: ''
}`,
			t
		),
		setTimeout(() => {
			throw e;
		}, 0);
}
var pe = !0;
function Jt(e) {
	let t = pe;
	pe = !1;
	let n = e();
	return (pe = t), n;
}
function N(e, t, n = {}) {
	let r;
	return b(e, t)((i) => (r = i), n), r;
}
function b(...e) {
	return Yt(...e);
}
var Yt = Gt;
function vr(e) {
	Yt = e;
}
function Gt(e, t) {
	let n = {};
	Fe(n, e);
	let r = [n, ...H(e)],
		i = typeof t == 'function' ? yr(r, t) : br(r, t, e);
	return xr.bind(null, e, t, i);
}
function yr(e, t) {
	return (n = () => {}, { scope: r = {}, params: i = [] } = {}) => {
		let o = t.apply(oe([r, ...e]), i);
		ge(n, o);
	};
}
var Me = {};
function mr(e, t) {
	if (Me[e]) return Me[e];
	let n = Object.getPrototypeOf(async function () {}).constructor,
		r =
			/^[\n\s]*if.*\(.*\)/.test(e.trim()) || /^(let|const)\s/.test(e.trim())
				? `(async()=>{ ${e} })()`
				: e,
		o = (() => {
			try {
				let s = new n(
					['__self', 'scope'],
					`with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`
				);
				return Object.defineProperty(s, 'name', { value: `[Alpine] ${e}` }), s;
			} catch (s) {
				return ne(s, t, e), Promise.resolve();
			}
		})();
	return (Me[e] = o), o;
}
function br(e, t, n) {
	let r = mr(t, n);
	return (i = () => {}, { scope: o = {}, params: s = [] } = {}) => {
		(r.result = void 0), (r.finished = !1);
		let a = oe([o, ...e]);
		if (typeof r == 'function') {
			let u = r(r, a).catch((c) => ne(c, n, t));
			r.finished
				? (ge(i, r.result, a, s, n), (r.result = void 0))
				: u
						.then((c) => {
							ge(i, c, a, s, n);
						})
						.catch((c) => ne(c, n, t))
						.finally(() => (r.result = void 0));
		}
	};
}
function ge(e, t, n, r, i) {
	if (pe && typeof t == 'function') {
		let o = t.apply(n, r);
		o instanceof Promise ? o.then((s) => ge(e, s, n, r)).catch((s) => ne(s, i, t)) : e(o);
	} else typeof t == 'object' && t instanceof Promise ? t.then((o) => e(o)) : e(t);
}
var rt = 'x-';
function U(e = '') {
	return rt + e;
}
function wr(e) {
	rt = e;
}
var xe = {};
function v(e, t) {
	return (
		(xe[e] = t),
		{
			before(n) {
				if (!xe[n]) {
					console.warn(
						String.raw`Cannot find directive \`${n}\`. \`${e}\` will use the default order of execution`
					);
					return;
				}
				const r = R.indexOf(n);
				R.splice(r >= 0 ? r : R.indexOf('DEFAULT'), 0, e);
			}
		}
	);
}
function Er(e) {
	return Object.keys(xe).includes(e);
}
function it(e, t, n) {
	if (((t = Array.from(t)), e._x_virtualDirectives)) {
		let o = Object.entries(e._x_virtualDirectives).map(([a, u]) => ({ name: a, value: u })),
			s = Xt(o);
		(o = o.map((a) =>
			s.find((u) => u.name === a.name) ? { name: `x-bind:${a.name}`, value: `"${a.value}"` } : a
		)),
			(t = t.concat(o));
	}
	let r = {};
	return t
		.map(nn((o, s) => (r[o] = s)))
		.filter(on)
		.map(Or(r, n))
		.sort(Cr)
		.map((o) => Ar(e, o));
}
function Xt(e) {
	return Array.from(e)
		.map(nn())
		.filter((t) => !on(t));
}
var De = !1,
	Q = new Map(),
	Zt = Symbol();
function Sr(e) {
	De = !0;
	let t = Symbol();
	(Zt = t), Q.set(t, []);
	let n = () => {
			for (; Q.get(t).length; ) Q.get(t).shift()();
			Q.delete(t);
		},
		r = () => {
			(De = !1), n();
		};
	e(n), r();
}
function Qt(e) {
	let t = [],
		n = (a) => t.push(a),
		[r, i] = ar(e);
	return (
		t.push(i),
		[
			{ Alpine: se, effect: r, cleanup: n, evaluateLater: b.bind(b, e), evaluate: N.bind(N, e) },
			() => t.forEach((a) => a())
		]
	);
}
function Ar(e, t) {
	let n = () => {},
		r = xe[t.type] || n,
		[i, o] = Qt(e);
	Kt(e, t.original, o);
	let s = () => {
		e._x_ignore ||
			e._x_ignoreSelf ||
			(r.inline && r.inline(e, t, i), (r = r.bind(r, e, t, i)), De ? Q.get(Zt).push(r) : r());
	};
	return (s.runCleanups = o), s;
}
var en =
		(e, t) =>
		({ name: n, value: r }) => (n.startsWith(e) && (n = n.replace(e, t)), { name: n, value: r }),
	tn = (e) => e;
function nn(e = () => {}) {
	return ({ name: t, value: n }) => {
		let { name: r, value: i } = rn.reduce((o, s) => s(o), { name: t, value: n });
		return r !== t && e(r, t), { name: r, value: i };
	};
}
var rn = [];
function ot(e) {
	rn.push(e);
}
function on({ name: e }) {
	return sn().test(e);
}
var sn = () => new RegExp(`^${rt}([^:^.]+)\\b`);
function Or(e, t) {
	return ({ name: n, value: r }) => {
		let i = n.match(sn()),
			o = n.match(/:([a-zA-Z0-9\-_:]+)/),
			s = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
			a = t || e[n] || n;
		return {
			type: i ? i[1] : null,
			value: o ? o[1] : null,
			modifiers: s.map((u) => u.replace('.', '')),
			expression: r,
			original: a
		};
	};
}
var Be = 'DEFAULT',
	R = [
		'ignore',
		'ref',
		'data',
		'id',
		'anchor',
		'bind',
		'init',
		'for',
		'model',
		'modelable',
		'transition',
		'show',
		'if',
		Be,
		'teleport'
	];
function Cr(e, t) {
	let n = R.indexOf(e.type) === -1 ? Be : e.type,
		r = R.indexOf(t.type) === -1 ? Be : t.type;
	return R.indexOf(n) - R.indexOf(r);
}
function ee(e, t, n = {}) {
	e.dispatchEvent(new CustomEvent(t, { detail: n, bubbles: !0, composed: !0, cancelable: !0 }));
}
function D(e, t) {
	if (typeof ShadowRoot == 'function' && e instanceof ShadowRoot) {
		Array.from(e.children).forEach((i) => D(i, t));
		return;
	}
	let n = !1;
	if ((t(e, () => (n = !0)), n)) return;
	let r = e.firstElementChild;
	for (; r; ) D(r, t), (r = r.nextElementSibling);
}
function E(e, ...t) {
	console.warn(`Alpine Warning: ${e}`, ...t);
}
var bt = !1;
function Mr() {
	bt &&
		E(
			'Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.'
		),
		(bt = !0),
		document.body ||
			E(
				"Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
			),
		ee(document, 'alpine:init'),
		ee(document, 'alpine:initializing'),
		et(),
		ur((t) => C(t, D)),
		Xe((t) => J(t)),
		Bt((t, n) => {
			it(t, n).forEach((r) => r());
		});
	let e = (t) => !me(t.parentElement, !0);
	Array.from(document.querySelectorAll(cn().join(',')))
		.filter(e)
		.forEach((t) => {
			C(t);
		}),
		ee(document, 'alpine:initialized'),
		setTimeout(() => {
			$r();
		});
}
var st = [],
	an = [];
function un() {
	return st.map((e) => e());
}
function cn() {
	return st.concat(an).map((e) => e());
}
function ln(e) {
	st.push(e);
}
function fn(e) {
	an.push(e);
}
function me(e, t = !1) {
	return V(e, (n) => {
		if ((t ? cn() : un()).some((i) => n.matches(i))) return !0;
	});
}
function V(e, t) {
	if (e) {
		if (t(e)) return e;
		if ((e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement))
			return V(e.parentElement, t);
	}
}
function Tr(e) {
	return un().some((t) => e.matches(t));
}
var dn = [];
function Ir(e) {
	dn.push(e);
}
var Pr = 1;
function C(e, t = D, n = () => {}) {
	V(e, (r) => r._x_ignore) ||
		Sr(() => {
			t(e, (r, i) => {
				r._x_marker ||
					(n(r, i),
					dn.forEach((o) => o(r, i)),
					it(r, r.attributes).forEach((o) => o()),
					r._x_ignore || (r._x_marker = Pr++),
					r._x_ignore && i());
			});
		});
}
function J(e, t = D) {
	t(e, (n) => {
		cr(n), Ht(n), delete n._x_marker;
	});
}
function $r() {
	[
		['ui', 'dialog', ['[x-dialog], [x-popover]']],
		['anchor', 'anchor', ['[x-anchor]']],
		['sort', 'sort', ['[x-sort]']]
	].forEach(([t, n, r]) => {
		Er(n) ||
			r.some((i) => {
				if (document.querySelector(i)) return E(`found "${i}", but missing ${t} plugin`), !0;
			});
	});
}
var Ke = [],
	at = !1;
function ut(e = () => {}) {
	return (
		queueMicrotask(() => {
			at ||
				setTimeout(() => {
					He();
				});
		}),
		new Promise((t) => {
			Ke.push(() => {
				e(), t();
			});
		})
	);
}
function He() {
	for (at = !1; Ke.length; ) Ke.shift()();
}
function Lr() {
	at = !0;
}
function ct(e, t) {
	return Array.isArray(t)
		? wt(e, t.join(' '))
		: typeof t == 'object' && t !== null
			? Rr(e, t)
			: typeof t == 'function'
				? ct(e, t())
				: wt(e, t);
}
function wt(e, t) {
	let n = (i) =>
			i
				.split(' ')
				.filter((o) => !e.classList.contains(o))
				.filter(Boolean),
		r = (i) => (
			e.classList.add(...i),
			() => {
				e.classList.remove(...i);
			}
		);
	return (t = t === !0 ? (t = '') : t || ''), r(n(t));
}
function Rr(e, t) {
	let n = (a) => a.split(' ').filter(Boolean),
		r = Object.entries(t)
			.flatMap(([a, u]) => (u ? n(a) : !1))
			.filter(Boolean),
		i = Object.entries(t)
			.flatMap(([a, u]) => (u ? !1 : n(a)))
			.filter(Boolean),
		o = [],
		s = [];
	return (
		i.forEach((a) => {
			e.classList.contains(a) && (e.classList.remove(a), s.push(a));
		}),
		r.forEach((a) => {
			e.classList.contains(a) || (e.classList.add(a), o.push(a));
		}),
		() => {
			s.forEach((a) => e.classList.add(a)), o.forEach((a) => e.classList.remove(a));
		}
	);
}
function be(e, t) {
	return typeof t == 'object' && t !== null ? jr(e, t) : Nr(e, t);
}
function jr(e, t) {
	let n = {};
	return (
		Object.entries(t).forEach(([r, i]) => {
			(n[r] = e.style[r]), r.startsWith('--') || (r = kr(r)), e.style.setProperty(r, i);
		}),
		setTimeout(() => {
			e.style.length === 0 && e.removeAttribute('style');
		}),
		() => {
			be(e, n);
		}
	);
}
function Nr(e, t) {
	let n = e.getAttribute('style', t);
	return (
		e.setAttribute('style', t),
		() => {
			e.setAttribute('style', n || '');
		}
	);
}
function kr(e) {
	return e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function ze(e, t = () => {}) {
	let n = !1;
	return function () {
		n ? t.apply(this, arguments) : ((n = !0), e.apply(this, arguments));
	};
}
v('transition', (e, { value: t, modifiers: n, expression: r }, { evaluate: i }) => {
	typeof r == 'function' && (r = i(r)),
		r !== !1 && (!r || typeof r == 'boolean' ? Dr(e, n, t) : Fr(e, r, t));
});
function Fr(e, t, n) {
	pn(e, ct, ''),
		{
			enter: (i) => {
				e._x_transition.enter.during = i;
			},
			'enter-start': (i) => {
				e._x_transition.enter.start = i;
			},
			'enter-end': (i) => {
				e._x_transition.enter.end = i;
			},
			leave: (i) => {
				e._x_transition.leave.during = i;
			},
			'leave-start': (i) => {
				e._x_transition.leave.start = i;
			},
			'leave-end': (i) => {
				e._x_transition.leave.end = i;
			}
		}[n](t);
}
function Dr(e, t, n) {
	pn(e, be);
	let r = !t.includes('in') && !t.includes('out') && !n,
		i = r || t.includes('in') || ['enter'].includes(n),
		o = r || t.includes('out') || ['leave'].includes(n);
	t.includes('in') && !r && (t = t.filter((h, x) => x < t.indexOf('out'))),
		t.includes('out') && !r && (t = t.filter((h, x) => x > t.indexOf('out')));
	let s = !t.includes('opacity') && !t.includes('scale'),
		a = s || t.includes('opacity'),
		u = s || t.includes('scale'),
		c = a ? 0 : 1,
		l = u ? X(t, 'scale', 95) / 100 : 1,
		d = X(t, 'delay', 0) / 1e3,
		p = X(t, 'origin', 'center'),
		y = 'opacity, transform',
		M = X(t, 'duration', 150) / 1e3,
		ae = X(t, 'duration', 75) / 1e3,
		f = 'cubic-bezier(0.4, 0.0, 0.2, 1)';
	i &&
		((e._x_transition.enter.during = {
			transformOrigin: p,
			transitionDelay: `${d}s`,
			transitionProperty: y,
			transitionDuration: `${M}s`,
			transitionTimingFunction: f
		}),
		(e._x_transition.enter.start = { opacity: c, transform: `scale(${l})` }),
		(e._x_transition.enter.end = { opacity: 1, transform: 'scale(1)' })),
		o &&
			((e._x_transition.leave.during = {
				transformOrigin: p,
				transitionDelay: `${d}s`,
				transitionProperty: y,
				transitionDuration: `${ae}s`,
				transitionTimingFunction: f
			}),
			(e._x_transition.leave.start = { opacity: 1, transform: 'scale(1)' }),
			(e._x_transition.leave.end = { opacity: c, transform: `scale(${l})` }));
}
function pn(e, t, n = {}) {
	e._x_transition ||
		(e._x_transition = {
			enter: { during: n, start: n, end: n },
			leave: { during: n, start: n, end: n },
			in(r = () => {}, i = () => {}) {
				qe(e, t, { during: this.enter.during, start: this.enter.start, end: this.enter.end }, r, i);
			},
			out(r = () => {}, i = () => {}) {
				qe(e, t, { during: this.leave.during, start: this.leave.start, end: this.leave.end }, r, i);
			}
		});
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function (e, t, n, r) {
	const i = document.visibilityState === 'visible' ? requestAnimationFrame : setTimeout;
	let o = () => i(n);
	if (t) {
		e._x_transition && (e._x_transition.enter || e._x_transition.leave)
			? e._x_transition.enter &&
				(Object.entries(e._x_transition.enter.during).length ||
					Object.entries(e._x_transition.enter.start).length ||
					Object.entries(e._x_transition.enter.end).length)
				? e._x_transition.in(n)
				: o()
			: e._x_transition
				? e._x_transition.in(n)
				: o();
		return;
	}
	(e._x_hidePromise = e._x_transition
		? new Promise((s, a) => {
				e._x_transition.out(
					() => {},
					() => s(r)
				),
					e._x_transitioning &&
						e._x_transitioning.beforeCancel(() => a({ isFromCancelledTransition: !0 }));
			})
		: Promise.resolve(r)),
		queueMicrotask(() => {
			let s = _n(e);
			s
				? (s._x_hideChildren || (s._x_hideChildren = []), s._x_hideChildren.push(e))
				: i(() => {
						let a = (u) => {
							let c = Promise.all([u._x_hidePromise, ...(u._x_hideChildren || []).map(a)]).then(
								([l]) => l?.()
							);
							return delete u._x_hidePromise, delete u._x_hideChildren, c;
						};
						a(e).catch((u) => {
							if (!u.isFromCancelledTransition) throw u;
						});
					});
		});
};
function _n(e) {
	let t = e.parentNode;
	if (t) return t._x_hidePromise ? t : _n(t);
}
function qe(e, t, { during: n, start: r, end: i } = {}, o = () => {}, s = () => {}) {
	if (
		(e._x_transitioning && e._x_transitioning.cancel(),
		Object.keys(n).length === 0 && Object.keys(r).length === 0 && Object.keys(i).length === 0)
	) {
		o(), s();
		return;
	}
	let a, u, c;
	Br(e, {
		start() {
			a = t(e, r);
		},
		during() {
			u = t(e, n);
		},
		before: o,
		end() {
			a(), (c = t(e, i));
		},
		after: s,
		cleanup() {
			u(), c();
		}
	});
}
function Br(e, t) {
	let n,
		r,
		i,
		o = ze(() => {
			g(() => {
				(n = !0),
					r || t.before(),
					i || (t.end(), He()),
					t.after(),
					e.isConnected && t.cleanup(),
					delete e._x_transitioning;
			});
		});
	(e._x_transitioning = {
		beforeCancels: [],
		beforeCancel(s) {
			this.beforeCancels.push(s);
		},
		cancel: ze(function () {
			for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
			o();
		}),
		finish: o
	}),
		g(() => {
			t.start(), t.during();
		}),
		Lr(),
		requestAnimationFrame(() => {
			if (n) return;
			let s =
					Number(getComputedStyle(e).transitionDuration.replace(/,.*/, '').replace('s', '')) * 1e3,
				a = Number(getComputedStyle(e).transitionDelay.replace(/,.*/, '').replace('s', '')) * 1e3;
			s === 0 && (s = Number(getComputedStyle(e).animationDuration.replace('s', '')) * 1e3),
				g(() => {
					t.before();
				}),
				(r = !0),
				requestAnimationFrame(() => {
					n ||
						(g(() => {
							t.end();
						}),
						He(),
						setTimeout(e._x_transitioning.finish, s + a),
						(i = !0));
				});
		});
}
function X(e, t, n) {
	if (e.indexOf(t) === -1) return n;
	const r = e[e.indexOf(t) + 1];
	if (!r || (t === 'scale' && isNaN(r))) return n;
	if (t === 'duration' || t === 'delay') {
		let i = r.match(/([0-9]+)ms/);
		if (i) return i[1];
	}
	return t === 'origin' &&
		['top', 'right', 'left', 'center', 'bottom'].includes(e[e.indexOf(t) + 2])
		? [r, e[e.indexOf(t) + 2]].join(' ')
		: r;
}
var I = !1;
function $(e, t = () => {}) {
	return (...n) => (I ? t(...n) : e(...n));
}
function Kr(e) {
	return (...t) => I && e(...t);
}
var hn = [];
function we(e) {
	hn.push(e);
}
function Hr(e, t) {
	hn.forEach((n) => n(e, t)),
		(I = !0),
		gn(() => {
			C(t, (n, r) => {
				r(n, () => {});
			});
		}),
		(I = !1);
}
var We = !1;
function zr(e, t) {
	t._x_dataStack || (t._x_dataStack = e._x_dataStack),
		(I = !0),
		(We = !0),
		gn(() => {
			qr(t);
		}),
		(I = !1),
		(We = !1);
}
function qr(e) {
	let t = !1;
	C(e, (r, i) => {
		D(r, (o, s) => {
			if (t && Tr(o)) return s();
			(t = !0), i(o, s);
		});
	});
}
function gn(e) {
	let t = B;
	mt((n, r) => {
		let i = t(n);
		return W(i), () => {};
	}),
		e(),
		mt(t);
}
function xn(e, t, n, r = []) {
	switch (
		(e._x_bindings || (e._x_bindings = q({})),
		(e._x_bindings[t] = n),
		(t = r.includes('camel') ? Zr(t) : t),
		t)
	) {
		case 'value':
			Wr(e, n);
			break;
		case 'style':
			Vr(e, n);
			break;
		case 'class':
			Ur(e, n);
			break;
		case 'selected':
		case 'checked':
			Jr(e, t, n);
			break;
		default:
			vn(e, t, n);
			break;
	}
}
function Wr(e, t) {
	if (bn(e))
		e.attributes.value === void 0 && (e.value = t),
			window.fromModel &&
				(typeof t == 'boolean' ? (e.checked = _e(e.value) === t) : (e.checked = Et(e.value, t)));
	else if (lt(e))
		Number.isInteger(t)
			? (e.value = t)
			: !Array.isArray(t) && typeof t != 'boolean' && ![null, void 0].includes(t)
				? (e.value = String(t))
				: Array.isArray(t)
					? (e.checked = t.some((n) => Et(n, e.value)))
					: (e.checked = !!t);
	else if (e.tagName === 'SELECT') Xr(e, t);
	else {
		if (e.value === t) return;
		e.value = t === void 0 ? '' : t;
	}
}
function Ur(e, t) {
	e._x_undoAddedClasses && e._x_undoAddedClasses(), (e._x_undoAddedClasses = ct(e, t));
}
function Vr(e, t) {
	e._x_undoAddedStyles && e._x_undoAddedStyles(), (e._x_undoAddedStyles = be(e, t));
}
function Jr(e, t, n) {
	vn(e, t, n), Gr(e, t, n);
}
function vn(e, t, n) {
	[null, void 0, !1].includes(n) && ei(t) ? e.removeAttribute(t) : (yn(t) && (n = t), Yr(e, t, n));
}
function Yr(e, t, n) {
	e.getAttribute(t) != n && e.setAttribute(t, n);
}
function Gr(e, t, n) {
	e[t] !== n && (e[t] = n);
}
function Xr(e, t) {
	const n = [].concat(t).map((r) => r + '');
	Array.from(e.options).forEach((r) => {
		r.selected = n.includes(r.value);
	});
}
function Zr(e) {
	return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase());
}
function Et(e, t) {
	return e == t;
}
function _e(e) {
	return [1, '1', 'true', 'on', 'yes', !0].includes(e)
		? !0
		: [0, '0', 'false', 'off', 'no', !1].includes(e)
			? !1
			: e
				? !!e
				: null;
}
var Qr = new Set([
	'allowfullscreen',
	'async',
	'autofocus',
	'autoplay',
	'checked',
	'controls',
	'default',
	'defer',
	'disabled',
	'formnovalidate',
	'inert',
	'ismap',
	'itemscope',
	'loop',
	'multiple',
	'muted',
	'nomodule',
	'novalidate',
	'open',
	'playsinline',
	'readonly',
	'required',
	'reversed',
	'selected',
	'shadowrootclonable',
	'shadowrootdelegatesfocus',
	'shadowrootserializable'
]);
function yn(e) {
	return Qr.has(e);
}
function ei(e) {
	return !['aria-pressed', 'aria-checked', 'aria-expanded', 'aria-selected'].includes(e);
}
function ti(e, t, n) {
	return e._x_bindings && e._x_bindings[t] !== void 0 ? e._x_bindings[t] : mn(e, t, n);
}
function ni(e, t, n, r = !0) {
	if (e._x_bindings && e._x_bindings[t] !== void 0) return e._x_bindings[t];
	if (e._x_inlineBindings && e._x_inlineBindings[t] !== void 0) {
		let i = e._x_inlineBindings[t];
		return (i.extract = r), Jt(() => N(e, i.expression));
	}
	return mn(e, t, n);
}
function mn(e, t, n) {
	let r = e.getAttribute(t);
	return r === null
		? typeof n == 'function'
			? n()
			: n
		: r === ''
			? !0
			: yn(t)
				? !![t, 'true'].includes(r)
				: r;
}
function lt(e) {
	return e.type === 'checkbox' || e.localName === 'ui-checkbox' || e.localName === 'ui-switch';
}
function bn(e) {
	return e.type === 'radio' || e.localName === 'ui-radio';
}
function wn(e, t) {
	var n;
	return function () {
		var r = this,
			i = arguments,
			o = function () {
				(n = null), e.apply(r, i);
			};
		clearTimeout(n), (n = setTimeout(o, t));
	};
}
function En(e, t) {
	let n;
	return function () {
		let r = this,
			i = arguments;
		n || (e.apply(r, i), (n = !0), setTimeout(() => (n = !1), t));
	};
}
function Sn({ get: e, set: t }, { get: n, set: r }) {
	let i = !0,
		o,
		s = B(() => {
			let a = e(),
				u = n();
			if (i) r(Te(a)), (i = !1);
			else {
				let c = JSON.stringify(a),
					l = JSON.stringify(u);
				c !== o ? r(Te(a)) : c !== l && t(Te(u));
			}
			(o = JSON.stringify(e())), JSON.stringify(n());
		});
	return () => {
		W(s);
	};
}
function Te(e) {
	return typeof e == 'object' ? JSON.parse(JSON.stringify(e)) : e;
}
function ri(e) {
	(Array.isArray(e) ? e : [e]).forEach((n) => n(se));
}
var L = {},
	St = !1;
function ii(e, t) {
	if ((St || ((L = q(L)), (St = !0)), t === void 0)) return L[e];
	(L[e] = t),
		Wt(L[e]),
		typeof t == 'object' &&
			t !== null &&
			t.hasOwnProperty('init') &&
			typeof t.init == 'function' &&
			L[e].init();
}
function oi() {
	return L;
}
var An = {};
function si(e, t) {
	let n = typeof t != 'function' ? () => t : t;
	return e instanceof Element ? On(e, n()) : ((An[e] = n), () => {});
}
function ai(e) {
	return (
		Object.entries(An).forEach(([t, n]) => {
			Object.defineProperty(e, t, {
				get() {
					return (...r) => n(...r);
				}
			});
		}),
		e
	);
}
function On(e, t, n) {
	let r = [];
	for (; r.length; ) r.pop()();
	let i = Object.entries(t).map(([s, a]) => ({ name: s, value: a })),
		o = Xt(i);
	return (
		(i = i.map((s) =>
			o.find((a) => a.name === s.name) ? { name: `x-bind:${s.name}`, value: `"${s.value}"` } : s
		)),
		it(e, i, n).map((s) => {
			r.push(s.runCleanups), s();
		}),
		() => {
			for (; r.length; ) r.pop()();
		}
	);
}
var Cn = {};
function ui(e, t) {
	Cn[e] = t;
}
function ci(e, t) {
	return (
		Object.entries(Cn).forEach(([n, r]) => {
			Object.defineProperty(e, n, {
				get() {
					return (...i) => r.bind(t)(...i);
				},
				enumerable: !1
			});
		}),
		e
	);
}
var li = {
		get reactive() {
			return q;
		},
		get release() {
			return W;
		},
		get effect() {
			return B;
		},
		get raw() {
			return jt;
		},
		version: '3.14.8',
		flushAndStopDeferringMutations: dr,
		dontAutoEvaluateFunctions: Jt,
		disableEffectScheduling: or,
		startObservingMutations: et,
		stopObservingMutations: zt,
		setReactivityEngine: sr,
		onAttributeRemoved: Kt,
		onAttributesAdded: Bt,
		closestDataStack: H,
		skipDuringClone: $,
		onlyDuringClone: Kr,
		addRootSelector: ln,
		addInitSelector: fn,
		interceptClone: we,
		addScopeToNode: ie,
		deferMutations: fr,
		mapAttributes: ot,
		evaluateLater: b,
		interceptInit: Ir,
		setEvaluator: vr,
		mergeProxies: oe,
		extractProp: ni,
		findClosest: V,
		onElRemoved: Xe,
		closestRoot: me,
		destroyTree: J,
		interceptor: Ut,
		transition: qe,
		setStyles: be,
		mutateDom: g,
		directive: v,
		entangle: Sn,
		throttle: En,
		debounce: wn,
		evaluate: N,
		initTree: C,
		nextTick: ut,
		prefixed: U,
		prefix: wr,
		plugin: ri,
		magic: A,
		store: ii,
		start: Mr,
		clone: zr,
		cloneNode: Hr,
		bound: ti,
		$data: qt,
		watch: Nt,
		walk: D,
		data: ui,
		bind: si
	},
	se = li;
function fi(e, t) {
	const n = Object.create(null),
		r = e.split(',');
	for (let i = 0; i < r.length; i++) n[r[i]] = !0;
	return (i) => !!n[i];
}
var di = Object.freeze({}),
	pi = Object.prototype.hasOwnProperty,
	Ee = (e, t) => pi.call(e, t),
	k = Array.isArray,
	te = (e) => Mn(e) === '[object Map]',
	_i = (e) => typeof e == 'string',
	ft = (e) => typeof e == 'symbol',
	Se = (e) => e !== null && typeof e == 'object',
	hi = Object.prototype.toString,
	Mn = (e) => hi.call(e),
	Tn = (e) => Mn(e).slice(8, -1),
	dt = (e) => _i(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
	gi = (e) => {
		const t = Object.create(null);
		return (n) => t[n] || (t[n] = e(n));
	},
	xi = gi((e) => e.charAt(0).toUpperCase() + e.slice(1)),
	In = (e, t) => e !== t && (e === e || t === t),
	Ue = new WeakMap(),
	Z = [],
	O,
	F = Symbol('iterate'),
	Ve = Symbol('Map key iterate');
function vi(e) {
	return e && e._isEffect === !0;
}
function yi(e, t = di) {
	vi(e) && (e = e.raw);
	const n = wi(e, t);
	return t.lazy || n(), n;
}
function mi(e) {
	e.active && (Pn(e), e.options.onStop && e.options.onStop(), (e.active = !1));
}
var bi = 0;
function wi(e, t) {
	const n = function () {
		if (!n.active) return e();
		if (!Z.includes(n)) {
			Pn(n);
			try {
				return Si(), Z.push(n), (O = n), e();
			} finally {
				Z.pop(), $n(), (O = Z[Z.length - 1]);
			}
		}
	};
	return (
		(n.id = bi++),
		(n.allowRecurse = !!t.allowRecurse),
		(n._isEffect = !0),
		(n.active = !0),
		(n.raw = e),
		(n.deps = []),
		(n.options = t),
		n
	);
}
function Pn(e) {
	const { deps: t } = e;
	if (t.length) {
		for (let n = 0; n < t.length; n++) t[n].delete(e);
		t.length = 0;
	}
}
var z = !0,
	pt = [];
function Ei() {
	pt.push(z), (z = !1);
}
function Si() {
	pt.push(z), (z = !0);
}
function $n() {
	const e = pt.pop();
	z = e === void 0 ? !0 : e;
}
function S(e, t, n) {
	if (!z || O === void 0) return;
	let r = Ue.get(e);
	r || Ue.set(e, (r = new Map()));
	let i = r.get(n);
	i || r.set(n, (i = new Set())),
		i.has(O) ||
			(i.add(O),
			O.deps.push(i),
			O.options.onTrack && O.options.onTrack({ effect: O, target: e, type: t, key: n }));
}
function P(e, t, n, r, i, o) {
	const s = Ue.get(e);
	if (!s) return;
	const a = new Set(),
		u = (l) => {
			l &&
				l.forEach((d) => {
					(d !== O || d.allowRecurse) && a.add(d);
				});
		};
	if (t === 'clear') s.forEach(u);
	else if (n === 'length' && k(e))
		s.forEach((l, d) => {
			(d === 'length' || d >= r) && u(l);
		});
	else
		switch ((n !== void 0 && u(s.get(n)), t)) {
			case 'add':
				k(e) ? dt(n) && u(s.get('length')) : (u(s.get(F)), te(e) && u(s.get(Ve)));
				break;
			case 'delete':
				k(e) || (u(s.get(F)), te(e) && u(s.get(Ve)));
				break;
			case 'set':
				te(e) && u(s.get(F));
				break;
		}
	const c = (l) => {
		l.options.onTrigger &&
			l.options.onTrigger({
				effect: l,
				target: e,
				key: n,
				type: t,
				newValue: r,
				oldValue: i,
				oldTarget: o
			}),
			l.options.scheduler ? l.options.scheduler(l) : l();
	};
	a.forEach(c);
}
var Ai = fi('__proto__,__v_isRef,__isVue'),
	Ln = new Set(
		Object.getOwnPropertyNames(Symbol)
			.map((e) => Symbol[e])
			.filter(ft)
	),
	Oi = Rn(),
	Ci = Rn(!0),
	At = Mi();
function Mi() {
	const e = {};
	return (
		['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
			e[t] = function (...n) {
				const r = _(this);
				for (let o = 0, s = this.length; o < s; o++) S(r, 'get', o + '');
				const i = r[t](...n);
				return i === -1 || i === !1 ? r[t](...n.map(_)) : i;
			};
		}),
		['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
			e[t] = function (...n) {
				Ei();
				const r = _(this)[t].apply(this, n);
				return $n(), r;
			};
		}),
		e
	);
}
function Rn(e = !1, t = !1) {
	return function (r, i, o) {
		if (i === '__v_isReactive') return !e;
		if (i === '__v_isReadonly') return e;
		if (i === '__v_raw' && o === (e ? (t ? Hi : Fn) : t ? Ki : kn).get(r)) return r;
		const s = k(r);
		if (!e && s && Ee(At, i)) return Reflect.get(At, i, o);
		const a = Reflect.get(r, i, o);
		return (ft(i) ? Ln.has(i) : Ai(i)) || (e || S(r, 'get', i), t)
			? a
			: Je(a)
				? !s || !dt(i)
					? a.value
					: a
				: Se(a)
					? e
						? Dn(a)
						: xt(a)
					: a;
	};
}
var Ti = Ii();
function Ii(e = !1) {
	return function (n, r, i, o) {
		let s = n[r];
		if (!e && ((i = _(i)), (s = _(s)), !k(n) && Je(s) && !Je(i))) return (s.value = i), !0;
		const a = k(n) && dt(r) ? Number(r) < n.length : Ee(n, r),
			u = Reflect.set(n, r, i, o);
		return n === _(o) && (a ? In(i, s) && P(n, 'set', r, i, s) : P(n, 'add', r, i)), u;
	};
}
function Pi(e, t) {
	const n = Ee(e, t),
		r = e[t],
		i = Reflect.deleteProperty(e, t);
	return i && n && P(e, 'delete', t, void 0, r), i;
}
function $i(e, t) {
	const n = Reflect.has(e, t);
	return (!ft(t) || !Ln.has(t)) && S(e, 'has', t), n;
}
function Li(e) {
	return S(e, 'iterate', k(e) ? 'length' : F), Reflect.ownKeys(e);
}
var Ri = { get: Oi, set: Ti, deleteProperty: Pi, has: $i, ownKeys: Li },
	ji = {
		get: Ci,
		set(e, t) {
			return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
		},
		deleteProperty(e, t) {
			return (
				console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0
			);
		}
	},
	_t = (e) => (Se(e) ? xt(e) : e),
	ht = (e) => (Se(e) ? Dn(e) : e),
	gt = (e) => e,
	Ae = (e) => Reflect.getPrototypeOf(e);
function ue(e, t, n = !1, r = !1) {
	e = e.__v_raw;
	const i = _(e),
		o = _(t);
	t !== o && !n && S(i, 'get', t), !n && S(i, 'get', o);
	const { has: s } = Ae(i),
		a = r ? gt : n ? ht : _t;
	if (s.call(i, t)) return a(e.get(t));
	if (s.call(i, o)) return a(e.get(o));
	e !== i && e.get(t);
}
function ce(e, t = !1) {
	const n = this.__v_raw,
		r = _(n),
		i = _(e);
	return (
		e !== i && !t && S(r, 'has', e), !t && S(r, 'has', i), e === i ? n.has(e) : n.has(e) || n.has(i)
	);
}
function le(e, t = !1) {
	return (e = e.__v_raw), !t && S(_(e), 'iterate', F), Reflect.get(e, 'size', e);
}
function Ot(e) {
	e = _(e);
	const t = _(this);
	return Ae(t).has.call(t, e) || (t.add(e), P(t, 'add', e, e)), this;
}
function Ct(e, t) {
	t = _(t);
	const n = _(this),
		{ has: r, get: i } = Ae(n);
	let o = r.call(n, e);
	o ? Nn(n, r, e) : ((e = _(e)), (o = r.call(n, e)));
	const s = i.call(n, e);
	return n.set(e, t), o ? In(t, s) && P(n, 'set', e, t, s) : P(n, 'add', e, t), this;
}
function Mt(e) {
	const t = _(this),
		{ has: n, get: r } = Ae(t);
	let i = n.call(t, e);
	i ? Nn(t, n, e) : ((e = _(e)), (i = n.call(t, e)));
	const o = r ? r.call(t, e) : void 0,
		s = t.delete(e);
	return i && P(t, 'delete', e, void 0, o), s;
}
function Tt() {
	const e = _(this),
		t = e.size !== 0,
		n = te(e) ? new Map(e) : new Set(e),
		r = e.clear();
	return t && P(e, 'clear', void 0, void 0, n), r;
}
function fe(e, t) {
	return function (r, i) {
		const o = this,
			s = o.__v_raw,
			a = _(s),
			u = t ? gt : e ? ht : _t;
		return !e && S(a, 'iterate', F), s.forEach((c, l) => r.call(i, u(c), u(l), o));
	};
}
function de(e, t, n) {
	return function (...r) {
		const i = this.__v_raw,
			o = _(i),
			s = te(o),
			a = e === 'entries' || (e === Symbol.iterator && s),
			u = e === 'keys' && s,
			c = i[e](...r),
			l = n ? gt : t ? ht : _t;
		return (
			!t && S(o, 'iterate', u ? Ve : F),
			{
				next() {
					const { value: d, done: p } = c.next();
					return p ? { value: d, done: p } : { value: a ? [l(d[0]), l(d[1])] : l(d), done: p };
				},
				[Symbol.iterator]() {
					return this;
				}
			}
		);
	};
}
function T(e) {
	return function (...t) {
		{
			const n = t[0] ? `on key "${t[0]}" ` : '';
			console.warn(`${xi(e)} operation ${n}failed: target is readonly.`, _(this));
		}
		return e === 'delete' ? !1 : this;
	};
}
function Ni() {
	const e = {
			get(o) {
				return ue(this, o);
			},
			get size() {
				return le(this);
			},
			has: ce,
			add: Ot,
			set: Ct,
			delete: Mt,
			clear: Tt,
			forEach: fe(!1, !1)
		},
		t = {
			get(o) {
				return ue(this, o, !1, !0);
			},
			get size() {
				return le(this);
			},
			has: ce,
			add: Ot,
			set: Ct,
			delete: Mt,
			clear: Tt,
			forEach: fe(!1, !0)
		},
		n = {
			get(o) {
				return ue(this, o, !0);
			},
			get size() {
				return le(this, !0);
			},
			has(o) {
				return ce.call(this, o, !0);
			},
			add: T('add'),
			set: T('set'),
			delete: T('delete'),
			clear: T('clear'),
			forEach: fe(!0, !1)
		},
		r = {
			get(o) {
				return ue(this, o, !0, !0);
			},
			get size() {
				return le(this, !0);
			},
			has(o) {
				return ce.call(this, o, !0);
			},
			add: T('add'),
			set: T('set'),
			delete: T('delete'),
			clear: T('clear'),
			forEach: fe(!0, !0)
		};
	return (
		['keys', 'values', 'entries', Symbol.iterator].forEach((o) => {
			(e[o] = de(o, !1, !1)),
				(n[o] = de(o, !0, !1)),
				(t[o] = de(o, !1, !0)),
				(r[o] = de(o, !0, !0));
		}),
		[e, n, t, r]
	);
}
var [ki, Fi, xo, vo] = Ni();
function jn(e, t) {
	const n = e ? Fi : ki;
	return (r, i, o) =>
		i === '__v_isReactive'
			? !e
			: i === '__v_isReadonly'
				? e
				: i === '__v_raw'
					? r
					: Reflect.get(Ee(n, i) && i in r ? n : r, i, o);
}
var Di = { get: jn(!1) },
	Bi = { get: jn(!0) };
function Nn(e, t, n) {
	const r = _(n);
	if (r !== n && t.call(e, r)) {
		const i = Tn(e);
		console.warn(
			`Reactive ${i} contains both the raw and reactive versions of the same object${i === 'Map' ? ' as keys' : ''}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
		);
	}
}
var kn = new WeakMap(),
	Ki = new WeakMap(),
	Fn = new WeakMap(),
	Hi = new WeakMap();
function zi(e) {
	switch (e) {
		case 'Object':
		case 'Array':
			return 1;
		case 'Map':
		case 'Set':
		case 'WeakMap':
		case 'WeakSet':
			return 2;
		default:
			return 0;
	}
}
function qi(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : zi(Tn(e));
}
function xt(e) {
	return e && e.__v_isReadonly ? e : Bn(e, !1, Ri, Di, kn);
}
function Dn(e) {
	return Bn(e, !0, ji, Bi, Fn);
}
function Bn(e, t, n, r, i) {
	if (!Se(e)) return console.warn(`value cannot be made reactive: ${String(e)}`), e;
	if (e.__v_raw && !(t && e.__v_isReactive)) return e;
	const o = i.get(e);
	if (o) return o;
	const s = qi(e);
	if (s === 0) return e;
	const a = new Proxy(e, s === 2 ? r : n);
	return i.set(e, a), a;
}
function _(e) {
	return (e && _(e.__v_raw)) || e;
}
function Je(e) {
	return !!(e && e.__v_isRef === !0);
}
A('nextTick', () => ut);
A('dispatch', (e) => ee.bind(ee, e));
A('watch', (e, { evaluateLater: t, cleanup: n }) => (r, i) => {
	let o = t(r),
		a = Nt(() => {
			let u;
			return o((c) => (u = c)), u;
		}, i);
	n(a);
});
A('store', oi);
A('data', (e) => qt(e));
A('root', (e) => me(e));
A('refs', (e) => (e._x_refs_proxy || (e._x_refs_proxy = oe(Wi(e))), e._x_refs_proxy));
function Wi(e) {
	let t = [];
	return (
		V(e, (n) => {
			n._x_refs && t.push(n._x_refs);
		}),
		t
	);
}
var Ie = {};
function Kn(e) {
	return Ie[e] || (Ie[e] = 0), ++Ie[e];
}
function Ui(e, t) {
	return V(e, (n) => {
		if (n._x_ids && n._x_ids[t]) return !0;
	});
}
function Vi(e, t) {
	e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = Kn(t));
}
A('id', (e, { cleanup: t }) => (n, r = null) => {
	let i = `${n}${r ? `-${r}` : ''}`;
	return Ji(e, i, t, () => {
		let o = Ui(e, n),
			s = o ? o._x_ids[n] : Kn(n);
		return r ? `${n}-${s}-${r}` : `${n}-${s}`;
	});
});
we((e, t) => {
	e._x_id && (t._x_id = e._x_id);
});
function Ji(e, t, n, r) {
	if ((e._x_id || (e._x_id = {}), e._x_id[t])) return e._x_id[t];
	let i = r();
	return (
		(e._x_id[t] = i),
		n(() => {
			delete e._x_id[t];
		}),
		i
	);
}
A('el', (e) => e);
Hn('Focus', 'focus', 'focus');
Hn('Persist', 'persist', 'persist');
function Hn(e, t, n) {
	A(t, (r) =>
		E(
			`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,
			r
		)
	);
}
v('modelable', (e, { expression: t }, { effect: n, evaluateLater: r, cleanup: i }) => {
	let o = r(t),
		s = () => {
			let l;
			return o((d) => (l = d)), l;
		},
		a = r(`${t} = __placeholder`),
		u = (l) => a(() => {}, { scope: { __placeholder: l } }),
		c = s();
	u(c),
		queueMicrotask(() => {
			if (!e._x_model) return;
			e._x_removeModelListeners.default();
			let l = e._x_model.get,
				d = e._x_model.set,
				p = Sn(
					{
						get() {
							return l();
						},
						set(y) {
							d(y);
						}
					},
					{
						get() {
							return s();
						},
						set(y) {
							u(y);
						}
					}
				);
			i(p);
		});
});
v('teleport', (e, { modifiers: t, expression: n }, { cleanup: r }) => {
	e.tagName.toLowerCase() !== 'template' && E('x-teleport can only be used on a <template> tag', e);
	let i = It(n),
		o = e.content.cloneNode(!0).firstElementChild;
	(e._x_teleport = o),
		(o._x_teleportBack = e),
		e.setAttribute('data-teleport-template', !0),
		o.setAttribute('data-teleport-target', !0),
		e._x_forwardEvents &&
			e._x_forwardEvents.forEach((a) => {
				o.addEventListener(a, (u) => {
					u.stopPropagation(), e.dispatchEvent(new u.constructor(u.type, u));
				});
			}),
		ie(o, {}, e);
	let s = (a, u, c) => {
		c.includes('prepend')
			? u.parentNode.insertBefore(a, u)
			: c.includes('append')
				? u.parentNode.insertBefore(a, u.nextSibling)
				: u.appendChild(a);
	};
	g(() => {
		s(o, i, t),
			$(() => {
				C(o);
			})();
	}),
		(e._x_teleportPutBack = () => {
			let a = It(n);
			g(() => {
				s(e._x_teleport, a, t);
			});
		}),
		r(() =>
			g(() => {
				o.remove(), J(o);
			})
		);
});
var Yi = document.createElement('div');
function It(e) {
	let t = $(
		() => document.querySelector(e),
		() => Yi
	)();
	return t || E(`Cannot find x-teleport element for selector: "${e}"`), t;
}
var zn = () => {};
zn.inline = (e, { modifiers: t }, { cleanup: n }) => {
	t.includes('self') ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
		n(() => {
			t.includes('self') ? delete e._x_ignoreSelf : delete e._x_ignore;
		});
};
v('ignore', zn);
v(
	'effect',
	$((e, { expression: t }, { effect: n }) => {
		n(b(e, t));
	})
);
function Ye(e, t, n, r) {
	let i = e,
		o = (u) => r(u),
		s = {},
		a = (u, c) => (l) => c(u, l);
	if (
		(n.includes('dot') && (t = Gi(t)),
		n.includes('camel') && (t = Xi(t)),
		n.includes('passive') && (s.passive = !0),
		n.includes('capture') && (s.capture = !0),
		n.includes('window') && (i = window),
		n.includes('document') && (i = document),
		n.includes('debounce'))
	) {
		let u = n[n.indexOf('debounce') + 1] || 'invalid-wait',
			c = ve(u.split('ms')[0]) ? Number(u.split('ms')[0]) : 250;
		o = wn(o, c);
	}
	if (n.includes('throttle')) {
		let u = n[n.indexOf('throttle') + 1] || 'invalid-wait',
			c = ve(u.split('ms')[0]) ? Number(u.split('ms')[0]) : 250;
		o = En(o, c);
	}
	return (
		n.includes('prevent') &&
			(o = a(o, (u, c) => {
				c.preventDefault(), u(c);
			})),
		n.includes('stop') &&
			(o = a(o, (u, c) => {
				c.stopPropagation(), u(c);
			})),
		n.includes('once') &&
			(o = a(o, (u, c) => {
				u(c), i.removeEventListener(t, o, s);
			})),
		(n.includes('away') || n.includes('outside')) &&
			((i = document),
			(o = a(o, (u, c) => {
				e.contains(c.target) ||
					(c.target.isConnected !== !1 &&
						((e.offsetWidth < 1 && e.offsetHeight < 1) || (e._x_isShown !== !1 && u(c))));
			}))),
		n.includes('self') &&
			(o = a(o, (u, c) => {
				c.target === e && u(c);
			})),
		(Qi(t) || qn(t)) &&
			(o = a(o, (u, c) => {
				eo(c, n) || u(c);
			})),
		i.addEventListener(t, o, s),
		() => {
			i.removeEventListener(t, o, s);
		}
	);
}
function Gi(e) {
	return e.replace(/-/g, '.');
}
function Xi(e) {
	return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase());
}
function ve(e) {
	return !Array.isArray(e) && !isNaN(e);
}
function Zi(e) {
	return [' ', '_'].includes(e)
		? e
		: e
				.replace(/([a-z])([A-Z])/g, '$1-$2')
				.replace(/[_\s]/, '-')
				.toLowerCase();
}
function Qi(e) {
	return ['keydown', 'keyup'].includes(e);
}
function qn(e) {
	return ['contextmenu', 'click', 'mouse'].some((t) => e.includes(t));
}
function eo(e, t) {
	let n = t.filter(
		(o) =>
			![
				'window',
				'document',
				'prevent',
				'stop',
				'once',
				'capture',
				'self',
				'away',
				'outside',
				'passive'
			].includes(o)
	);
	if (n.includes('debounce')) {
		let o = n.indexOf('debounce');
		n.splice(o, ve((n[o + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1);
	}
	if (n.includes('throttle')) {
		let o = n.indexOf('throttle');
		n.splice(o, ve((n[o + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1);
	}
	if (n.length === 0 || (n.length === 1 && Pt(e.key).includes(n[0]))) return !1;
	const i = ['ctrl', 'shift', 'alt', 'meta', 'cmd', 'super'].filter((o) => n.includes(o));
	return (
		(n = n.filter((o) => !i.includes(o))),
		!(
			i.length > 0 &&
			i.filter((s) => ((s === 'cmd' || s === 'super') && (s = 'meta'), e[`${s}Key`])).length ===
				i.length &&
			(qn(e.type) || Pt(e.key).includes(n[0]))
		)
	);
}
function Pt(e) {
	if (!e) return [];
	e = Zi(e);
	let t = {
		ctrl: 'control',
		slash: '/',
		space: ' ',
		spacebar: ' ',
		cmd: 'meta',
		esc: 'escape',
		up: 'arrow-up',
		down: 'arrow-down',
		left: 'arrow-left',
		right: 'arrow-right',
		period: '.',
		comma: ',',
		equal: '=',
		minus: '-',
		underscore: '_'
	};
	return (
		(t[e] = e),
		Object.keys(t)
			.map((n) => {
				if (t[n] === e) return n;
			})
			.filter((n) => n)
	);
}
v('model', (e, { modifiers: t, expression: n }, { effect: r, cleanup: i }) => {
	let o = e;
	t.includes('parent') && (o = e.parentNode);
	let s = b(o, n),
		a;
	typeof n == 'string'
		? (a = b(o, `${n} = __placeholder`))
		: typeof n == 'function' && typeof n() == 'string'
			? (a = b(o, `${n()} = __placeholder`))
			: (a = () => {});
	let u = () => {
			let p;
			return s((y) => (p = y)), $t(p) ? p.get() : p;
		},
		c = (p) => {
			let y;
			s((M) => (y = M)), $t(y) ? y.set(p) : a(() => {}, { scope: { __placeholder: p } });
		};
	typeof n == 'string' &&
		e.type === 'radio' &&
		g(() => {
			e.hasAttribute('name') || e.setAttribute('name', n);
		});
	var l =
		e.tagName.toLowerCase() === 'select' ||
		['checkbox', 'radio'].includes(e.type) ||
		t.includes('lazy')
			? 'change'
			: 'input';
	let d = I
		? () => {}
		: Ye(e, l, t, (p) => {
				c(Pe(e, t, p, u()));
			});
	if (
		(t.includes('fill') &&
			([void 0, null, ''].includes(u()) ||
				(lt(e) && Array.isArray(u())) ||
				(e.tagName.toLowerCase() === 'select' && e.multiple)) &&
			c(Pe(e, t, { target: e }, u())),
		e._x_removeModelListeners || (e._x_removeModelListeners = {}),
		(e._x_removeModelListeners.default = d),
		i(() => e._x_removeModelListeners.default()),
		e.form)
	) {
		let p = Ye(e.form, 'reset', [], (y) => {
			ut(() => e._x_model && e._x_model.set(Pe(e, t, { target: e }, u())));
		});
		i(() => p());
	}
	(e._x_model = {
		get() {
			return u();
		},
		set(p) {
			c(p);
		}
	}),
		(e._x_forceModelUpdate = (p) => {
			p === void 0 && typeof n == 'string' && n.match(/\./) && (p = ''),
				(window.fromModel = !0),
				g(() => xn(e, 'value', p)),
				delete window.fromModel;
		}),
		r(() => {
			let p = u();
			(t.includes('unintrusive') && document.activeElement.isSameNode(e)) ||
				e._x_forceModelUpdate(p);
		});
});
function Pe(e, t, n, r) {
	return g(() => {
		if (n instanceof CustomEvent && n.detail !== void 0)
			return n.detail !== null && n.detail !== void 0 ? n.detail : n.target.value;
		if (lt(e))
			if (Array.isArray(r)) {
				let i = null;
				return (
					t.includes('number')
						? (i = $e(n.target.value))
						: t.includes('boolean')
							? (i = _e(n.target.value))
							: (i = n.target.value),
					n.target.checked ? (r.includes(i) ? r : r.concat([i])) : r.filter((o) => !to(o, i))
				);
			} else return n.target.checked;
		else {
			if (e.tagName.toLowerCase() === 'select' && e.multiple)
				return t.includes('number')
					? Array.from(n.target.selectedOptions).map((i) => {
							let o = i.value || i.text;
							return $e(o);
						})
					: t.includes('boolean')
						? Array.from(n.target.selectedOptions).map((i) => {
								let o = i.value || i.text;
								return _e(o);
							})
						: Array.from(n.target.selectedOptions).map((i) => i.value || i.text);
			{
				let i;
				return (
					bn(e) ? (n.target.checked ? (i = n.target.value) : (i = r)) : (i = n.target.value),
					t.includes('number')
						? $e(i)
						: t.includes('boolean')
							? _e(i)
							: t.includes('trim')
								? i.trim()
								: i
				);
			}
		}
	});
}
function $e(e) {
	let t = e ? parseFloat(e) : null;
	return no(t) ? t : e;
}
function to(e, t) {
	return e == t;
}
function no(e) {
	return !Array.isArray(e) && !isNaN(e);
}
function $t(e) {
	return (
		e !== null && typeof e == 'object' && typeof e.get == 'function' && typeof e.set == 'function'
	);
}
v('cloak', (e) => queueMicrotask(() => g(() => e.removeAttribute(U('cloak')))));
fn(() => `[${U('init')}]`);
v(
	'init',
	$((e, { expression: t }, { evaluate: n }) =>
		typeof t == 'string' ? !!t.trim() && n(t, {}, !1) : n(t, {}, !1)
	)
);
v('text', (e, { expression: t }, { effect: n, evaluateLater: r }) => {
	let i = r(t);
	n(() => {
		i((o) => {
			g(() => {
				e.textContent = o;
			});
		});
	});
});
v('html', (e, { expression: t }, { effect: n, evaluateLater: r }) => {
	let i = r(t);
	n(() => {
		i((o) => {
			g(() => {
				(e.innerHTML = o), (e._x_ignoreSelf = !0), C(e), delete e._x_ignoreSelf;
			});
		});
	});
});
ot(en(':', tn(U('bind:'))));
var Wn = (e, { value: t, modifiers: n, expression: r, original: i }, { effect: o, cleanup: s }) => {
	if (!t) {
		let u = {};
		ai(u),
			b(e, r)(
				(l) => {
					On(e, l, i);
				},
				{ scope: u }
			);
		return;
	}
	if (t === 'key') return ro(e, r);
	if (e._x_inlineBindings && e._x_inlineBindings[t] && e._x_inlineBindings[t].extract) return;
	let a = b(e, r);
	o(() =>
		a((u) => {
			u === void 0 && typeof r == 'string' && r.match(/\./) && (u = ''), g(() => xn(e, t, u, n));
		})
	),
		s(() => {
			e._x_undoAddedClasses && e._x_undoAddedClasses(),
				e._x_undoAddedStyles && e._x_undoAddedStyles();
		});
};
Wn.inline = (e, { value: t, modifiers: n, expression: r }) => {
	t &&
		(e._x_inlineBindings || (e._x_inlineBindings = {}),
		(e._x_inlineBindings[t] = { expression: r, extract: !1 }));
};
v('bind', Wn);
function ro(e, t) {
	e._x_keyExpression = t;
}
ln(() => `[${U('data')}]`);
v('data', (e, { expression: t }, { cleanup: n }) => {
	if (io(e)) return;
	t = t === '' ? '{}' : t;
	let r = {};
	Fe(r, e);
	let i = {};
	ci(i, r);
	let o = N(e, t, { scope: i });
	(o === void 0 || o === !0) && (o = {}), Fe(o, e);
	let s = q(o);
	Wt(s);
	let a = ie(e, s);
	s.init && N(e, s.init),
		n(() => {
			s.destroy && N(e, s.destroy), a();
		});
});
we((e, t) => {
	e._x_dataStack &&
		((t._x_dataStack = e._x_dataStack), t.setAttribute('data-has-alpine-state', !0));
});
function io(e) {
	return I ? (We ? !0 : e.hasAttribute('data-has-alpine-state')) : !1;
}
v('show', (e, { modifiers: t, expression: n }, { effect: r }) => {
	let i = b(e, n);
	e._x_doHide ||
		(e._x_doHide = () => {
			g(() => {
				e.style.setProperty('display', 'none', t.includes('important') ? 'important' : void 0);
			});
		}),
		e._x_doShow ||
			(e._x_doShow = () => {
				g(() => {
					e.style.length === 1 && e.style.display === 'none'
						? e.removeAttribute('style')
						: e.style.removeProperty('display');
				});
			});
	let o = () => {
			e._x_doHide(), (e._x_isShown = !1);
		},
		s = () => {
			e._x_doShow(), (e._x_isShown = !0);
		},
		a = () => setTimeout(s),
		u = ze(
			(d) => (d ? s() : o()),
			(d) => {
				typeof e._x_toggleAndCascadeWithTransitions == 'function'
					? e._x_toggleAndCascadeWithTransitions(e, d, s, o)
					: d
						? a()
						: o();
			}
		),
		c,
		l = !0;
	r(() =>
		i((d) => {
			(!l && d === c) || (t.includes('immediate') && (d ? a() : o()), u(d), (c = d), (l = !1));
		})
	);
});
v('for', (e, { expression: t }, { effect: n, cleanup: r }) => {
	let i = so(t),
		o = b(e, i.items),
		s = b(e, e._x_keyExpression || 'index');
	(e._x_prevKeys = []),
		(e._x_lookup = {}),
		n(() => oo(e, i, o, s)),
		r(() => {
			Object.values(e._x_lookup).forEach((a) =>
				g(() => {
					J(a), a.remove();
				})
			),
				delete e._x_prevKeys,
				delete e._x_lookup;
		});
});
function oo(e, t, n, r) {
	let i = (s) => typeof s == 'object' && !Array.isArray(s),
		o = e;
	n((s) => {
		ao(s) && s >= 0 && (s = Array.from(Array(s).keys(), (f) => f + 1)), s === void 0 && (s = []);
		let a = e._x_lookup,
			u = e._x_prevKeys,
			c = [],
			l = [];
		if (i(s))
			s = Object.entries(s).map(([f, h]) => {
				let x = Lt(t, h, f, s);
				r(
					(m) => {
						l.includes(m) && E('Duplicate key on x-for', e), l.push(m);
					},
					{ scope: { index: f, ...x } }
				),
					c.push(x);
			});
		else
			for (let f = 0; f < s.length; f++) {
				let h = Lt(t, s[f], f, s);
				r(
					(x) => {
						l.includes(x) && E('Duplicate key on x-for', e), l.push(x);
					},
					{ scope: { index: f, ...h } }
				),
					c.push(h);
			}
		let d = [],
			p = [],
			y = [],
			M = [];
		for (let f = 0; f < u.length; f++) {
			let h = u[f];
			l.indexOf(h) === -1 && y.push(h);
		}
		u = u.filter((f) => !y.includes(f));
		let ae = 'template';
		for (let f = 0; f < l.length; f++) {
			let h = l[f],
				x = u.indexOf(h);
			if (x === -1) u.splice(f, 0, h), d.push([ae, f]);
			else if (x !== f) {
				let m = u.splice(f, 1)[0],
					w = u.splice(x - 1, 1)[0];
				u.splice(f, 0, w), u.splice(x, 0, m), p.push([m, w]);
			} else M.push(h);
			ae = h;
		}
		for (let f = 0; f < y.length; f++) {
			let h = y[f];
			h in a &&
				(g(() => {
					J(a[h]), a[h].remove();
				}),
				delete a[h]);
		}
		for (let f = 0; f < p.length; f++) {
			let [h, x] = p[f],
				m = a[h],
				w = a[x],
				K = document.createElement('div');
			g(() => {
				w || E('x-for ":key" is undefined or invalid', o, x, a),
					w.after(K),
					m.after(w),
					w._x_currentIfEl && w.after(w._x_currentIfEl),
					K.before(m),
					m._x_currentIfEl && m.after(m._x_currentIfEl),
					K.remove();
			}),
				w._x_refreshXForScope(c[l.indexOf(x)]);
		}
		for (let f = 0; f < d.length; f++) {
			let [h, x] = d[f],
				m = h === 'template' ? o : a[h];
			m._x_currentIfEl && (m = m._x_currentIfEl);
			let w = c[x],
				K = l[x],
				Y = document.importNode(o.content, !0).firstElementChild,
				yt = q(w);
			ie(Y, yt, o),
				(Y._x_refreshXForScope = (Xn) => {
					Object.entries(Xn).forEach(([Zn, Qn]) => {
						yt[Zn] = Qn;
					});
				}),
				g(() => {
					m.after(Y), $(() => C(Y))();
				}),
				typeof K == 'object' &&
					E('x-for key cannot be an object, it must be a string or an integer', o),
				(a[K] = Y);
		}
		for (let f = 0; f < M.length; f++) a[M[f]]._x_refreshXForScope(c[l.indexOf(M[f])]);
		o._x_prevKeys = l;
	});
}
function so(e) {
	let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
		n = /^\s*\(|\)\s*$/g,
		r = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
		i = e.match(r);
	if (!i) return;
	let o = {};
	o.items = i[2].trim();
	let s = i[1].replace(n, '').trim(),
		a = s.match(t);
	return (
		a
			? ((o.item = s.replace(t, '').trim()),
				(o.index = a[1].trim()),
				a[2] && (o.collection = a[2].trim()))
			: (o.item = s),
		o
	);
}
function Lt(e, t, n, r) {
	let i = {};
	return (
		/^\[.*\]$/.test(e.item) && Array.isArray(t)
			? e.item
					.replace('[', '')
					.replace(']', '')
					.split(',')
					.map((s) => s.trim())
					.forEach((s, a) => {
						i[s] = t[a];
					})
			: /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == 'object'
				? e.item
						.replace('{', '')
						.replace('}', '')
						.split(',')
						.map((s) => s.trim())
						.forEach((s) => {
							i[s] = t[s];
						})
				: (i[e.item] = t),
		e.index && (i[e.index] = n),
		e.collection && (i[e.collection] = r),
		i
	);
}
function ao(e) {
	return !Array.isArray(e) && !isNaN(e);
}
function Un() {}
Un.inline = (e, { expression: t }, { cleanup: n }) => {
	let r = me(e);
	r._x_refs || (r._x_refs = {}), (r._x_refs[t] = e), n(() => delete r._x_refs[t]);
};
v('ref', Un);
v('if', (e, { expression: t }, { effect: n, cleanup: r }) => {
	e.tagName.toLowerCase() !== 'template' && E('x-if can only be used on a <template> tag', e);
	let i = b(e, t),
		o = () => {
			if (e._x_currentIfEl) return e._x_currentIfEl;
			let a = e.content.cloneNode(!0).firstElementChild;
			return (
				ie(a, {}, e),
				g(() => {
					e.after(a), $(() => C(a))();
				}),
				(e._x_currentIfEl = a),
				(e._x_undoIf = () => {
					g(() => {
						J(a), a.remove();
					}),
						delete e._x_currentIfEl;
				}),
				a
			);
		},
		s = () => {
			e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf);
		};
	n(() =>
		i((a) => {
			a ? o() : s();
		})
	),
		r(() => e._x_undoIf && e._x_undoIf());
});
v('id', (e, { expression: t }, { evaluate: n }) => {
	n(t).forEach((i) => Vi(e, i));
});
we((e, t) => {
	e._x_ids && (t._x_ids = e._x_ids);
});
ot(en('@', tn(U('on:'))));
v(
	'on',
	$((e, { value: t, modifiers: n, expression: r }, { cleanup: i }) => {
		let o = r ? b(e, r) : () => {};
		e.tagName.toLowerCase() === 'template' &&
			(e._x_forwardEvents || (e._x_forwardEvents = []),
			e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
		let s = Ye(e, t, n, (a) => {
			o(() => {}, { scope: { $event: a }, params: [a] });
		});
		i(() => s());
	})
);
Oe('Collapse', 'collapse', 'collapse');
Oe('Intersect', 'intersect', 'intersect');
Oe('Focus', 'trap', 'focus');
Oe('Mask', 'mask', 'mask');
function Oe(e, t, n) {
	v(t, (r) =>
		E(
			`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,
			r
		)
	);
}
se.setEvaluator(Gt);
se.setReactivityEngine({ reactive: xt, effect: yi, release: mi, raw: _ });
var uo = se,
	Vn = uo;
const Jn = new Set(),
	ye = new WeakSet();
let Ge,
	Yn,
	Rt = !1;
function co(e) {
	Rt || ((Rt = !0), (Ge ??= !1), (Yn ??= 'hover'), lo(), fo(), po(), ho());
}
function lo() {
	for (const e of ['touchstart', 'mousedown'])
		document.body.addEventListener(
			e,
			(t) => {
				re(t.target, 'tap') && Ce(t.target.href, { ignoreSlowConnection: !0 });
			},
			{ passive: !0 }
		);
}
function fo() {
	let e;
	document.body.addEventListener(
		'focusin',
		(r) => {
			re(r.target, 'hover') && t(r);
		},
		{ passive: !0 }
	),
		document.body.addEventListener('focusout', n, { passive: !0 }),
		vt(() => {
			for (const r of document.getElementsByTagName('a'))
				ye.has(r) ||
					(re(r, 'hover') &&
						(ye.add(r),
						r.addEventListener('mouseenter', t, { passive: !0 }),
						r.addEventListener('mouseleave', n, { passive: !0 })));
		});
	function t(r) {
		const i = r.target.href;
		e && clearTimeout(e),
			(e = setTimeout(() => {
				Ce(i);
			}, 80));
	}
	function n() {
		e && (clearTimeout(e), (e = 0));
	}
}
function po() {
	let e;
	vt(() => {
		for (const t of document.getElementsByTagName('a'))
			ye.has(t) || (re(t, 'viewport') && (ye.add(t), (e ??= _o()), e.observe(t)));
	});
}
function _o() {
	const e = new WeakMap();
	return new IntersectionObserver((t, n) => {
		for (const r of t) {
			const i = r.target,
				o = e.get(i);
			r.isIntersecting
				? (o && clearTimeout(o),
					e.set(
						i,
						setTimeout(() => {
							n.unobserve(i), e.delete(i), Ce(i.href);
						}, 300)
					))
				: o && (clearTimeout(o), e.delete(i));
		}
	});
}
function ho() {
	vt(() => {
		for (const e of document.getElementsByTagName('a')) re(e, 'load') && Ce(e.href);
	});
}
function Ce(e, t) {
	e = e.replace(/#.*/, '');
	const n = t?.ignoreSlowConnection ?? !1;
	if (go(e, n))
		if (
			(Jn.add(e),
			document.createElement('link').relList?.supports?.('prefetch') && t?.with !== 'fetch')
		) {
			const r = document.createElement('link');
			(r.rel = 'prefetch'), r.setAttribute('href', e), document.head.append(r);
		} else fetch(e, { priority: 'low' });
}
function go(e, t) {
	if (!navigator.onLine || (!t && Gn())) return !1;
	try {
		const n = new URL(e, location.href);
		return (
			location.origin === n.origin &&
			(location.pathname !== n.pathname || location.search !== n.search) &&
			!Jn.has(e)
		);
	} catch {}
	return !1;
}
function re(e, t) {
	if (e?.tagName !== 'A') return !1;
	const n = e.dataset.astroPrefetch;
	return n === 'false'
		? !1
		: t === 'tap' && (n != null || Ge) && Gn()
			? !0
			: (n == null && Ge) || n === ''
				? t === Yn
				: n === t;
}
function Gn() {
	if ('connection' in navigator) {
		const e = navigator.connection;
		return e.saveData || /2g/.test(e.effectiveType);
	}
	return !1;
}
function vt(e) {
	e();
	let t = !1;
	document.addEventListener('astro:page-load', () => {
		if (!t) {
			t = !0;
			return;
		}
		e();
	});
}
window.Alpine = Vn;
document.addEventListener('DOMContentLoaded', () => Vn.start());
co();
