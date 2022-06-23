var requestOptions = {
    method: 'GET',
    
};

    fetch("https://jsonplaceholder.typicode.com/todos", requestOptions)
    .then(response => response.json())
    .then(result=>{
        for(i=0,len=result.length;i<len;i++)
{
    let title=result[i].title;
    let completed=result[i].completed;
    console.log(result[i].title);

}    
}
    
)