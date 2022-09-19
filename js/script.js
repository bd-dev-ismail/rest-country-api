const loadCountries = () =>{
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => displayCountries(data));
}
const displayCountries = countries =>{
    // console.log(countries)
    const countriesHtml = countries.map((country) =>
      getCountryHmtl(country)
    );
    // console.log(countriesHtml)
    const container = document.getElementById("countries");
    container.innerHTML = countriesHtml.join(' ');
}
const getCountryHmtl = country =>{
    console.log(country)
    return `
        <div class="country">
            <h2>${country.name}</h2>
            <img src="${country.flags.png}">
        </div>
    `;
}
loadCountries()