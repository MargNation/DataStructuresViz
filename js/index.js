
var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	canvasWidth = window.innerWidth - 50,
	canvasHeight = window.innerHeight + 200,
	numbers = [], 
	flags = [];

canvas.width = canvasWidth;
canvas.height = canvasHeight;

ctx.fillRect(0, 0, canvas.width, 7);

function createButton(id, top, left) {
	document.getElementById(id).style.top = top;
	document.getElementById(id).style.left = left;
}

// Removes all buttons from canvas as user switches data structures
function removeAllButtons(){
	document.getElementById("enqueue").innerHTML = '';
	document.getElementById("enqueueText").innerHTML = '';
	document.getElementById("dequeue").innerHTML = '';
	document.getElementById("dequeueText").innerHTML = '';
	document.getElementById("peek").innerHTML = '';
	document.getElementById("peekText").innerHTML = '';
	document.getElementById("isFull").innerHTML = '';
	document.getElementById("isFullText").innerHTML = '';
	document.getElementById("isEmpty").innerHTML = '';
	document.getElementById("isEmptyText").innerHTML = '';
	document.getElementById("push").innerHTML = '';
	document.getElementById("pushText").innerHTML = '';
	document.getElementById("pop").innerHTML = '';
	document.getElementById("popText").innerHTML = '';
	document.getElementById("showTop").innerHTML = '';
	document.getElementById("showTopText").innerHTML = '';
}

// Simple random number generator
function random(min, max) {
	return Math.random() * (max - min) + min;
}

// Generate random numbers to populate the structures
function randomizer() {
	removeAllButtons();
	ctx.clearRect(0, 7, canvas.width, canvas.height);
	numbers = [];
	for (var i = 0; i < 8; i++) {
		numbers.push(Math.floor(random(1, 100)));
		flags.push(true);
	}
	document.getElementById("numbersArea").innerHTML = numbers;
}

function createBinaryTree() {
	removeAllButtons();
	ctx.clearRect(0, 7, canvas.width, canvas.height);
	var drawingCoords = [];
	// ctx.beginPath();
	// ctx.arc(100,75,50,0,2*Math.PI);
	// ctx.stroke();
	ctx.font = "24px Comfortaa";
	ctx.fillText("Insert Binary Tree here - " + numbers, 50, 50);
	return;
}

function createQueue() {
	removeAllButtons();
	ctx.clearRect(0, 7, canvas.width, canvas.height);
	drawQueue();

	createButton("enqueue", "550px", "200px");
	document.getElementById("enqueue").innerHTML = 
	'<button type="submit" class="button" style="z-index: 2; position: relative" onclick="enqueue()">Enqueue()</button>';
	
	createButton("dequeue", "600px", "200px");
	document.getElementById("dequeue").innerHTML = 
	'<button type="submit" class="button" style="z-index: 2; position: relative" onclick="dequeue()">Dequeue()</button>';
	
	createButton("peek", "650px", "200px");
	document.getElementById("peek").innerHTML = 
	'<button type="submit" class="button" style="z-index: 2; position: relative" onclick="peek()">Peek()</button>';
	
	createButton("isFull", "700px", "200px");
	document.getElementById("isFull").innerHTML = 
	'<button type="submit" class="button" style="z-index: 2; position: relative" onclick="isFull()">isFull()</button>';
	
	createButton("isEmpty", "750px", "200px");
	document.getElementById("isEmpty").innerHTML = 
	'<button type="submit" class="button" style="z-index: 2; position: relative" onclick="isEmpty()">isEmpty()</button>';
}

function drawQueue() {
	var drawingCoords = [(canvasWidth / 4.5), 75, [(canvasWidth / 4.5) + 35, 135]];
	ctx.clearRect(0, 7, canvas.width, canvas.height);
	ctx.font="22px Comfortaa";
	ctx.fillStyle = "black";
	ctx.fillText("Queue:", (canvasWidth / 4.5) - 225, 250);
	ctx.fillStyle = "white";
	ctx.fillText("MAX_SIZE = 8", canvasWidth - 200, 135);
	for (var i = 0; i < numbers.length; i++) {
		ctx.strokeStyle = "#000000";
		ctx.lineWidth = 7;
		ctx.strokeRect(drawingCoords[0], 75, 100, 100);
		ctx.font="28px Comfortaa";
		ctx.fillStyle = "white";
		ctx.fillText(numbers[i], drawingCoords[2][0], drawingCoords[2][1]);
		ctx.font="22px Comfortaa";
		ctx.fillStyle = "black";
		ctx.fillText(i, drawingCoords[2][0], drawingCoords[2][1] + 75);
		drawingCoords[0] += 100;
		drawingCoords[2][0] += 100;
	}
	document.getElementById("numbersArea").innerHTML = numbers;
}

