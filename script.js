const container = document.querySelector(".container");

const createDivs = () => {
   let numberOfSquares = prompt("How many squares do you want on each side?");

   if (numberOfSquares <= 100) {
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'square';
        newDiv.style.width = `${(960 / numberOfSquares)}px`;
        newDiv.style.height = `${(960 / numberOfSquares)}px`;
        container.appendChild(newDiv);
        
    };
   } else {
    alert("Please input a number lower than 101.")
   }
   
       
}

createDivs();

const clearBtn = document.querySelector(".clear");
const colorBtn = document.querySelector(".color");
const resetBtn = document.querySelector(".reset");
const blackBtn = document.querySelector(".black");

clearBtn.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach( (item) => {
        item.style.backgroundColor = "rgb(255, 255, 255)";
    });
});

colorBtn.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach( (item) => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
        });
    });
});

resetBtn.addEventListener("click", () => {
    location.reload();
});

blackBtn.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach( (item) => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = `black`;
        });
    });
});









