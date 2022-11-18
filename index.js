function shout(greeting){
    return greeting.toUpperCase();
}

console.log(shout("hello"))

function whisper(greeting){
    return greeting.toLowerCase();
}

console.log(whisper("HELLO"))



function logShout(greeting){
    console.log(greeting.toUpperCase());
    return greeting;
}

logShout("hello")

function logWhisper(greeting){
    console.log(greeting.toLowerCase())
}
logWhisper("HELLO")




function sayHiToHeadphonedRoommate(string){
    if (string === "Let's have dinner together!"){
        return(console.log("I would love to!"));
    }else if(string === string.toLowerCase()){
        return(console.log("I can\'t hear you!"));
    }else if(string.toUpperCase() === string){
        return console.log(("YES INDEED!"));
    }
}
sayHiToHeadphonedRoommate('hello');
sayHiToHeadphonedRoommate('HELLO');
sayHiToHeadphonedRoommate("Let's have dinner together!");