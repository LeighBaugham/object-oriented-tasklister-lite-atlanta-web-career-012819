document.addEventListener("DOMContentLoaded", () => {

  const listContainer = document.getElementById("list");

  const taskList = new TaskList(listContainer);

  // const renderApp = () => (listContainer.innerHTML = taskList.render());
  // Add Form Behavior Here!
  const formSubmit = document.getElementById("create-task-form")
  formSubmit.addEventListener('submit', taskList.renderAll)
});
