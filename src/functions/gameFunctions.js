//checks if a character is a letter
export const isALetter = (char)=>{
    return char.match(/[a-z]/i);
}

//calculates score based on length,errors,time and number of unique chars 
export const smarterCalulateScore = (L=0,U=0,E=0,T=0)=>{

    //ERROR 100 | UNIQ 100 | LENGHT 100 | T 

    //MAX ERORR = 26 

    //MAX UNIQUE  = 26

    //qoute should be most certainly unde 10000 char
    //MAX LENGHT = 10000

    //It's reasonable to think it will be done less then day
    //MAX TIME =  86,400,000 milisecond in a day 

    let str =""
    //easiest way 
    str+= ((26-E)+".");
  
    str+= "0"+((U/26).toFixed(2)*100)

    str+= "0"+((L/10000).toFixed(4)*10000)
    str+= "000"+(86400000 - T)

    return Number.parseFloat(str)

}

//calculates score based on number of errors
export const basicCalculateScore = (errors)=>{

    return 100/(errors + 1)
}


//returns a number of unique letters from a string
export const numOfUniqueLetters = (str) => {
    return  [ ...new Set(str.toLowerCase().trim().split("").filter(i=>isALetter(i)))].length
}


export default smarterCalulateScore

