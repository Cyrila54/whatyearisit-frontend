
fetch ('https://whatyearisit-backend-lilac.vercel.app/year')
.then ((response)=>response.json())
.then ((data)=>{
        console.log(data);
    document.querySelector('#year').textContent= "vv" //data.year

})