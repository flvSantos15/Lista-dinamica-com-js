let valores = []
let num = document.getElementById('num')
let list = document.querySelector('select#tab')
let res = document.getElementById('res')

function isNumber(n){
   if(Number(n) >= 1 && Number(n) <= 100){
      return true
   }else{
      return false
   }
}

function inList(n, l){
   if(l.indexOf(Number(n)) != -1){
      return true
   }else{
      return false
   }
}

function adicionar(){
   if(isNumber(num.value) && !inList(num.value, valores)){
      valores.push(Number(num.value))
      var item = document.createElement('option')
      item.text += `Valor ${num.value} adicionado!`
      list.appendChild(item)
      res.innerHTML = ''
   }else{
      alert('Valor inválido ou já encontrado na lista!')
   }
   num.value = ''
   num.focus()
}

function informar(){
   if(valores.length == 0){
      alert('Adicione valores antes de finalizar!')
   }else{
      let tot = valores.length
      let mai = valores[0]
      let men = valores[0]
      let soma = 0
      let media = 0
      for(i in valores){
         soma += valores[i]
         if(valores[i] > mai){
            mai = valores[i]
         }else if(valores[i] < men){
            men = valores[i]
         }
      }
      media = soma/tot
      res.innerHTML = ''
      res.innerHTML += `<p>Sua lista tem ${tot} valores</p>`
      res.innerHTML += `<p>O maior valor é ${mai}</p>`
      res.innerHTML += `<p>O menor valor é ${men}</p>`
      res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
      res.innerHTML += `<p>A media dos valores é ${media}</p>`
   }
}
//'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback'