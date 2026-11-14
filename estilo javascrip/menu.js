const megaMenu = document.getElementById("megaMenu");

const openBtn = document.getElementById("openMenu");

const closeBtn = document.getElementById("closeMenu");

const fondo = document.getElementById("menuBackground");

const links = document.querySelectorAll(".mega-links a");

openBtn.onclick = ()=>{

    megaMenu.classList.add("active");

}

closeBtn.onclick = ()=>{

    megaMenu.classList.remove("active");

    fondo.style.opacity=0;

}

links.forEach(link=>{

    link.addEventListener("mouseenter",()=>{

        fondo.style.backgroundImage=`url('${link.dataset.img}')`;

        fondo.style.opacity=1;

    });

});

megaMenu.addEventListener("mouseleave",()=>{

    fondo.style.opacity=0;

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        megaMenu.classList.remove("active");

    }

});