window.onload = function () {

    document.getElementById("nose").addEventListener("click",function(e){ 
        //getting joke
        jokeprom=fetch("https://api.chucknorris.io/jokes/random").then(response => response.json());

        async function resolveprom() {
            const joke = await jokeprom;
            console.log(joke.value);

            document.getElementById("joke").innerHTML=joke.value
        }


        resolveprom();

        
        
    })

}