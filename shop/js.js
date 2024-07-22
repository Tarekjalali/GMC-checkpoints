var plus = document.querySelectorAll('.btnplus')

var minus = document.querySelectorAll('.btnminus')
var hearts = document.querySelectorAll('.heart')
var trashes = document.querySelectorAll('.trash')

var sum = 0



for(let i=0 ; i<plus.length ; i++){
    plus[i].addEventListener('click', function(){
        plus[i].previousElementSibling.innerText++
        sommetotal()
    })
}




for(let i=0 ; i<minus.length ; i++){
    minus[i].addEventListener('click', function(){
        if(minus[i].nextElementSibling.innerText>0){

            minus[i].nextElementSibling.innerText--
            sommetotal()

        }
       
    })
}


for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function() {
        let svg = hearts[i].querySelector('svg');
        let currentColor = svg.getAttribute('fill');
        if (currentColor === 'red') {
            svg.setAttribute('fill', 'black');
        } else {
            svg.setAttribute('fill', 'red');
        }
    });
}

    
    for (let i = 0; i < trashes.length; i++) {
        trashes[i].addEventListener('click', function() {
            
            trashes[i].closest('.card').remove();
            sommetotal()
        });
    }




    
        function sommetotal (){   
            var unitprice = document.querySelectorAll('.unitprice')
            var qte = document.querySelectorAll('span')
            console.log(unitprice)
            console.log(qte)
            var sum=0
            var resultat = document.querySelector('#totalprice')           
        
            for(let i=0 ; i<unitprice.length ; i++){        
            sum+=unitprice[i].innerText * qte[i].innerText
    
        }

        console.log(sum)
            resultat.innerText=sum

       
      
            

       
       
    }




   

  
