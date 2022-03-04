let lolidata = [];

fetch("data/lolidata.json")
.then(response => response.json())
.then(lolidatax => {
lolidata = lolidatax;
let sel = document.getElementById('select-loli');
for(let i = 1; i < lolidata.length; i++) {
    let opt = document.createElement('option');
    opt.innerHTML = lolidata[i]['name'] + " (" + lolidata[i]['display-name'] + ")";
    opt.value = "loli" + i;
    sel.appendChild(opt);
}
});

function DisplayLoli() {
	let lolix = document.getElementById('select-loli');
	if (lolix.value==='loli0') {document.getElementById('loli-result').innerHTML = ``;return;}
	let esposa = lolidata[(lolix.value).substr(4)]['esposa']=="Ninguém" ? "Ninguém":lolidata[(lolix.value).substr(4)]['esposa']=='???' ? '???':
	lolidata[lolidata[(lolix.value).substr(4)]['esposa']]['name'] + ' (' + lolidata[lolidata[(lolix.value).substr(4)]['esposa']]['display-name'] + ')';
	document.getElementById('loli-result').innerHTML = `
		<div>
		<p>Parceiro: ${lolidata[(lolix.value).substr(4)]['display-name']}</p>
		<p>Nome: ${lolidata[(lolix.value).substr(4)]['name']}</p>
		<p>Espécie: ${lolidata[(lolix.value).substr(4)]['espécie']}</p>
		<p>Temperamento: ${lolidata[(lolix.value).substr(4)]['temperamento']}</p>
		<p>Cabelo: ${lolidata[(lolix.value).substr(4)]['corDoCabelo']}</p>
		<p>Olho: ${lolidata[(lolix.value).substr(4)]['corDoOlho']}</p>
		<p>Classe: ${lolidata[(lolix.value).substr(4)]['classe']}</p>
		<p>Ataque Físico: ${lolidata[(lolix.value).substr(4)]['patk']}</p>
		<p>Ataque Mágico: ${lolidata[(lolix.value).substr(4)]['matk']}</p>
		<p>Velocidade: ${lolidata[(lolix.value).substr(4)]['spd']}</p>
		<p>Esposa: ${esposa}</p>
		</div>
	`;
}
