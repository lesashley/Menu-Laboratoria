document.getElementById("toggle").addEventListener("click",function (e) {
  e.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById("body").classList.toggle("overflow-hidden");

})

var lastScrollTop = 0;
window.addEventListener("scroll", function () {
  var currentScroll = window.pageYOffset || document.body.scrollTop;
  if (currentScroll > lastScrollTop) {
    document.getElementById("nav-header").classList.remove("header-in");
    document.getElementById("nav-header").style.opacity = 0;
  } else{
    document.getElementById("nav-header").classList.add("header-in");
    document.getElementById("nav-header").classList.add("solid");
    document.getElementById("nav-header").style.opacity = 1;
    if (currentScroll <=3) {
      document.getElementById("nav-header").classList.remove("solid");
      document.getElementById("nav-header").classList.remove("header-in");
    }
  }
  lastScrollTop = currentScroll;
},false);


function Pictures(){
  this.coders = [];
  this.addCoders = function (prom,archivo,nombre){
    this.coders.push({
      promocion : prom,
      file : archivo,
      name : nombre
    });
  }
}

var picture = new Pictures();
picture.addCoders("lima-6","1.png","Fiorella Quispe");
picture.addCoders("lima-6","2.png","Maria Lourdes Vilchez");
picture.addCoders("lima-6","3.png","Leydi Maldonado");
picture.addCoders("lima-6","4.png","Yessenia Huaman");
picture.addCoders("lima-6","5.png","Mirian Mendoza");
picture.addCoders("lima-6","6.png","Elizabeth Condori");
picture.addCoders("lima-6","7.png","Arantza Burga");
picture.addCoders("lima-6","8.png","Grecia Rayme");
picture.addCoders("lima-6","9.png","Janine Vega");
picture.addCoders("lima-6","10.png","Rosario Félix");
picture.addCoders("lima-6","11.png","Daguiana Revoredo");
picture.addCoders("lima-6","12.png","Mishel Velásquez");
picture.addCoders("lima-6","13.png","Nadia Cuadros");
picture.addCoders("lima-6","14.png","Michelle More");
picture.addCoders("lima-6","15.png","Marilu Llamoca");
picture.addCoders("lima-6","16.png","Mariel García");
picture.addCoders("lima-6","17.png","Fiorella Cisneros");
picture.addCoders("lima-6","18.png","Geraldine Chauca");
picture.addCoders("lima-6","19.png","Yelitza Choque");
picture.addCoders("lima-6","20.png","Stephanie Hiyagon");
picture.addCoders("lima-6","21.png","Emma Alva");
picture.addCoders("lima-6","22.png","Dana Franco");
picture.addCoders("lima-6","23.png","Flor Retamozo");
picture.addCoders("lima-6","24.png","Nathaly Pacheco");
picture.addCoders("lima-6","25.png","Erika Vidal");
picture.addCoders("lima-6","26.png","Katherine Ortega");
picture.addCoders("lima-6","27.png","Schelsen Majuan");
picture.addCoders("lima-6","28.png","Flor Tello");
picture.addCoders("lima-6","29.png","Leslie Avendaño");
picture.addCoders("lima-6","30.png","Cindy Mendoza");
picture.addCoders("lima-6","31.png","Annia Flores");
picture.addCoders("lima-6","32.png","Betzy Loayza");
picture.addCoders("lima-6","33.png","Ayda Sulca");
picture.addCoders("lima-6","34.png","Luz Gutierrez");
picture.addCoders("lima-6","35.png","Nakarid Llave");
picture.addCoders("lima-6","36.png","Angie Condor");
picture.addCoders("lima-6","37.png","Maricarmen Rojas");
picture.addCoders("lima-6","38.png","Ariana Cabana");
picture.addCoders("lima-6","39.png","Flor Condori");
picture.addCoders("lima-6","40.png","Mitchell Rodriguez");
picture.addCoders("lima-6","41.png","Naomi Villanueva");
picture.addCoders("lima-6","42.png","Mary Castillo");
picture.addCoders("lima-6","43.png","Miriam Peralta");
picture.addCoders("lima-6","44.png","Karin Alejo");
picture.addCoders("lima-6","45.png","Liliana Peña");
picture.addCoders("lima-6","46.png","Ruth Salvador");
picture.addCoders("lima-6","47.png","Maribel Sevilla");
picture.addCoders("lima-6","48.png","Wendy Reyes");
picture.addCoders("lima-6","49.png","Cinthia ");
picture.addCoders("lima-6","50.png","Maria Cutipa");
picture.addCoders("lima-6","51.png","Ana Durand");
picture.addCoders("lima-6","52.png","Glisse Jorge");
picture.addCoders("lima-6","53.png","Neiza Nuñez");
picture.addCoders("lima-6","54.png","Sandra Solorzano");

//Document Fragment
var dfm = document.createDocumentFragment();
function createImages(prom,src,name) {
  var figure = document.createElement("figure");
  var imagen = document.createElement("img");
  imagen.classList.add("style-picture");
  imagen.src="assets/images/students/"+src;
  imagen.alt=name;
  var figcaption = document.createElement("figcaption");
  figcaption.setAttribute("class","center");
  var span = document.createElement("span");
  span.innerHTML = name;
  dfm.appendChild(figure);
  figure.appendChild(imagen);
  figure.appendChild(figcaption);
  figcaption.appendChild(span);
  return dfm;
}

picture.coders.forEach(function (e) {
  document.getElementById("grid").appendChild(createImages(e.promocion,e.file,e.name));
});
