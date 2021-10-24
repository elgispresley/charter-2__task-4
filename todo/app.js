const input = document.getElementById("input");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const total = document.getElementById("total");
let i = 0;

btn.addEventListener("click", () => {
	
	if (input.value === "") {
	alert('Вы же ничего не ввели, кек')
   return;
	}

	createDeleteElements(input.value);
	input.value = "";
});

function createDeleteElements(value) {
  i++;
  
  const btn_delete = document.createElement("button");
  const btn_done = document.createElement("button");
  const li = document.createElement("li");
  
  li.className = "li";
  li.textContent = value;
  
//   btn_done.className = "btn-done"
//   btn_done.textContent = "Сделано"
//   li.appendChild(btn_done);


  btn_delete.className = "btn-delete";
  btn_delete.textContent = "Удалить";
  li.appendChild(btn_delete);
  
  btn_delete.addEventListener("click", () => {
	  i--;
	  total.textContent = i;
	  result.removeChild(li);
	});
	
	li.addEventListener("click", () => {
		li.classList.toggle("li-active");
	});
	total.textContent = i;
	
	result.appendChild(li);
}
