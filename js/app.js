class postCode{
    searchCode(){
        button.addEventListener("click", () => {
            event.preventDefault();
            console.log(city.value, street.value, number.value);

            async function getData(street, number, city){
                let url = 'https://api.postit.lt/?term='+city+''+street+''+number+'&key=postit.lt-examplekey';
                let response = await fetch(url);
                return await response.json();
            }

            async function showData(){
                const data = await getData(city.value, street.value, number.value);
                const postCode = data['data'][0]['post_code'];
                console.log(postCode)
                field.innerHTML = postCode
            }
            showData();
            });
    }
}

let search = new postCode();

const city = document.querySelector("#city");
const street = document.querySelector("#street");
const number = document.querySelector("#number");
const button = document.querySelector("#button");
const field = document.querySelector("#postCode");

search.searchCode();