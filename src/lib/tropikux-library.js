import e from "prop-types";
import { Bug as t, CaretDown as n, CaretLeft as r, CaretRight as i, CheckCircle as a, CheckSquare as o, Info as s, Leaf as c, MinusCircle as l, MinusSquare as u, Square as d, User as f, UserCircle as p, Warning as m } from "@phosphor-icons/react";
import { Fragment as h, jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region src/components/Button/Button.jsx
var v = {
	XLarge: "text--h5",
	Large: "text--h6",
	Medium: "text--p1",
	Small: "text--p2",
	XSmall: "text--label"
};
function y({ variant: e = "Filled", color: t = "primary", size: n = "Medium", showText: a = !0, buttonText: o = "Button text", showLeadingIcon: s = !0, showTrailingIcon: c = !0, leadingIcon: l = r, trailingIcon: u = i, iconWeight: d = "regular", onClick: f }) {
	return /* @__PURE__ */ _("button", {
		className: `btn btn--${t} btn--${e} btn--${n}`,
		onClick: f,
		"aria-label": a ? void 0 : o,
		children: [
			s && /* @__PURE__ */ g("span", {
				className: "btn__icon",
				"aria-hidden": "true",
				children: /* @__PURE__ */ g(l, { weight: d })
			}),
			a && /* @__PURE__ */ g("span", {
				className: `btn__label ${v[n]}`,
				children: o
			}),
			c && /* @__PURE__ */ g("span", {
				className: "btn__icon",
				"aria-hidden": "true",
				children: /* @__PURE__ */ g(u, { weight: d })
			})
		]
	});
}
y.propTypes = {
	variant: e.oneOf([
		"Filled",
		"Outline",
		"NoFilled"
	]),
	color: e.oneOf([
		"primary",
		"secondary",
		"tertiary",
		"neutral"
	]),
	size: e.oneOf([
		"XLarge",
		"Large",
		"Medium",
		"Small",
		"XSmall"
	]),
	showText: e.bool,
	buttonText: e.string,
	showLeadingIcon: e.bool,
	showTrailingIcon: e.bool,
	leadingIcon: e.elementType,
	trailingIcon: e.elementType,
	iconWeight: e.oneOf([
		"thin",
		"light",
		"regular",
		"bold",
		"fill",
		"duotone"
	]),
	onClick: e.func
};
//#endregion
//#region src/components/Asset/Asset.jsx
function b({ size: e = "Medium", type: t = "Icon", icon: n = p, iconWeight: r = "fill", firstLetter: i = "A", secondLetter: a = "B", photo: o = null }) {
	let s = t === "Initials" ? `Avatar de ${i}${a}` : t === "Photo" ? "Foto de perfil" : "Avatar";
	return /* @__PURE__ */ _("div", {
		className: `asset asset--${e} asset--${t}`,
		role: "img",
		"aria-label": s,
		children: [
			t === "Icon" && /* @__PURE__ */ g("span", {
				className: "asset__icon",
				"aria-hidden": "true",
				children: /* @__PURE__ */ g(n, {
					weight: r,
					style: {
						width: "100%",
						height: "100%"
					}
				})
			}),
			t === "Initials" && /* @__PURE__ */ _("span", {
				className: "asset__initials",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ g("span", { children: i }), /* @__PURE__ */ g("span", { children: a })]
			}),
			t === "Photo" && o && /* @__PURE__ */ g("img", {
				src: o,
				alt: "",
				"aria-hidden": "true",
				className: "asset__photo"
			})
		]
	});
}
b.propTypes = {
	size: e.oneOf([
		"2XLarge",
		"XLarge",
		"Large",
		"Medium",
		"Small",
		"XSmall"
	]),
	type: e.oneOf([
		"Icon",
		"Initials",
		"Photo"
	]),
	icon: e.elementType,
	iconWeight: e.oneOf([
		"thin",
		"light",
		"regular",
		"bold",
		"fill",
		"duotone"
	]),
	firstLetter: e.string,
	secondLetter: e.string,
	photo: e.string
};
//#endregion
//#region src/components/StatusDot/StatusDot.jsx
function x({ size: e = "Medium", status: t = "Default" }) {
	return /* @__PURE__ */ g("span", {
		className: `status-dot status-dot--${e} status-dot--${t}`,
		role: "status",
		"aria-label": `Estado: ${t}`
	});
}
x.propTypes = {
	size: e.oneOf([
		"XLarge",
		"Large",
		"Medium",
		"Small",
		"XSmall"
	]),
	status: e.oneOf([
		"Default",
		"Active",
		"Missing",
		"Busy",
		"Inactive"
	])
};
//#endregion
//#region src/components/CounterDot/CounterDot.jsx
var S = {
	XLarge: "text--h6",
	Large: "text--p2",
	Medium: "text--label"
};
function C({ size: e = "Medium", label: t = "00" }) {
	let n = [
		"XLarge",
		"Large",
		"Medium"
	].includes(e);
	return /* @__PURE__ */ g("span", {
		className: `counter-dot counter-dot--${e}`,
		role: n ? "status" : void 0,
		"aria-label": n ? `Contador: ${t}` : void 0,
		children: n && /* @__PURE__ */ g("span", {
			className: `counter-dot__label ${S[e]}`,
			"aria-hidden": "true",
			children: t
		})
	});
}
C.propTypes = {
	size: e.oneOf([
		"XLarge",
		"Large",
		"Medium",
		"Small",
		"XSmall"
	]),
	label: e.string
};
//#endregion
//#region src/components/Username/Username.jsx
var w = {
	XLarge: {
		name: "text--h3",
		sub: "text--h5"
	},
	Large: {
		name: "text--h4",
		sub: "text--h6"
	},
	Medium: {
		name: "text--h5",
		sub: "text--p1"
	},
	Small: {
		name: "text--p1",
		sub: "text--p2"
	},
	XSmall: {
		name: "text--p2",
		sub: "text--label"
	}
};
function T({ size: e = "Medium", status: t = "Default", showSub: n = !0, nameText: r = "Username", subText: i = "Ver perfil" }) {
	return /* @__PURE__ */ _("div", {
		className: `username username--${e} username--${t}`,
		children: [/* @__PURE__ */ g("span", {
			className: `username__name ${w[e].name}`,
			children: r
		}), n && /* @__PURE__ */ g("span", {
			className: `username__sub ${w[e].sub}`,
			children: i
		})]
	});
}
T.propTypes = {
	size: e.oneOf([
		"XLarge",
		"Large",
		"Medium",
		"Small",
		"XSmall"
	]),
	status: e.oneOf([
		"Default",
		"Active",
		"MissingOut",
		"Busy",
		"Inactive"
	]),
	showSub: e.bool,
	nameText: e.string,
	subText: e.string
};
//#endregion
//#region src/components/Avatar/Avatar.jsx
var E = {
	"2XLarge": {
		asset: "2XLarge",
		username: "XLarge",
		counter: "XLarge",
		status: "XLarge",
		icon: 40
	},
	XLarge: {
		asset: "XLarge",
		username: "Large",
		counter: "Large",
		status: "Large",
		icon: 24
	},
	Large: {
		asset: "Large",
		username: "Medium",
		counter: "Medium",
		status: "Medium",
		icon: 24
	},
	Medium: {
		asset: "Medium",
		username: "Small",
		counter: "Small",
		status: "Small",
		icon: 16
	},
	Small: {
		asset: "Small",
		username: "Small",
		counter: "Small",
		status: "Small",
		icon: 16
	},
	XSmall: {
		asset: "XSmall",
		username: "XSmall",
		counter: "XSmall",
		status: "XSmall",
		icon: 16
	}
};
function D({ size: e = "Large", direction: t = "Row", alignment: r = "Left", assetType: i = "Initials", assetIcon: a = void 0, assetIconWeight: o = "regular", firstLetter: s = "J", secondLetter: c = "D", photo: l = null, nameText: u = "Username", subText: d = "Ver perfil", usernameStatus: f = "Default", showUsernameSub: p = !0, showUsername: m = !0, showStatusDot: v = !0, showCounter: y = !0, showDropdown: S = !0, dotStatus: w = "Default", counterLabel: D = "00", dropdownIcon: O = n, dropdownIconWeight: k = "fill", onDropdownClick: A }) {
	let j = E[e], M = /* @__PURE__ */ _("div", {
		className: "avatar__asset-wrapper",
		children: [
			/* @__PURE__ */ g(b, {
				size: j.asset,
				type: i,
				icon: a,
				iconWeight: o,
				firstLetter: s,
				secondLetter: c,
				photo: l
			}),
			y && /* @__PURE__ */ g("span", {
				className: "avatar__counter",
				children: /* @__PURE__ */ g(C, {
					size: j.counter,
					label: D
				})
			}),
			v && /* @__PURE__ */ g("span", {
				className: "avatar__status",
				children: /* @__PURE__ */ g(x, {
					size: j.status,
					status: w
				})
			})
		]
	}), N = m && /* @__PURE__ */ g(T, {
		size: j.username,
		status: f,
		showSub: p,
		nameText: u,
		subText: d
	}), P = S && t !== "Column" && /* @__PURE__ */ g("span", {
		className: "avatar__icon",
		style: {
			width: j.icon,
			height: j.icon
		},
		"aria-label": "Ver más opciones",
		"aria-haspopup": "true",
		onClick: A,
		children: /* @__PURE__ */ g(O, {
			weight: k,
			style: {
				width: "100%",
				height: "100%"
			},
			"aria-hidden": "true"
		})
	});
	return /* @__PURE__ */ _("div", {
		className: `avatar avatar--${e} avatar--${t} avatar--${r}`,
		role: "group",
		"aria-label": `Avatar de ${u}`,
		children: [
			r === "Right" && /* @__PURE__ */ _(h, { children: [
				N,
				M,
				P
			] }),
			r === "Left" && /* @__PURE__ */ _(h, { children: [
				M,
				N,
				P
			] }),
			r === "Default" && /* @__PURE__ */ _(h, { children: [M, N] })
		]
	});
}
D.propTypes = {
	size: e.oneOf([
		"2XLarge",
		"XLarge",
		"Large",
		"Medium",
		"Small",
		"XSmall"
	]),
	direction: e.oneOf(["Row", "Column"]),
	alignment: e.oneOf([
		"Left",
		"Right",
		"Default"
	]),
	assetType: e.oneOf([
		"Icon",
		"Initials",
		"Photo"
	]),
	assetIcon: e.elementType,
	assetIconWeight: e.oneOf([
		"thin",
		"light",
		"regular",
		"bold",
		"fill",
		"duotone"
	]),
	firstLetter: e.string,
	secondLetter: e.string,
	photo: e.string,
	nameText: e.string,
	subText: e.string,
	usernameStatus: e.oneOf([
		"Default",
		"Active",
		"MissingOut",
		"Busy",
		"Inactive"
	]),
	showUsernameSub: e.bool,
	showUsername: e.bool,
	showStatusDot: e.bool,
	showCounter: e.bool,
	showDropdown: e.bool,
	dotStatus: e.oneOf([
		"Default",
		"Active",
		"Missing",
		"Busy",
		"Inactive"
	]),
	counterLabel: e.string,
	dropdownIcon: e.elementType,
	dropdownIconWeight: e.oneOf([
		"thin",
		"light",
		"regular",
		"bold",
		"fill",
		"duotone"
	]),
	onDropdownClick: e.func
};
//#endregion
//#region src/components/TextField/TextField.jsx
var O = {
	Large: {
		textClass: "text--h6",
		iconSize: 24,
		labelClass: "text--p2"
	},
	Medium: {
		textClass: "text--p1",
		iconSize: 20,
		labelClass: "text--p2"
	},
	Small: {
		textClass: "text--p1",
		iconSize: 20,
		labelClass: "text--label"
	},
	XSmall: {
		textClass: "text--p2",
		iconSize: 16,
		labelClass: null
	}
};
function k({ size: e = "Large", placeholder: t = "Placeholder", labelText: r = "Label", helperText: i = "Helper text", showLabel: a = !0, showHelperText: o = !0, showLeadingIcon: s = !0, showTrailingIcon: c = !0, leadingIcon: l = f, trailingIcon: u = n, leadingIconWeight: d = "regular", trailingIconWeight: p = "regular", isError: m = !1, isDisabled: h = !1, onChange: v }) {
	let y = O[e], b = a && e !== "XSmall", x = o && e !== "XSmall";
	return /* @__PURE__ */ _("div", {
		className: `textfield textfield--${e} ${h ? "textfield--Disabled" : m ? "textfield--Error" : ""}`,
		role: "group",
		"aria-label": b ? r : t,
		children: [/* @__PURE__ */ _("div", {
			className: "textfield__container",
			children: [b && /* @__PURE__ */ g("span", {
				className: `textfield__label ${y.labelClass}`,
				children: r
			}), /* @__PURE__ */ _("div", {
				className: "textfield__inner",
				children: [
					s && /* @__PURE__ */ g("span", {
						className: "textfield__icon",
						style: {
							width: y.iconSize,
							height: y.iconSize
						},
						"aria-hidden": "true",
						children: /* @__PURE__ */ g(l, {
							weight: d,
							style: {
								width: "100%",
								height: "100%"
							}
						})
					}),
					/* @__PURE__ */ g("input", {
						className: `textfield__input ${y.textClass}`,
						placeholder: t,
						onChange: v,
						disabled: h,
						"aria-label": b ? r : t,
						"aria-invalid": m,
						"aria-disabled": h
					}),
					c && /* @__PURE__ */ g("span", {
						className: "textfield__icon",
						style: {
							width: y.iconSize,
							height: y.iconSize
						},
						"aria-hidden": "true",
						children: /* @__PURE__ */ g(u, {
							weight: p,
							style: {
								width: "100%",
								height: "100%"
							}
						})
					})
				]
			})]
		}), x && /* @__PURE__ */ g("span", {
			className: "textfield__helper text--p2",
			"aria-live": "polite",
			children: i
		})]
	});
}
k.propTypes = {
	size: e.oneOf([
		"Large",
		"Medium",
		"Small",
		"XSmall"
	]),
	placeholder: e.string,
	labelText: e.string,
	helperText: e.string,
	showLabel: e.bool,
	showHelperText: e.bool,
	showLeadingIcon: e.bool,
	showTrailingIcon: e.bool,
	leadingIcon: e.elementType,
	trailingIcon: e.elementType,
	leadingIconWeight: e.oneOf([
		"thin",
		"light",
		"regular",
		"bold",
		"fill",
		"duotone"
	]),
	trailingIconWeight: e.oneOf([
		"thin",
		"light",
		"regular",
		"bold",
		"fill",
		"duotone"
	]),
	isError: e.bool,
	isDisabled: e.bool,
	onChange: e.func
};
//#endregion
//#region src/components/Checkbox/Checkbox.jsx
var A = {
	XLarge: "text--h5",
	Large: "text--h6",
	Medium: "text--p1",
	Small: "text--p2"
}, j = {
	Selected: o,
	"Selected-Disabled": o,
	Deselected: d,
	"Deselected-Disabled": d,
	PartialSelected: u
};
function M({ size: e = "Medium", status: t = "Deselected", color: n = "primary", label: r = "Checkbox text", showLabel: i = !0, iconWeight: a = "regular", onChange: o }) {
	let s = {
		Selected: "fill",
		"Selected-Disabled": "fill",
		PartialSelected: "fill",
		Deselected: a,
		"Deselected-Disabled": a
	}, c = t === "Selected-Disabled" || t === "Deselected-Disabled", l = t === "Selected", u = t === "PartialSelected", d = j[t], f = s[t];
	return /* @__PURE__ */ _("label", {
		className: `checkbox checkbox--${e} checkbox--${n} checkbox--${t}`,
		children: [/* @__PURE__ */ g("span", {
			className: "checkbox__box",
			role: "checkbox",
			"aria-checked": u ? "mixed" : l,
			"aria-disabled": c,
			tabIndex: c ? -1 : 0,
			onClick: c ? void 0 : o,
			onKeyDown: (e) => {
				!c && (e.key === "Enter" || e.key === " ") && o?.();
			},
			children: /* @__PURE__ */ g(d, {
				weight: f,
				style: {
					width: "90%",
					height: "90%"
				},
				"aria-hidden": "true"
			})
		}), i && /* @__PURE__ */ g("span", {
			className: `checkbox__label ${A[e]}`,
			children: r
		})]
	});
}
M.propTypes = {
	size: e.oneOf([
		"XLarge",
		"Large",
		"Medium",
		"Small"
	]),
	status: e.oneOf([
		"Selected",
		"Selected-Disabled",
		"Deselected",
		"Deselected-Disabled",
		"PartialSelected"
	]),
	color: e.oneOf([
		"primary",
		"secondary",
		"tertiary"
	]),
	label: e.string,
	showLabel: e.bool,
	iconWeight: e.oneOf([
		"thin",
		"light",
		"regular",
		"bold",
		"fill",
		"duotone"
	]),
	onChange: e.func
};
//#endregion
//#region src/components/Title/Title.jsx
var N = {
	"3XLarge": {
		iconSize: 48,
		titleClass: "text--h1",
		subtitleClass: "text--h5",
		gap: 8
	},
	"2XLarge": {
		iconSize: 40,
		titleClass: "text--h2",
		subtitleClass: "text--h6",
		gap: 8
	},
	XLarge: {
		iconSize: 32,
		titleClass: "text--h3",
		subtitleClass: "text--p1",
		gap: 8
	},
	Large: {
		iconSize: 32,
		titleClass: "text--h4",
		subtitleClass: "text--p1",
		gap: 8
	},
	Medium: {
		iconSize: 24,
		titleClass: "text--h5",
		subtitleClass: "text--p2",
		gap: 4
	},
	Small: {
		iconSize: 24,
		titleClass: "text--h6",
		subtitleClass: "text--p2",
		gap: 4
	},
	XSmall: {
		iconSize: 24,
		titleClass: "text--p1",
		subtitleClass: "text--label",
		gap: 4
	},
	XXSmall: {
		iconSize: 16,
		titleClass: "text--p2",
		subtitleClass: "text--label",
		gap: 4
	}
}, P = {
	"3XLarge": "var(--font-semibold)",
	"2XLarge": "var(--font-semibold)",
	XLarge: "var(--font-semibold)",
	Large: "var(--font-semibold)",
	Medium: "var(--font-semibold)",
	Small: "var(--font-semibold)",
	XSmall: "var(--font-semibold)",
	XXSmall: "var(--font-medium)"
};
function F({ size: e = "Medium", orientation: n = "Horizontal", titleText: r = "Title text", subtitleText: i = "Subtitle", showSubtitle: a = !0, showLeadingIcon: o = !0, showTrailingIcon: s = !0, leadingIcon: l = t, trailingIcon: u = c, leadingIconWeight: d = "regular", trailingIconWeight: f = "regular" }) {
	let p = N[e], m = n === "Vertical", v = (e, t, n) => /* @__PURE__ */ g("span", {
		className: `title__icon ${n}`,
		style: {
			width: p.iconSize,
			height: p.iconSize
		},
		"aria-hidden": "true",
		children: /* @__PURE__ */ g(e, {
			weight: t,
			style: {
				width: "90%",
				height: "90%"
			}
		})
	}), y = /* @__PURE__ */ _("div", {
		className: "title__texts",
		children: [/* @__PURE__ */ g("span", {
			className: `title__title ${N[e].titleClass}`,
			style: { fontWeight: P[e] },
			children: r
		}), a && /* @__PURE__ */ g("span", {
			className: `title__subtitle ${N[e].subtitleClass}`,
			children: i
		})]
	});
	return /* @__PURE__ */ g("div", {
		className: `title title--${e} title--${n}`,
		style: { gap: p.gap },
		"aria-label": `${r}${a ? `, ${i}` : ""}`,
		children: m ? /* @__PURE__ */ _(h, { children: [o && v(l, d, "title__icon--leading"), y] }) : /* @__PURE__ */ _(h, { children: [
			o && v(l, d, "title__icon--leading"),
			y,
			s && v(u, f, "title__icon--trailing")
		] })
	});
}
F.propTypes = {
	size: e.oneOf([
		"3XLarge",
		"2XLarge",
		"XLarge",
		"Large",
		"Medium",
		"Small",
		"XSmall",
		"XXSmall"
	]),
	orientation: e.oneOf(["Horizontal", "Vertical"]),
	titleText: e.string,
	subtitleText: e.string,
	showSubtitle: e.bool,
	showLeadingIcon: e.bool,
	showTrailingIcon: e.bool,
	leadingIcon: e.elementType,
	trailingIcon: e.elementType,
	leadingIconWeight: e.oneOf([
		"thin",
		"light",
		"regular",
		"bold",
		"fill",
		"duotone"
	]),
	trailingIconWeight: e.oneOf([
		"thin",
		"light",
		"regular",
		"bold",
		"fill",
		"duotone"
	])
};
//#endregion
//#region src/components/TextLabel/TextLabel.jsx
var I = {
	XLarge: {
		labelClass: "text--h4",
		dataClass: "text--h4",
		gap: 8
	},
	Large: {
		labelClass: "text--h5",
		dataClass: "text--h5",
		gap: 4
	},
	Medium: {
		labelClass: "text--h6",
		dataClass: "text--h6",
		gap: 4
	},
	Small: {
		labelClass: "text--p1",
		dataClass: "text--p1",
		gap: 4
	},
	XSmall: {
		labelClass: "text--p2",
		dataClass: "text--p2",
		gap: 4
	},
	XXSmall: {
		labelClass: "text--label",
		dataClass: "text--label",
		gap: 4
	}
}, L = {
	XLarge: {
		labelClass: "text--p1",
		dataClass: "text--h4",
		supportClass: "text--p2"
	},
	Large: {
		labelClass: "text--p2",
		dataClass: "text--h5",
		supportClass: "text--p2"
	},
	Medium: {
		labelClass: "text--p2",
		dataClass: "text--h6",
		supportClass: "text--p2"
	},
	Small: {
		labelClass: "text--label",
		dataClass: "text--p1",
		supportClass: "text--label"
	},
	XSmall: {
		labelClass: "text--label",
		dataClass: "text--p2",
		supportClass: "text--label"
	},
	XXSmall: {
		labelClass: "text--label",
		dataClass: "text--label",
		supportClass: "text--label"
	}
};
function R({ size: e = "Medium", orientation: t = "Horizontal", labelText: n = "Label", dataText: r = "Data text", supportText: i = "Support text", showLabel: a = !0, showSupport: o = !0, showParameter: s = !0 }) {
	let c = t === "Vertical", l = c ? L[e] : I[e];
	return c ? /* @__PURE__ */ _("div", {
		className: `textlabel textlabel--${e} textlabel--Vertical`,
		"aria-label": `${n}: ${r}`,
		children: [
			a && /* @__PURE__ */ g("span", {
				className: `textlabel__label ${l.labelClass}`,
				children: n
			}),
			s && /* @__PURE__ */ g("span", {
				className: `textlabel__data ${l.dataClass}`,
				children: r
			}),
			o && /* @__PURE__ */ g("span", {
				className: `textlabel__support ${l.supportClass}`,
				children: i
			})
		]
	}) : /* @__PURE__ */ _("div", {
		className: `textlabel textlabel--${e} textlabel--Horizontal`,
		style: { gap: l.gap },
		"aria-label": `${n}: ${r}`,
		children: [a && /* @__PURE__ */ g("span", {
			className: `textlabel__label ${l.labelClass}`,
			children: n
		}), s && /* @__PURE__ */ g("span", {
			className: `textlabel__data ${l.dataClass}`,
			children: r
		})]
	});
}
R.propTypes = {
	size: e.oneOf([
		"XLarge",
		"Large",
		"Medium",
		"Small",
		"XSmall",
		"XXSmall"
	]),
	orientation: e.oneOf(["Horizontal", "Vertical"]),
	labelText: e.string,
	dataText: e.string,
	supportText: e.string,
	showLabel: e.bool,
	showSupport: e.bool,
	showParameter: e.bool
};
//#endregion
//#region src/components/BulletText/BulletText.jsx
function z({ size: e = "Medium", text: t = "Lorem ipsum dolor sit amet consectetur. Sem volutpat." }) {
	return /* @__PURE__ */ _("div", {
		className: `bullet-text bullet-text--${e}`,
		children: [/* @__PURE__ */ g("span", {
			className: "bullet-text__bullet",
			children: /* @__PURE__ */ g("span", {
				className: "bullet-text__dot-container",
				children: /* @__PURE__ */ g("span", { className: "bullet-text__dot" })
			})
		}), /* @__PURE__ */ g("span", {
			className: "bullet-text__text",
			children: t
		})]
	});
}
z.propTypes = {
	size: e.oneOf([
		"XLarge",
		"Large",
		"Medium",
		"Small",
		"XSmall"
	]),
	text: e.string
};
//#endregion
//#region src/components/Alert/Alert.jsx
var B = {
	Success: {
		icon: a,
		bgColor: "var(--success-container)",
		iconColor: "var(--on-success-container)",
		textColor: "var(--on-success-container)",
		bulletColor: "var(--on-success)"
	},
	Informative: {
		icon: s,
		bgColor: "var(--informative-container)",
		iconColor: "var(--on-informative-container)",
		textColor: "var(--on-informative-container)",
		bulletColor: "var(--on-informative-container)"
	},
	Warning: {
		icon: m,
		bgColor: "var(--warning-container)",
		iconColor: "var(--on-warning-container)",
		textColor: "var(--on-warning-container)",
		bulletColor: "var(--on-warning)"
	},
	Danger: {
		icon: l,
		bgColor: "var(--error-container)",
		iconColor: "var(--on-error-container)",
		textColor: "var(--on-error-container)",
		bulletColor: "var(--on-error-container)"
	}
};
function V({ size: e = "Medium", type: t = "Default", status: n = "Success", alertText: r = "This is an alert message", bulletTexts: i = [
	"Lorem ipsum dolor sit amet",
	"Consectetur adipiscing elit",
	"Facilisi neque"
], iconWeight: a = "fill" }) {
	let o = B[n], s = o.icon;
	return /* @__PURE__ */ _("div", {
		className: `alert alert--${e} alert--${t} alert--${n}`,
		style: { backgroundColor: o.bgColor },
		role: "alert",
		"aria-live": "polite",
		children: [/* @__PURE__ */ _("div", {
			className: "alert__header",
			children: [/* @__PURE__ */ g("span", {
				className: "alert__icon",
				"aria-hidden": "true",
				style: { color: o.iconColor },
				children: /* @__PURE__ */ g(s, {
					weight: a,
					style: {
						width: "90%",
						height: "90%"
					}
				})
			}), /* @__PURE__ */ g("span", {
				className: "alert__text text--p1",
				style: { color: o.textColor },
				children: r
			})]
		}), t === "TitleText" && e === "Medium" && /* @__PURE__ */ g("div", {
			className: "alert__bullets",
			style: { color: o.bulletColor },
			children: i.map((e, t) => /* @__PURE__ */ g(z, {
				size: "XSmall",
				text: e
			}, t))
		})]
	});
}
V.propTypes = {
	size: e.oneOf(["Medium", "Small"]),
	type: e.oneOf(["Default", "TitleText"]),
	status: e.oneOf([
		"Success",
		"Informative",
		"Warning",
		"Danger"
	]),
	alertText: e.string,
	bulletTexts: e.arrayOf(e.string),
	iconWeight: e.oneOf([
		"thin",
		"light",
		"regular",
		"bold",
		"fill",
		"duotone"
	])
};
//#endregion
//#region src/components/ProgressBar/ProgressBar.jsx
function H({ value: e = 50 }) {
	let t = Math.min(100, Math.max(0, e));
	return /* @__PURE__ */ g("div", {
		className: "progress-bar",
		role: "progressbar",
		"aria-valuenow": t,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-label": `Progreso: ${t}%`,
		children: /* @__PURE__ */ g("div", {
			className: "progress-bar__fill",
			style: { width: `${t}%` }
		})
	});
}
H.propTypes = { value: e.number };
//#endregion
//#region src/components/StepperLine/StepperLine.jsx
function U({ status: e = "Inactive" }) {
	return /* @__PURE__ */ g("div", {
		className: `stepper-line stepper-line--${e}`,
		role: "presentation"
	});
}
U.propTypes = { status: e.oneOf(["Activated", "Inactive"]) };
//#endregion
//#region src/components/Stepper/Stepper.jsx
function W({ totalSteps: e = 5, currentStep: t = 1, label: n = "Paso 1 de N" }) {
	return /* @__PURE__ */ _("div", {
		className: "stepper",
		"aria-label": n,
		children: [/* @__PURE__ */ g("span", {
			className: "stepper__label text--p1",
			children: n
		}), /* @__PURE__ */ g("div", {
			className: "stepper__lines",
			role: "group",
			"aria-label": "Progreso",
			children: Array.from({ length: e }, (e, n) => /* @__PURE__ */ g(U, { status: n < t ? "Activated" : "Inactive" }, n))
		})]
	});
}
W.propTypes = {
	totalSteps: e.number,
	currentStep: e.number,
	label: e.string
};
//#endregion
//#region src/components/ButtonLink/ButtonLink.jsx
var G = {
	XLarge: {
		textClass: "text--h5",
		iconSize: 24,
		fontWeight: "var(--font-semibold)"
	},
	Large: {
		textClass: "text--h6",
		iconSize: 24,
		fontWeight: "var(--font-semibold)"
	},
	Medium: {
		textClass: "text--p1",
		iconSize: 24,
		fontWeight: "var(--font-semibold)"
	},
	Small: {
		textClass: "text--p2",
		iconSize: 16,
		fontWeight: "var(--font-medium)"
	}
};
function K({ size: e = "Medium", color: t = "primary", label: n = "Button text", showText: a = !0, showLeadingIcon: o = !0, showTrailingIcon: s = !0, leadingIcon: c = r, trailingIcon: l = i, leadingIconWeight: u = "regular", trailingIconWeight: d = "regular", onClick: f }) {
	let p = G[e];
	return /* @__PURE__ */ _("button", {
		className: `button-link button-link--${e} button-link--${t}`,
		onClick: f,
		"aria-label": a ? void 0 : n,
		children: [
			o && /* @__PURE__ */ g("span", {
				className: "button-link__icon",
				style: {
					width: p.iconSize,
					height: p.iconSize
				},
				"aria-hidden": "true",
				children: /* @__PURE__ */ g(c, {
					weight: u,
					style: {
						width: "90%",
						height: "90%"
					}
				})
			}),
			a && /* @__PURE__ */ g("span", {
				className: `button-link__label ${p.textClass}`,
				style: { fontWeight: p.fontWeight },
				children: n
			}),
			s && /* @__PURE__ */ g("span", {
				className: "button-link__icon",
				style: {
					width: p.iconSize,
					height: p.iconSize
				},
				"aria-hidden": "true",
				children: /* @__PURE__ */ g(l, {
					weight: d,
					style: {
						width: "90%",
						height: "90%"
					}
				})
			})
		]
	});
}
K.propTypes = {
	size: e.oneOf([
		"XLarge",
		"Large",
		"Medium",
		"Small"
	]),
	color: e.oneOf([
		"primary",
		"secondary",
		"tertiary"
	]),
	label: e.string,
	showText: e.bool,
	showLeadingIcon: e.bool,
	showTrailingIcon: e.bool,
	leadingIcon: e.elementType,
	trailingIcon: e.elementType,
	leadingIconWeight: e.oneOf([
		"thin",
		"light",
		"regular",
		"bold",
		"fill",
		"duotone"
	]),
	trailingIconWeight: e.oneOf([
		"thin",
		"light",
		"regular",
		"bold",
		"fill",
		"duotone"
	]),
	onClick: e.func
};
//#endregion
export { V as Alert, b as Asset, D as Avatar, z as BulletText, y as Button, K as ButtonLink, M as Checkbox, C as CounterDot, H as ProgressBar, x as StatusDot, W as Stepper, U as StepperLine, k as TextField, R as TextLabel, F as Title, T as Username };
