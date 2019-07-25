function go(countryname)
{
	console.log(countryname.value)
	const url='https://restcountries.eu/rest/v2/name/'.concat(countryname.value);

	document.getElementById("container").innerHTML='';
	fetch(url)
	.then(data => data.json())
	.then(res =>{
		res.forEach(temp=>{
		let card = document.createElement("div");

        let name = document.createTextNode('Name:' + temp.name + ',   ');
        card.appendChild(name);

        let capital = document.createTextNode('capital:' + temp.capital+ ',   ');
        card.appendChild(capital);
        let container = document.querySelector("#container");
        container.appendChild(card);
    });
	})
	.catch(err => console.log("Error:", err));
}