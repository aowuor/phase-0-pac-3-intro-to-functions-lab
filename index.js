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

function sayHiToHeadphonedRoommate(greet){


}

function sayHiToHeadphonedRoommate(greet){
    if(greet === greet.toLowerCase()){
        return(console.log("I can\'t hear you!"));
    }else if(greet === greet.toUpperCase()){
        return console.log(("YES INDEED!"))
    }else if(greet === "Let's have dinner together!"){
        return console.log("I would love to!")
    }
}
sayHiToHeadphonedRoommate('hello');
sayHiToHeadphonedRoommate('HELLO');
sayHiToHeadphonedRoommate("Let's have dinner together!");