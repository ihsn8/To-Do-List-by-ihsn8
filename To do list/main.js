const list = document.getElementById("list")

function onFormSumbit(e) {
    e.preventDefault()
    const inputValue = e.target.children[0].value

    list.appendChild(createListItem(inputValue))
}

function createListItem(inputValue) {
    const item = document.createElement("div")
    item.innerHTML = `
        <div>
            <input type="checkbox" />
            <span>${inputValue}</span>
        </div>
        <button>X</button>
    `
    return item
}