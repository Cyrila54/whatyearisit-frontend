
fetch ('whatyearisit-backend-bt6s9q02t-cyrila54.vercel.app/year')
.then ((response)=>response.json())
.then ((data)=>{
        console.log(data);
    document.querySelector('#year').textContent= 'helo';

})