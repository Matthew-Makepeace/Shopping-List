var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

// Constant number value for maximum number of lists you can add.
const _MaxListCount = 12;

// number variable to count the total number of lists you have.
var totalListCount = 0;

function inputLength() {
	return input.value.length;
}

function createListElement() {
	if (_MaxListCount > totalListCount)
	{
		totalListCount++;

		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	
		// Create Event Listener to toggle underline text.
		li.addEventListener("click", slashLineText);
	
		// Create Delete Button beside the Lists.
		var del = li.appendChild(document.createElement("button"));
		del.appendChild(document.createTextNode("Delete"));
		// Event Listener and Function to remove parrent element.
		del.addEventListener("click", deleteListAfterClick);
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function slashLineText(event){
	event.target.classList.toggle("done");
}

function deleteListAfterClick(event)
{
	totalListCount--
	event.target.parentElement.remove();
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);