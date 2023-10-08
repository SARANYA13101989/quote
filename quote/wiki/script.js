const refreshBtn = document.querySelector(".refresh-btn");
const quote = document.querySelector(".quote")
const author = document.querySelector(".author")
const mic = document.querySelector(".mic-btn")
const copy = document.querySelector(".copy-btn")
const copy_msg = document.getElementById("copy_msg")


async function getQuotes(){
    console.log("----clicked here---")
    const response = await fetch("https://api.quotable.io/random")
    const data = await response.json();

    try {
     if(response.ok){
        quote.textContent = data.content;
        author.textContent = data.author;
     }   
    } catch (error) {
      console.warn(error)  
    }


};

refreshBtn.addEventListener("click",() => {
    copy.title ="copy to Clipboard!"
    getQuotes();     

});


mic.addEventListener("click",() => {
    const speechSynUtt = new SpeechSynthesisUtterance(`The Famous Saying ${quote.textContent} by ${author.textContent}, thanks`)
    speechSynthesis.speak(speechSynUtt)

})



copy.addEventListener("click",() => {
    navigator.clipboard.writeText(quote.textContent)
    copy.title ="copied to clipboard"
})
































