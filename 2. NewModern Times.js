function modernTimes(input) {
    let finalArr = []
    let text = input.split(` `);
    let symbol = "#"
    for (let word of text) {
        if (word.length > 1) {
            if (word[0] === symbol) {
                //console.log(word.substring(1));
            finalArr.push(word.substring(1, word.length))
            }
        }
    }
    let pattern = (/^[A-Za-z]+$/);
    for (let finalWord of finalArr){
        if(finalWord.match(pattern)){
            console.log(finalWord);
            
        }
    }
    //console.log(finalArr);

}
modernTimes('The symbol # is known #variou1ly in English-speaking #regions as the #number sign');
