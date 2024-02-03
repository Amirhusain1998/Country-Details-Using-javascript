async function getApi()
{
    let name="bharat";
    let input=document.getElementById("search")
    if(input.value !="")
    {
        name=input.value;
    }
    try {
         let Response=await fetch("https://restcountries.com/v3.1/name/"+name)
    let [data]=await Response.json();
             
        document.getElementById("name").innerHTML=data.name.official
        document.getElementById("capital").innerHTML=data.capital
        document.getElementById("flags").src=data.flags.svg
        document.getElementById("area").innerHTML=data.area
        document.getElementById("population").innerHTML=data.population
        document.getElementById("region").innerHTML=data.region
        document.getElementById("subregion").innerHTML=data.subregion
        document.getElementById("continents").innerHTML=data.continents
        document.getElementById("borders").innerHTML=data.borders
        document.getElementById("landlocked").innerHTML=data.landlocked
        document.getElementById("independent").innerHTML=data.independent
        document.getElementById("unMember").innerHTML=data.unMember
        document.getElementById("timezones").innerHTML=data.timezones
        document.getElementById("maps").href=data.maps.googleMap
        
    } catch (error) {
        alert("Country name is Invalid")
    }
   
    
}

        
   

getApi();