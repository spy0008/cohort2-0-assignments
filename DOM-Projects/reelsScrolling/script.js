const reels = [
  {
    username: "artist_hue",
    profileimg: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&q=80",
    isFollowed: false,
    isLiked: false,
    like: 230,
    comment: 11,
    share: 10,
    caption: "Color splash in my art studio #artistlife",
    video: "./video/video1.mp4"
  },
  {
    username: "daily_motivation",
    profileimg: "https://images.unsplash.com/photo-1609543563735-d7cfaf71addb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFollowed: true,
    isLiked: true,
    like: 1500,
    comment: 210,
    share: 500,
    caption: "Keep pushing forward, never give up! #motivation",
    video: "https://www.pexels.com/download/video/34770606/"
  },
  {
    username: "nature_fan",
    profileimg: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFollowed: false,
    isLiked: true,
    like: 800,
    comment: 70,
    share: 45,
    caption: "Beauty of the wild #naturephotography",
    video: "https://www.pexels.com/download/video/30213774/"
  },
  {
    username: "music_vibes",
    profileimg: "https://images.unsplash.com/photo-1592948078640-39656341be54?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFollowed: true,
    isLiked: false,
    like: 410,
    comment: 28,
    share: 18,
    caption: "Latest track remix out now! #musiclover",
    video: "./video/video1.mp4"
  },
  {
    username: "fashionista",
    profileimg: "https://images.unsplash.com/photo-1593667305882-6131b1e5e6d6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFollowed: true,
    isLiked: true,
    like: 1250,
    comment: 95,
    share: 150,
    caption: "Fall fashion trends you can't miss! #style",
    video: "./video/video1.mp4"
  }
];


let main = document.querySelector(".main")


let uiInfo = "";

reels.forEach(function (ele) {
    uiInfo = uiInfo + `   <div class="container">
                
                <div class="reels-container">
                    <div class="reel">
                       <video src="${ele.video}" autoplay muted loop></video>

    
                        <div class="info">
                            <div class="top">
                                <img src="${ele.profileimg}" alt="">
                                <h2>${ele.username}</h2>
                                <button>${ele.isFollowed ? 'Follow' : 'Following'}</button>
                            </div>
                            <div class="bottom">
                                <h4>${ele.caption}</h4>
                            </div>
                        </div>
    
                    </div>
                    
                </div>
                <div class="tools">
                    <div class="icons">
                        <h5 class="icon">
                        ${ele.isLiked ? '<i style="color: red; backgroundColor: red;" class="ri-heart-3-fill"></i>' : '<i style="color: white;" class="ri-heart-3-line"></i>'}
                        </h5>
                        <h6 class="counts">${ele.like}</h6>
                    </div>
                    <div class="icons">
                        <h5 class="icon"><i class="ri-chat-1-line"></i></h5>
                        <h6 class="counts">${ele.comment}</h6>
                    </div>
                      <div class="icons">
                        <h5 class="icon"><i class="ri-share-line"></i></h5>
                        <h6 class="counts">${ele.share}</h6>
                    </div>
                      <div class="icons">
                        <h5 class="icon"><i class="ri-more-2-line"></i></h5>
                    </div>
                </div>
            </div>`

    main.innerHTML = uiInfo
})
