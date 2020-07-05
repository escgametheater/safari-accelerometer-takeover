const React = require("react");
const bullet_1 = require("./img/1.base64.png.js");
const bullet_2 = require("./img/2.base64.png.js");
const bullet_3 = require("./img/3.base64.png.js");
const bullet_4 = require("./img/4.base64.png.js");
const instructions = require("./img/instructions.32.base64.gif.js");
const phone = require("./img/phone.base64.png.js");

const liStyle = {
	background: '#efefef',
	color: '#232323',
	marginBottom: '1px',
	padding: '15px',
	fontSize: '.75rem',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
};

const liBulletStyle = {
	marginRight: '1rem',
	width: '30px',
	height: '30px',
};

const Takeover = (props) => (
	React.createElement(
		'div',
		{
			style: props.containerStyles || {
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				fontFamily: 'sans-serif',
				fontSize: '7px',
				padding: '0 12%',
				boxSizing: 'border-box',
				background: '#fff',
				color: '#000',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-end',
				alignItems: 'center',
			}
		},
		React.createElement(
				"p",
				{
					style: {
						width: '286px',
						textAlign: 'center',
						fontSize: '1rem',
						margin: '0 0 1rem 0',
					}
				},
				"To play this game, please enable ",
				React.createElement("strong", null, "Motion & Orientation Access"),
				" for your Safari web browser."
			),
		React.createElement(
			"ol",
			{
				style: {
					listStyle: 'none',
					width: '100%',
					margin: '0 0 10px 0',
					padding: 0,
				},
			},
			React.createElement(
				"li",
				{
					style: {
						...liStyle,
						borderTopLeftRadius: '5px',
						borderTopRightRadius: '5px',
					},
				},
				React.createElement("img", {
					src: `data:image/png;base64,${bullet_1}`,
					style: liBulletStyle,
				}),
				" ",
				React.createElement(
					"div",
					null,
					"Go to your Home Screen and tap ",
					React.createElement("strong", null, "Settings")
				)
			),
			React.createElement(
				"li",
				{
					style: liStyle,
				},
				React.createElement("img", {
					src: `data:image/png;base64,${bullet_2}`,
					style: liBulletStyle,
				}),
				" ",
				React.createElement(
					"div",
					null,
					"Scroll down and tap ",
					React.createElement("strong", null, "Safari")
				)
			),
			React.createElement(
				"li",
				{
					style: liStyle,
				},
				React.createElement("img", {
					src: `data:image/png;base64,${bullet_3}`,
					style: liBulletStyle,
				}),
				" ",
				React.createElement(
					"div",
					null,
					"Scroll down and tap to enable ",
					React.createElement(
						"strong",
						null,
						"Motion & Orientation Access"
					)
				)
			),
			React.createElement(
				"li",
				{
					style: {
						...liStyle,
						borderBottomLeftRadius: '5px',
						borderBottomRightRadius: '5px',
					},
				},
				React.createElement("img", {
					src: `data:image/png;base64,${bullet_4}`,
					style: liBulletStyle,
				}),
				" ",
				React.createElement(
					"div",
					null,
					"Reload ",
					React.createElement("strong", null, "this"),
					" page"
				)
			)
		),
		React.createElement(
			"div",
			{
				id: "animation",
				style: {
					position: 'relative',
					width: '286px',
					height: '372px',
				}
			},
			React.createElement("img", {
				id: "phone",
				src: `data:image/png;base64,${phone}`,
				style: {
					position: 'absolute',
					top:0,
					left:0,
					zIndex:2,
				}
			}),
			React.createElement("img", {
				id: "instructions",
				src: `data:image/gif;base64,${instructions}`,
				style: {
					position: 'absolute',
					top:'16px',
					left:'16px',
					zIndex:1,
				}
			})
		)
	)
);

Takeover.displayName = "SafariAccelerometerTakeover";
module.exports = Takeover;
