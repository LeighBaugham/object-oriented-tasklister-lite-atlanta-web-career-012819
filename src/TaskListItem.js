class TaskListItem {
    constructor (task) {
        this.task = task
        this.delBtn = document.createElement('button')
        this.delBtn.innerText = "delete"
        this.delBtn.addEventListener('click', function(event) {
            event.target.parentElement.remove()
        })
    }
  
    render() {
        const li = document.createElement('li')
        li.innerText = this.task
        li.appendChild(this.delBtn)
        return li
    }
}
