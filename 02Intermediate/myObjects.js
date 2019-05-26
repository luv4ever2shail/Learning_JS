let myYoutubeVideoOne = {
    title: 'Lopps in javascript',
    videolength: 15,
    videoDescription: 'this is a video decription and a long one',
    videoCreator: 'Shail'

}

let myYoutubeVideoTwo = {
    title: 'Functions in javascript',
    videolength: 10,
    videoDescription: 'this is a video decription and a long one',
    videoCreator: 'Riya'

}

console.log(myYoutubeVideoOne);
console.log(`Hey new video on ${myYoutubeVideoOne.title} by author ${myYoutubeVideoOne.videoCreator}`);


//myYoutubeVideoOne.title = 'ForEach loop in javascript'

//console.log(myYoutubeVideoOne.title);


let changeVideoLength = function (myObject) {
    console.log(`Time of this video is : ${myObject.videolength}`);
    return {
        format1: `Time of this video is : ${myObject.videolength + 5}`,
        format2: `Time of this video is : ${myObject.videolength + 2}`
    }
}

console.log(changeVideoLength(myYoutubeVideoTwo));

let getFormarts = changeVideoLength(myYoutubeVideoTwo);

console.log(getFormarts.format1);