function enqueue() {
	if (numbers.length < 8) {
		numbers.push(Math.floor(random(1, 100)));
		flags.push(true);
	}
	drawQueue();
	createButton("enqueueText", "560px", "325px");
	document.getElementById("enqueueText").style.fontSize = "18px";
	document.getElementById("enqueueText").style.color = "white";
	document.getElementById("enqueueText").style.fontWeight = "bold";
	document.getElementById("enqueueText").style.textShadow = "5px 8px 36px #000000";
	document.getElementById("enqueueText").innerHTML = "This adds an element to the structure at the end, as long as there's room.";
}

function dequeue() {
	numbers.splice(numbers.indexOf(numbers[0]), 1);
	flags.pop();
	drawQueue();
	createButton("dequeueText", "610px", "325px");
	document.getElementById("dequeueText").style.fontSize = "18px";
	document.getElementById("dequeueText").style.color = "white";
	document.getElementById("dequeueText").style.fontWeight = "bold";
	document.getElementById("dequeueText").style.textShadow = "5px 8px 36px #000000";
	document.getElementById("dequeueText").innerHTML = "This removes the first element of the structure.";
}

function peek() {
	ctx.clearRect((canvasWidth / 4.5) - 200, 100, (canvasWidth / 4.5) - 100, 100);
	createButton("peekText", "660px", "325px");
	ctx.fillStyle = "white";
	ctx.fillText("peek() == " + numbers[0], (canvasWidth / 4.5) - 200, 135);
	document.getElementById("peekText").style.fontSize = "18px";
	document.getElementById("peekText").style.color = "white";
	document.getElementById("peekText").style.fontWeight = "bold";
	document.getElementById("peekText").style.textShadow = "5px 8px 36px #000000";
	document.getElementById("peekText").innerHTML = "This returns the first element of the queue, without removing it.";
}

function isFull() {
	ctx.clearRect((canvasWidth / 4.5) - 200, 100, (canvasWidth / 4.5) - 100, 100);
	createButton("isFullText", "710px", "325px");
	ctx.fillStyle = "white";
	ctx.fillText("isFull() == " + (numbers.length == 8), (canvasWidth / 4.5) - 200, 135);
	document.getElementById("isFullText").style.fontSize = "18px";
	document.getElementById("isFullText").style.color = "white";
	document.getElementById("isFullText").style.fontWeight = "bold";
	document.getElementById("isFullText").style.textShadow = "5px 8px 36px #000000";
	document.getElementById("isFullText").innerHTML = "Returns a boolean; true if the queue's length equals its maximum size (here, MAX_SIZE = 8).";
}

function isEmpty() {
	ctx.clearRect((canvasWidth / 4.5) - 200, 100, (canvasWidth / 4.5) - 100, 100);
	createButton("isEmptyText", "760px", "325px");
	ctx.fillStyle = "white";
	ctx.fillText("isEmpty() == " + (numbers.length == 0), (canvasWidth / 4.5) - 200, 135);
	document.getElementById("isEmptyText").style.fontSize = "18px";
	document.getElementById("isEmptyText").style.color = "white";
	document.getElementById("isEmptyText").style.fontWeight = "bold";
	document.getElementById("isEmptyText").style.textShadow = "5px 8px 36px #000000";
	document.getElementById("isEmptyText").innerHTML = "Returns a boolean; true if the queue has no elements.";
}

