
// Your Code Here
async function main(){
    let response = await fetch ('http://localhost:3001/listBooks')
    let books = await response.json()
    books.forEach(updateBook)
}
 function updateBook(book){
     let root = document.querySelector('#root')
     let li = document.createElement('li')
     li.textContent = book.title
     let quantityIn = document.createElement('input')
     quantityIn.value = book.quantity
     let button = document.createElement('button')
     button.textContent = 'save'
     button.addEventListener('click', ()  => {
         fetch('http://localhost:3001/updateBook', {
             method: 'PATCH',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify( {
               id: book.id,
               quantity: quantityIn.value  
             })
         })
     })
     li.append(quantityIn, button)
     root.append(li)
 }
main();