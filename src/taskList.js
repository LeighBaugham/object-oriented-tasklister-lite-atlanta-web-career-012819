class TaskList {

    constructor (div) {
        this.uL = document.createElement('ul')

        this.div = div
        // this.all = []
        this.div.appendChild(this.uL)
    }
     renderAll = (event)=> {
        event.preventDefault()
        console.log("rendering")
        const task = this.newTask(event.target.description.value)
       
        // this.div.innerText = ""
        // this.all.forEach(task => {
          const li = task.render()  
          this.uL.appendChild(li)
          console.log(li)

          event.target.reset()
        
        
    }

     newTask(task) {
        const newTask = new TaskListItem(task)
        // this.all.push(newTask)
        return newTask
    }
  
}
