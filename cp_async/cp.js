var t=[1,2,3]

const wait =()=>{
  return new Promise((resolve)=>setTimeout(resolve,1000))
}



const affiche=async(tab)=>{
    for(let i=0; i<tab.length; i++){
        console.log(tab[i])
        await wait()
    }


}

// affiche(t)


const consAPI=async()=>{
    try {
       const res= await fetch('https://jsonfhgfplaceholder.typicode.com/users')
       const resJson = await res.json()
       console.log(resJson)
        
    } catch (error) {
        console.log("problem")
    }
}

// consAPI()

const Call1 =()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('Call1 terminate')
        }, 1000);
    })
}




const Call2=()=>{
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve ("Call2 terminate")
            }, 1000);
        })
    }
    
    const appelPromesse=async()=>{
        try {
            const [resCal1,resCal2] = await Promise.all([Call1(),Call2()])
    
            console.log(`Resultat 1 ${resCal1}`)
            console.log(`Resultat 2 ${resCal2}`)
        } catch (error) {
            console.log(error)
        }
    }
    
    // appelPromesse()
    

    var urls = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/9",
    "https://jsonplaceholder.typicode.com/users/7"
]

const consomationApi=async()=>{
    try {
        var promAPI = urls.map((el,i,t)=> fetch(el).then((resultat)=>resultat.json()) )
        var resultat = await Promise.all(promAPI)
        console.log(resultat)
    } catch (error) {
        console.log(error)
    }
}

consomationApi()