const todoname = document.getElementById("todoname")
todoname.addEventListener("keyup", (e) => {
    if(e.code === "Enter") {
        addList()
        todoname.value = ""
    }
})




// menambahkan list 
    const addList = () => {
    if (todoname.value.length == 0) {
        alert("Silahkan isi list terlebih dahulu")
    }else{
        output1.innerHTML += `
            <div class="output1">
                <span id="taskname" draggable="true" ondragstart="drag(event)">
                    ${todoname.value}
                    <button class="delete">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </span>
            </div>
        `;
    }

    todoname.value = ""

// mengahapus to do list
    const curretntTask = document.querySelectorAll('.delete');
    for(let i =0; i < curretntTask.length;i++){
        curretntTask[i].onclick=function() {
            const confirmdel = confirm("Apakah Anda Yakin Menghapus?")
            if (confirmdel) {
                this.parentNode.remove();
            }
        }   
    }
}
// drag and drop
    function allowDrop(ev) {
        ev.preventDefault();
    }
    
    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    
    function drop(ev) {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        ev.target.append(document.getElementById(data));
    }
    
    function dropConfirm(ev) {
        ev.preventDefault();
        const tanya = confirm("Anda Beneran Sudah menyelesaikanya?")
        if(tanya) {
            let data = ev.dataTransfer.getData("text");
            ev.target.append(document.getElementById(data));
        }
    }



