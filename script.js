var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll(".name");
var btns = document.querySelectorAll(".delete");

function InputLength(){
	return input.value.length;
}

function DeleteItem(e){
		var locLi = e.target.parentElement;
		locLi.parentNode.removeChild(locLi);

}
function CreateListElement(){
	var span1 = document.createElement("span");
	var span2 = document.createElement("span");

	var li = document.createElement("li");
	var bt = document.createElement("button");
	var span1attr = document.createAttribute("class");
	var span2attr = document.createAttribute("style");

	var btattr = document.createAttribute("class");
	btattr.value = "delete";
	span1attr.value = "name";
	span2attr.value = "margin-right:4px;";

	span1.setAttributeNode(span1attr);
	span1.setAttributeNode(span2attr);
	span1.appendChild(document.createTextNode(input.value));
	li.appendChild(span1);
	
	bt.setAttributeNode(btattr);
	bt.appendChild(document.createTextNode("delete"));
	li.appendChild(bt);
	bt.addEventListener("click", DeleteItem);

	ul.appendChild(li);	


	input.value = "";		
}

function addListAfterClick(){
	/*console.log("addlistafterclick entered");*/
	if (InputLength() > 0){
		CreateListElement();
	}
}

function addListAferKeypress(ev){
	if (input.value.length > 0 && ev.keyCode===13 ){
		CreateListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAferKeypress);

ul.addEventListener("click", function(ev){
/*	var element = ev.srcElement;
*/
	var element = ev.srcElement;
		if (element.className === "name" || element.className==="name done") {
			element.classList.toggle("done");
		}
	}
);
Array.from(btns).forEach(function(btn){
	btn.addEventListener("click", DeleteItem)
});



