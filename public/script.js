function reload(){
    fetch('/addnum', {
        moethod: 'GET'
    })
    .then(res=>res.json())
    .then(body=>{
        if(Object.keys(body).length===0){
            document.getElementById('numbers').innerHTML = 0
        }
        else{
            document.getElementById('numbers').innerHTML = body[0].num;
            document.getElementById('if_id').innerHTML = body[0]._id;
        }
    })
}

window.onload = ()=>{reload()}

function addnum(event){
    let numbers = document.getElementById('numbers');
    if(numbers.innerHTML==0){
        fetch('/addnum', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ num: 1 })
        })
        .then(() => reload());
    }else{
        const id = document.getElementById('if_id').innerHTML;
        fetch(`/addnum/${id}`, {
            method: 'PATCH',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ num: numbers.innerHTML })
        })
        .then(() => reload());
    }
}