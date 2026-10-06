/* Morse tool logic — also used by the page */
const MORSE = {
  A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",
  K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",
  U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..",
  "0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....",
  "6":"-....","7":"--...","8":"---..","9":"----.",
  ".":".-.-.-",",":"--..--","?":"..--..","'":".----.","!":"-.-.--","/":"-..-.",
  "(":"-.--.",")":"-.--.-","&":".-...",";":"-.-.-.","=":"-...-","+":".-.-.",
  "-":"-....-","_":"..--.-",'"':".-..-."
};
const REV = Object.fromEntries(Object.entries(MORSE).map(([k,v])=>[v,k]));

function textToMorse(t){
  return t.toUpperCase().split("").map(ch=>{
    if(ch===" ") return "/";
    return MORSE[ch] || "";
  }).filter(x=>x!=="").join(" ");
}
function morseToText(m){
  return m.trim().split(/\s+/).map(code=>{
    if(code==="/"||code==="|") return " ";
    return REV[code] || "";
  }).join("").replace(/\s+/g," ").trim();
}
if(typeof module!=="undefined"){ module.exports={textToMorse,morseToText}; }
