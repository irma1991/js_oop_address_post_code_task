// fetchinam API
async function getData(){
    let url = 'https://api.postit.lt/?term=+'city'+'street'+'number'+&key=postit.lt-examplekey';
    let response = await fetch(url);
    return await response.json();
}

// pasiemam duomenis is API
async function showData() {
    const Data = await getData();
    let Info = Data.data;
    console.log(Info)

    class postCode{
        document.getElementById("button").addEventListener("click", function(){
        });
    }
}

showData()