
inputText = document.getElementById("inputText");
//console.log(inputText)

let copied_text = "";

encodeButton = document.getElementById("encodeButton");
decodeButton = document.getElementById("decodeButton");
outputText = document.getElementById("outputText");
outputContainer = document.getElementById("outputContainer");
copyButton = document.getElementById("copyButton");
deleteButton = document.getElementById("deleteButton");
instructionsText = document.getElementById("instructionsInput");

encodeButton.addEventListener("click", () => {
    copied_text = encode(inputText.value);
    //console.log(inputText.value);
    outputText.innerText = encode(inputText.value);
    if (copied_text !== "") {
        outputContainer.style.visibility = "visible";
        copyButton.style.visibility = "visible";
        encodeButton.style.visibility = "hidden";
        decodeButton.style.visibility = "hidden";
        deleteButton.style.visibility = "visible"
        instructionsText.style.visibility = "hidden"
    }
})
decodeButton.addEventListener("click", () => {
    copied_text = decode(inputText.value);
    //console.log(outputText.value);
    outputText.innerText = decode(inputText.value);
    if (copied_text !== "") {
        outputContainer.style.visibility = "visible";
        copyButton.style.visibility = "visible";
        encodeButton.style.visibility = "hidden";
        decodeButton.style.visibility = "hidden";
        deleteButton.style.visibility = "visible"
        instructionsText.style.visibility = "hidden"

    }
})

copyButton.addEventListener("click", () => {
    //console.log(copied_text)
    if (copied_text !== "") {
        navigator.clipboard.writeText(copied_text) 
            .then(() => {
                console.log("Texto copiado: ", copied_text);
                alert("Texto copiado al portapapeles!");
            })
            .catch(err => {
                console.error("Error al copiar el texto: ", err);
                alert("Error al copiar el texto.");
            });
    }

})

deleteButton.addEventListener("click", () => {
    inputText.value = "";
    console.log("delete")
    outputContainer.style.visibility = "hidden";
    copyButton.style.visibility = "hidden";
    encodeButton.style.visibility = "visible";
    decodeButton.style.visibility = "visible";
    deleteButton.style.visibility = "hidden"
    instructionsText.style.visibility = "visible"

})

//---------------------------- functions ----------------------------------//

let code_keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function encode(text) {

    let lower_text = text.toLowerCase();

    for (let i = 0; i < code_keys.length; i++) {
        if (lower_text.includes(code_keys[i][0])) {
            lower_text = lower_text.replaceAll(code_keys[i][0], code_keys[i][1])
        }
    }

    return lower_text

}

function decode(text) {

    let lower_text = text.toLowerCase();

    for (let i = 0; i < code_keys.length; i++) {
        if (lower_text.includes(code_keys[i][1])) {
            lower_text = lower_text.replaceAll(code_keys[i][1], code_keys[i][0])
        }
    }

    return lower_text

}