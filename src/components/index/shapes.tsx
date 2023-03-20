import React from "react";
import p5types from "p5";
import dynamic from "next/dynamic";
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
	ssr: false,
});
import { Shape } from "types";

// initiallize first few shapes
const triangle1 = {
	x: Math.random() * 500,
	y: Math.random() * 500,
	slowVelX: 0.2,
	slowVelY: 0.2,
	defaultVelX: 0.5,
	defaultVelY: 0.4,
	velX: -0.5,
	velY: 0.4,
	geom: "triangle",
	length: 40,
	id: 0,
};

const rect1 = {
	x: Math.random() * 500,
	y: Math.random() * 500,
	slowVelX: 0.2,
	slowVelY: 0.2,
	defaultVelX: 0.5,
	defaultVelY: 0.3,
	velX: 0.5,
	velY: -0.3,
	geom: "rect",
	length: 35,
	id: 1,
};
const circle1 = {
	x: Math.random() * 250,
	y: Math.random() * 250,
	slowVelX: 0.2,
	slowVelY: 0.2,
	defaultVelX: 0.5,
	defaultVelY: 0.2,
	velX: -0.5,
	velY: -0.2,
	geom: "circle",
	length: 50,
	id: 2,
};
const shapes: Shape[] = [triangle1, rect1, circle1];

function setup(p5: p5types) {
	p5.createCanvas(
		p5.windowWidth,
		document.getElementById("hero")!.clientHeight,
		p5.WEBGL
	).parent("hero");
	p5.translate(0, 0);
}

function draw(p5: p5types) {
	p5.clear();
	shapes.forEach((shape) => {
		// detect collision with borders
		if (
			shape.x + shape.length >= p5.width / 2 ||
			shape.x - shape.length <= -p5.width / 2
		) {
			shape.velX *= -1;
		}
		if (
			shape.y + shape.length > p5.height / 2 ||
			shape.y - shape.length <= -p5.height / 2
		) {
			shape.velY *= -1;
		}

		// detect collision with other shapes
		// const collidedElement = shapes.find((s) => {
		// 	return (
		// 		Math.abs(shape.x - s.x) < shape.length + 15 &&
		// 		Math.abs(shape.y - s.y) < shape.length + 15 &&
		// 		shape.id != s.id
		// 	);
		// });
		// if (collidedElement) {
		// 	collidedElement.velX *= -1;
		// 	collidedElement.velY *= -1;
		// 	shape.velX *= -1;
		// 	shape.velY *= -1;
		// }

		// render shape according to geometry
		switch (shape.geom) {
			case "triangle":
				p5.triangle(
					shape.x - shape.length,
					shape.y + shape.length,
					shape.x + shape.length,
					shape.y + shape.length,
					shape.x,
					shape.y - shape.length
				).fill(238, 98, 107);
				break;

			case "rect":
				p5.rect(shape.x, shape.y, shape.length, shape.length).fill(
					238,
					98,
					107
				);

				break;

			case "circle":
				p5.circle(shape.x, shape.y, shape.length).fill(238, 98, 107);

				break;
		}
		shape.x += shape.velX;
		shape.y += shape.velY;
	});
}

function mouseMove(event: p5types) {
	console.log(event.mouseY);
	// slow down shapes when hovering over them
	shapes.forEach((shape) => {
		const relativeX = shape.x + event.width / 2;
		const relativeY = shape.y + event.height / 2;
		if (
			event.mouseX <= relativeX + shape.length &&
			event.mouseX > relativeX - shape.length &&
			event.mouseY <= relativeY + shape.length &&
			event.mouseY > relativeY - shape.length
		) {
			shape.velX = shape.slowVelX * Math.sign(shape.velX);
			shape.velX = shape.slowVelY * Math.sign(shape.velY);
		} else {
			shape.velX = shape.defaultVelX * Math.sign(shape.velX);
			shape.velY = shape.defaultVelY * Math.sign(shape.velY);
		}
	});
	// draw(event);
}

function mouseClick(event: p5types) {
	// randomly add shapes
	const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
	const newShape = Object.assign({}, randomShape);
	newShape.x = event.mouseX - event.width / 2;
	newShape.y = event.mouseY - event.height / 2;
	newShape.id = shapes[shapes.length - 1].id + 1;
	console.log(newShape);
	shapes.push(newShape);
	console.log(shapes);
	draw(event);
	// TODO: remove shape on right click
}
export default function Shapes() {
	return (
		<Sketch
			setup={setup}
			draw={draw}
			mouseMoved={mouseMove}
			mouseClicked={mouseClick}
			className="block"
		/>
	);
}
