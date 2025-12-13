let url: string = window.location.href;

let countBars: number = 0;
let isWriting: boolean = false;
let x: string = "";

for(let i:number = 0; i < url.length; i++){
    if(url[i] == "%"){
        countBars += 1;
    } if(countBars == 2){
        isWriting = true;
    } if(isWriting){
        x += url[i];
    }
}

let produsImg = document.getElementById("produsImg") as HTMLImageElement;

let imgPath: string[] = [
    "mancare1", "mancare2", "mancare3", "mancare4", "mancare5", "mancare6",
    "mancare7", "mancare8", "mancare9", "mancare10", "baton1", "baton2", "baton3",
    "baton4", "shake1", "shake2", "shake3", "shake4"
];

for(let i: number = 0; i < 18; i++){
    if(x == `%2F${imgPath[i]}.webp`){
        produsImg.src = `../../assets/poze mancare/${imgPath[i]}.webp`;
    }
}