//--- Fetching data with asyn function

 async function FetchData(){

    
    //--- Url Added 
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    

    //-- Error Message Accessed
    if(response.status==response.status){
        let msg =document.getElementById("error-msg").style.display="block"
        
    }

    // Respons Converted Into Json
    let data = await response.json()
    console.log(data)

    // Accessed Pokemon Image Source from API & Added it into imge src through DOM
    let pokeUrl= await data.sprites.front_default
    let Image = document.getElementById("pokemon-img")
    Image.src=pokeUrl
    

  
}

FetchData()