function createStack() {
	removeAllButtons();
	ctx.clearRect(0, 7, canvas.width, canvas.height);
	drawStack();

	createButton("push", "500px", "200px");
	document.getElementById("push").innerHTML = 
	'<button type="submit" class="button" style="z-index: 2; position: relative" onclick="push()">Push()</button>';
	
	createButton("pop", "600px", "200px");
	document.getElementById("pop").innerHTML = 
	'<button type="submit" class="button" style="z-index: 2; position: relative" onclick="pop()">Pop()</button>';
	
	createButton("showTop", "700px", "200px");
	document.getElementById("showTop").innerHTML = 
	'<button type="submit" class="button" style="z-index: 2; position: relative" onclick="showTop()">Top()</button>';
}

function drawStack() {
	ctx.clearRect(0, 7, canvas.width, canvas.height);
	var drawingCoords = [(canvasWidth / 2), 75, [(canvasWidth / 2) + 25, 125]];
	ctx.font="22px Comfortaa";
	ctx.fillStyle = "black";
	ctx.fillText("Stack:", (canvasWidth / 4.5) - 225, 250);
	ctx.fillStyle = "white";
	ctx.fillText("MAX_SIZE = 8", (canvasWidth / 2) + 100, 125);
	for (var i = 0; i < numbers.length; i++) {
		ctx.strokeStyle = "#000000";
		ctx.lineWidth = 7;
		ctx.strokeRect(drawingCoords[0], drawingCoords[1], 75, 75);
		ctx.font="24px Comfortaa";
		ctx.fillStyle = "white";
		ctx.fillText(numbers[numbers.length - 1 - i], drawingCoords[2][0], drawingCoords[2][1]);
		ctx.font="20px Comfortaa";
		ctx.fillStyle = "black";
		ctx.fillText((numbers.length - 1 - i), drawingCoords[2][0] - 55, drawingCoords[2][1]);
		drawingCoords[1] += 75;
		drawingCoords[2][1] += 75;
	}
	document.getElementById("numbersArea").innerHTML = numbers;
}

function push() {
	if (numbers.length < 8) {
		numbers.push(Math.floor(random(1, 100)));
		flags.push(true);
	}
	drawStack();
	createButton("pushText", "545px", "200px");
	document.getElementById("pushText").style.fontSize = "18px";
	document.getElementById("pushText").style.color = "white";
	document.getElementById("pushText").style.fontWeight = "bold";
	document.getElementById("pushText").style.textShadow = "5px 8px 36px #000000";
	document.getElementById("pushText").innerHTML = "This function adds a number to the stack, <br>if there is room. (MAX_SIZE = 8.)";
}

function pop() {
	numbers.pop();
	flags.pop();
	drawStack();
	createButton("popText", "645px", "200px");
	document.getElementById("popText").style.fontSize = "18px";
	document.getElementById("popText").style.color = "white";
	document.getElementById("popText").style.fontWeight = "bold";
	document.getElementById("popText").style.textShadow = "5px 8px 36px #000000";
	document.getElementById("popText").innerHTML = "This removes the last element of the stack";
}

function showTop() {
	createButton("showTopText", "745px", "200px");
	ctx.fillStyle = "white";
	ctx.fillText("top() == " + numbers[numbers.length - 1], (canvasWidth / 2) - 150, 125);
	document.getElementById("showTopText").style.fontSize = "18px";
	document.getElementById("showTopText").style.color = "white";
	document.getElementById("showTopText").style.fontWeight = "bold";
	document.getElementById("showTopText").style.textShadow = "5px 8px 36px #000000";
	document.getElementById("showTopText").innerHTML = "This returns the top element of the stack, <br>without removing it.";
}

function createLinkedList() {
	removeAllButtons();
	ctx.clearRect(0, 7, canvas.width, canvas.height);
	var drawingCoords = [];
	ctx.font = "24px Comfortaa";
	ctx.fillText("Insert Linked List here - " + numbers, 50, 50);
	return;
}

function createHeap() {
	removeAllButtons();
	ctx.clearRect(0, 7, canvas.width, canvas.height);
	var drawingCoords = [];
	ctx.font = "24px Comfortaa";
	ctx.fillText("Insert Heap here - " + numbers, 50, 50);
	return;
}

function createDblLinkedList() {
	removeAllButtons();
	ctx.clearRect(0, 7, canvas.width, canvas.height);
	var drawingCoords = [];
	ctx.font = "24px Comfortaa";
	ctx.fillText("Insert Doubly Linked List here - " + numbers, 50, 50);
	return;
}
