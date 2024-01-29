function addTask() {
    const inputTask = document.getElementById('inputTask');
    const taskList = document.getElementById('taskList');


    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
  
    const span = document.createElement('span');
    span.textContent = inputTask.value;
  
    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    
    taskList.appendChild(listItem);
  
    inputTask.value = '';
    checkBox.addEventListener('change', function() {
      if (checkBox.checked) {
        span.style.textDecoration = 'line-through';
      } else {
        span.style.textDecoration = 'none';
      }
    });
  }
  