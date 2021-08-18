let createNode = (elem) => {
    return document.createElement(elem)
}
let appendNNode = (parent, element) => {
    return parent.appendChild(element)
}
const prod = document.getElementById("products")
let url = "http://localhost:5000/products";
fetch(url)
    .then(res => res.json())
    .then(data => {
        return data.map(produc => {
            let items = createNode('li')
            items.innerHTML = produc.name
            appendNNode(prod, items)
        })
    })
    .catch((error) => {
        console.log(error)
    })
const fru = document.getElementById("fruList")
let url2 = "http://localhost:5000/products/fruits";
fetch(url2)
    .then(res => res.json())
    .then(data => {
        return data.map(fruit => {
            let li = createNode('li')
            li.innerHTML = fruit.name
            appendNNode(fru, li)
        })
    })

const veg = document.getElementById("vegList")
let url3 = "http://localhost:5000/products/vegetables";
fetch(url3)
    .then(res => res.json())
    .then(data => {
        return data.map(vegetable => {
            let li = createNode('li')
            li.innerHTML = vegetable.name
            appendNNode(veg, li)
        })
    })