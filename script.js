const items = [
    [0, "top_left"],
    [1, "top_center"],
    [2, "top_right"],
    [3, "center_left"],
    [4, "center_center"],
    [5, "center_right"],
    [6, "bottom_left"],
    [7, "bottom_center"],
    [8, "bottom_right"],
]

const boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const container = document.querySelector(".container")
const select = document.createElement("select")

const box = document.createElement("div")
box.setAttribute("class", "box")

boxes.map(() => {
    let item = document.createElement("div")
    item.style.backgroundColor = "crimson"
    item.style.borderRadius = "10px"
    return box.appendChild(item)
})

items.map(item => {
    let opt = document.createElement("option")
    opt.value = item[0]
    opt.innerText = item[1]
    return select.appendChild(opt)
})

select.setAttribute("class", "select")

container.appendChild(box)
container.appendChild(select)

function selectBox(){
    boxes.map(i => {
        console.log(i);
        if (i == select.value){
            console.log(box.children);
            return box.children[i].style.backgroundColor = "lightgreen";
        } else return box.children[i].style.backgroundColor = "crimson";
    })
}

select.addEventListener("change", selectBox)


