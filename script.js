const color = document.querySelectorAll("#head");
const GradBox = document.querySelector(".gradBox")
const TextArea = document.querySelector(".row2")
const SelectDirec = document.querySelector("select")
const RefreshBtn = document.querySelector(".refresh")
 const Copy = document.querySelector(".copy")



color.forEach((Colors) => {
    Colors.addEventListener("input", () => ChangeGradient(false))
})



const GetRandomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color = color + hex.charAt(Math.floor(Math.random() * hex.length));
    }
    return color
}




function ChangeGradient(isRandom) {
    if (isRandom) {
        color[0].value=GetRandomColor()
        color[1].value=GetRandomColor()
        Copy.innerHTML="Copy Code"
        Copy.style.backgroundColor = "#ed3ded"
        
    }
    
    const Gradient = `linear-gradient(${SelectDirec.value} ,${color[0].value}, ${color[1].value})`
    GradBox.style.background = Gradient
    TextArea.innerHTML = `background:${Gradient};`
}



const CopyCode = ()=>{
    navigator.clipboard.writeText(TextArea.value);
    setTimeout(() => {
        Copy.innerHTML="Code Copied"
        Copy.style.backgroundColor = "purple"
    }, 600);
} 

SelectDirec.addEventListener("change", () => ChangeGradient(false));
RefreshBtn.addEventListener("click", () => ChangeGradient(true));
Copy.addEventListener("click",CopyCode)

