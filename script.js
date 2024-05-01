const list = document.querySelector('.list')
const showAllButton = document.querySelector('.show-all')
const mapAllButton = document.querySelector('.map-all')
const sumAllButton = document.querySelector('.sum-all')
const filterVeganButton = document.querySelector('.filter-vegan')

function formartCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

function showAll(items) {
  let novaLi = ''

  items.forEach((menuOpt) => {
    novaLi += `
        <li>
            <img src="${menuOpt.src}">
            <p> ${menuOpt.name}</p>
            <p class="price">${formartCurrency(menuOpt.price)}</p>
        </li>    
            `
  })

  list.innerHTML = novaLi
}

function mapAll() {
  const newPrice = menuOptions.map((product) => ({
    // ...product,
    name: product.name,
    price: product.price * 0.9,
    vegan: product.vegan,
    src: product.src
  }))

  showAll(newPrice)
}

function sumAll() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
  list.innerHTML = 
   `<li>
       A soma de todos os itens do menu é: ${formartCurrency(totalValue)}
    </li>`
}

function filterVegan() {
  const justVegan = menuOptions.filter((product) => product.vegan)

  showAll(justVegan)
}

showAllButton.addEventListener('click', () => showAll(menuOptions))
mapAllButton.addEventListener('click', mapAll)
sumAllButton.addEventListener('click', sumAll)
filterVeganButton.addEventListener('click', filterVegan)
