function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '•';
    document.body.appendChild(snowflake);

    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.opacity = Math.random();
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s, ${Math.random() * 5 + 5}s`;


    setTimeout(() => {
        snowflake.remove();
    }, 10000); 
}


setInterval(createSnowflake, 300);


function changeImage1() {
    var image = document.getElementById("choice-img");
    image.src = "assets/img/attic3.jpg"

    document.getElementById("add-box-here").classList.remove('box');
    var link = document.getElementById("get-kip");
    link.style.opacity = "0.0";
}

function changeImage2() {
    var image = document.getElementById("choice-img");
    image.src = "assets/img/attic.jpg"

    document.getElementById("add-box-here").classList.add('box');
}

let atticimg1 = document.getElementById("choice-image1");

atticimg1.onclick = changeImage1;

let atticimg2 = document.getElementById("choice-image2");

atticimg2.onclick = changeImage2;

function endGame() {
    var link = document.getElementById("get-kip");
    link.style.opacity = "1.0";
}

let box = document.getElementById("add-box-here");
box.onclick = endGame;

let womp = document.getElementById("choice-image3");
womp.onclick = showSignal;



