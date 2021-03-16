'use strict';
function Flower (id, name, image, season) {
  this.id = id;
  this.name = name;
  this.image = image;
  this.season = season;

  Flower.all.push(this);
}

Flower.all =[];

  Flower.prototype.addTOLocalStorage =  function(){
  localStorage.setItem('flower', JSON.stringify(Flower.all));
};


 const  handlesave =function( event){
   event.preventdefault();

   const flower = new Flower(Flower.all.length +1 , event.target.name.value,
    event.target.Image.value, event.target.Season.value);
    
    Flower.addTOLocalStorage();
    form.reset();
    renderToHtml ();


 }

 const renderToHtml = function(){
   if (localStorage.Flower){
     const tmplFlower = JSON.parse(localStorage.getItem('Flower'));
     for (let index = 0; index < Flower.length; index++) {
       const trTag = document.createElement('tr');

       const tdTag1 = document.createElement('td');
       tdTag1.textContent =Flower[index].Id;
       trTag.appendChild(tdTag1);

       
       const tdTag2 = document.createElement('td');
       tdTag2.textContent =Flower[index].name;
       trTag.appendChild(tdTag2);

       
       const tdTag3 = document.createElement('td');
       tdTag3.textContent =Flower[index].Image;
       trTag.appendChild(tdTag3);

       
       const tdTag4 = document.createElement('td');
       tdTag4.textContent =Flower[index].Season;
       trTag.appendChild(tdTag4);
       
        body.appendChild(trTag);
     }


   }
 }

 const addLocalStorageToFlowerArray = function(){
   
   JSON.parse(localStorage.getItem('Flower'));
   for (let index = 0; index < Flower.length; index++) {
    Flower.all.push(  Flower[index]);
   }
  
 }











 const form = document.getElementById('form');
 const body = document.getElementById ('body');

 form.addEventListener("submit",handlesave);
 console.log(Flower.all);