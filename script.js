function increase(x)
{
    $(".solution").style.height = 0;
    // $(".solution").style.overflow = hidden;
    let characters = x.value.length;
    if(characters > 3)
    {
        length = x.value.length + 1
        x.style.width = length + "ch";
    }
    
}

function $(x) {
    return document.querySelector(x)
}

function checkEmpty(arr) {
    let emptyBoxes = [];

    for (let index = 0; index < arr.length; index++) {
        if(arr[index].value == ""){
            emptyBoxes.push(index);
        }
        
    }
    if(emptyBoxes.length == 0)
    {
        return true;
    }else{
        return emptyBoxes.length;
    }
}



$(".solve-btn").onclick = () =>
{
    let allBoxes = document.querySelectorAll(".box");
  
    let empty = checkEmpty(allBoxes);
    console.log(empty);
    let a = $("#a").value;
    let b = $("#b").value;
    let c = $("#c").value;
    let d = $("#d").value;
    let e = $("#e").value;
    let f = $("#f").value;

    let valueI = (b * f) - (c * e);
    let valueJ = ((a * f) - (c * d)) * -1;
    let valueK = (a * e) - (b * d);
    console.log(valueJ);

    if(valueI == -1){
        valueI = "-"
    }
    else if(valueI == 1){
        valueI = ""
    }

    if (valueJ == 1) {
        valueJ = "+";
    } else if(valueJ == -1){
        valueJ = "-";
    }else if(valueJ < 0){
        valueJ = valueJ;
    }else if(valueJ >= 0){
        valueJ = "+" + valueJ;
    }

    if (valueK == 1) {
        valueK = "+";
    } else if(valueK == -1){
        valueK = "-";
    }else if(valueK < 0){
        valueK = valueK;
    }else if(valueK >= 0){
        valueK = "+" + valueK;
    }

    if(empty == true)
    {
        $(".solution").style.height = 500 + "px";
        $("#solution").innerHTML = `
        <div class="question">
            <div class="title" style="margin-bottom:1rem; border-bottom:double 4px #f00;">Solution</div>
            <div class="para">
                <span>i</span>
                <span>-j</span>
                <span>k</span>
            </div>

            <div class="matrix-box">
                <span>`+ $("#a").value+`</span>
                <span>`+ $("#b").value+`</span>
                <span>`+ $("#c").value+`</span>
                <span>`+ $("#d").value+`</span>
                <span>`+ $("#e").value+`</span>
                <span>`+ $("#f").value+`</span>
            </div>

            <div class="splitted-section">
                <div class="split-cont">
                    <div class="single-section">
                        <span> `+ $("#b").value+` </span>
                        <span> `+ $("#c").value+` </span>
                        <span> `+ $("#e").value+` </span>
                        <span> `+ $("#f").value+` </span>
                        
                    </div>
                    <span>i</span>
                </div>
                

                <div class="split-cont">
                    <div class="single-section">
                        <span>`+ $("#a").value+`</span>
                        <span>`+ $("#c").value+`</span>
                        <span>`+ $("#d").value+`</span>
                        <span>`+ $("#f").value+`</span>
                    </div>
                    <span>-j</span>
                </div>

                <div class="split-cont">
                    <div class="single-section">
                        <span>`+ $("#a").value+`</span>
                        <span>`+ $("#b").value+`</span>
                        <span>`+ $("#d").value+`</span>
                        <span>`+ $("#e").value+`</span>
                    </div>
                    <span>k</span>
                </div>
            </div>
            
            <div class="calculation">
                <div class="solve-step">
                    = ((`+ b +` x `+ f + `) - (`+ c +` x `+ e + `))i ((`+ a +` x `+ f + `) - (`+ c +` x `+ d + `))-j ((`+ a +` x `+ e + `) - (`+ b +` x `+ d + `))k
                </div>
                <div class="solve-step">
                    = ((`+b * f+`) - (`+c * e+`))i ((`+a * f+`) - (`+c * d+`))-j ((`+a * e+`) - (`+b * d+`))k
                </div>
                <div class="answer">
                    = `+ valueI +`i `+ valueJ +`j `+ valueK +`k
                </div>
            </div>
        </div>
        `;
       
    }else{
        $(".solution").style.height = 50 + "px";
        $("#solution").innerHTML = "<div style='color:#f00;font-size:2rem;width:100%;text-align:center'>"+ empty +" of the boxes is empty</div>";
    }
    
    
}




// let question = document.createElement("div");
//        question.setAttribute("class","question");
//        $(".solution").appendChild(question);

//        let matrix = document.createElement("div");
//        question.setAttribute("class","para");
//        $(".solution").appendChild(question);