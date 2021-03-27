
let inpt = window.prompt("Введите сколько лайкнуть.(8-все)", 1);

function likeFunction(){
    let likeSvg = document.querySelector('svg[aria-label="Не нравится"]');
    if(likeSvg) {
      let likeSpan = likeSvg.parentElement;
      let likeDiv = likeSpan.parentElement;
      let likeBtn = likeDiv.parentElement;
      likeBtn.click();
    }
}

function saveFunction(){
    let saveSvg = document.querySelector('svg[aria-label="Удалить"]');
    while(!saveSvg) {
        nxtBtn.click();
    }
    
    if(saveSvg) {
      let saveDiv = saveSvg.parentElement;
      let saveBtn = saveDiv.parentElement;
      saveBtn.click();
    }
}

if(inpt > 0) {
    for(let i = 0; i < inpt; i++) {
        clear = 1;
        likeFunction();
        saveFunction();
        if(nxtBtn)
            nxtBtn.click();
    }
} else {
    alert("Вы не хотите ничего делать");
}
