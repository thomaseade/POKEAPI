async function getPokemonInfo() {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
            <h2>${data.name.toUpperCase()}</h2>
            <table>
                <tr>
                    <td rowspan="4">
                        <img src="${data.sprites.front_default}" alt="Imagen de ${data.name}" />
                    </td>
                    <td>Nombre:</td>
                    <td>${data.name}</td>
                </tr>
                <tr>
                    <td>Peso:</td>
                    <td>${data.weight}</td>
                </tr>
                <tr>
                    <td>Altura:</td>
                    <td>${data.height}</td>
                </tr>
                <tr>
                    <td>Tipo:</td>
                    <td>${data.types.map(type => type.type.name).join(", ")}</td>
                </tr>
                <tr>
                    <td>Habilidades:</td>
                    <td colspan="2">
                        <ul>
                            ${data.abilities.map(ability => `<li>${ability.ability.name}</li>`).join("")}
                        </ul>
                    </td>
                </tr>
            </table>
        `;
    } catch (error) {
        console.log(error);
    }
}

document.getElementById("searchBtn").onclick = getPokemonInfo;