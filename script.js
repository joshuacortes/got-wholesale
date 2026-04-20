fetch('data.json')
.then(res => res.json())
.then(data => {

const container = document.getElementById('listings');
const search = document.getElementById('search');

function showListings(items){
container.innerHTML='';

items.forEach(item=>{
container.innerHTML += `
<div class="card">
<h2>${item.name}</h2>
<p>${item.city}, ${item.state}</p>
<p>${item.category}</p>
<p>${item.phone}</p>
<a href="${item.website}" target="_blank">Visit Website</a>
</div>
`;
});
}

showListings(data);

search.addEventListener('input',()=>{
const val = search.value.toLowerCase();

const filtered = data.filter(i =>
i.name.toLowerCase().includes(val) ||
i.city.toLowerCase().includes(val) ||
i.category.toLowerCase().includes(val)
);

showListings(filtered);

});

});
