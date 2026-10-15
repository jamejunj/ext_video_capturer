const discoverdVideo = []
let discoveredVideoCount = 0;

function initialize(){
    // detectNewVideo();
    // setInterval(detectNewVideo, 60000);
}

function detectNewVideo(){
    const videoes = document.querySelectorAll('video')

    if (videos.length){
        Array.from(videos).forEach(video=>{

            if (discoverdVideo.indexOf(video) === -1){
                discoverdVideo.push(video)
            }

            console.log(discoverdVideo, discoverdVideo.indexOf(video))
        })
    }

    console.log(videos.length, discoverdVideo)
}

function takeVideoScreenshot(video, scale=1){
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d')
        .drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL()
}

function captureAllVideoImages(){
    const videos = document.querySelectorAll('video');
    const outputs = []
    Array.from(videos).forEach(video=>{
        outputs.push(
            takeVideoScreenshot(video, 1)
        )
    });
    return outputs
}

function listener(message, sender, sendResponse){
    switch (message.event) {
        case 'vc-popup-open':
            const output = captureAllVideoImages()
            sendResponse({
                site: {
                    title: document.title,
                    origin: window.location.origin,
                    path: window.location.pathname,
                },
                images: output
            })
            break;
        default:
            break;
    }
}

chrome.runtime.onMessage.addListener(listener);