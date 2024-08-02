/*
inputText = document.getElementById("inputText");
console.log(inputText)

encodeButton = document.getElementById("encodeButton");
decodeButton = document.getElementById("decodeButton");
outputText = document.getElementById("outputText");
outputContainer = document.getElementById("outputContainer");
copyButton = document.getElementById("copyButton");

encodeButton.addEventListener("click", () => {
    console.log(inputText.value);
    outputText.innerText = encode(inputText.value);
    outputContainer.style.visibility = "visible";
    //copyButton.style.visibility = "visible";
})
decodeButton.addEventListener("click", () => {
    console.log(inputText.value);
    outputText.innerText = inputText.value;
    outputContainer.style.visibility = "visible";
    //copyButton.style.visibility = "visible";
})

//------------------------------Crear funcion para codificar------------------------------//

function encode(text) {
    
    lower_text = text.toLowerCase();
    console.log(lower_text)
    
    final_text = "";

    for (let i = 0; i < lower_text.length; i++) {
        if (lower_text[i] === "e") {
            final_text += "enter";
        } else if (lower_text[i] === "i") {
            final_text += "imes";
        } else if (lower_text[i] === "a") {
            final_text += "ai";
        } else if (lower_text[i] === "o") {
            final_text += "ober";
        } else if (lower_text[i] === "u") {
            final_text += "ufat";
        }else{
            final_text += lower_text[i]
        }
    }

    console.log(final_text)
    return final_text
}

*/

//------------------------------Crear funcion para decodificar------------------------------//

function decode(text) {
    
    lower_text = text.toLowerCase();
    
    final_text = "";

    array_text = lower_text.split(' ');

    array_text.forEach(word => {
        console.log(word)
    });
    

    console.log(array_text)
    //return final_text
}
decode("henterllober my imes")