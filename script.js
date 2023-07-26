document.addEventListener("DOMContentLoaded", function () {
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    const todoList = document.getElementById("todo-list");
  
    addButton.addEventListener("click", function () {
      const todoText = todoInput.value;
      if (todoText.trim() !== "") {
        addTodoItem(todoText);
        todoInput.value = "";
      }
    });
  
    function addTodoItem(todoText) {
      const listItem = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      const todoTextSpan = document.createElement("span");
      todoTextSpan.textContent = todoText;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      
      listItem.appendChild(checkbox);
      listItem.appendChild(todoTextSpan);
      listItem.appendChild(deleteButton);
      todoList.appendChild(listItem);
  
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          listItem.style.textDecoration = "line-through";
          todoList.appendChild(listItem);
        } else {
          listItem.style.textDecoration = "none";
          todoList.prepend(listItem);
        }
      });
  
      deleteButton.addEventListener("click", function () {
        listItem.remove();
      });
    }
  });
  