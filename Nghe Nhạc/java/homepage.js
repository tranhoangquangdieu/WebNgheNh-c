const background = document.querySelector('#background');
const thumbnail = document.querySelector('#thumbnail');
const song = document.querySelector('#song');
const songArtist = document.querySelector('.song-artist');
const songTitle = document.querySelector('.song-title');
const progressBar = document.querySelector('#progress-bar');
let pPause = document.querySelector('#play-pause');

songIndex = 0;

songs = [
    '../mp3/Amee/Anh Đánh Rơi Người Yêu Này.mp3',
    '../mp3/Amee/Anh Nhà Ở Đâu Thế.mp3',
    '../mp3/Amee/Dấu Yêu Vô Hình.mp3',
    '../mp3/Amee/Đen Đá Không Đường.mp3',
    '../mp3/Amee/Sao Anh Chưa Về Nhà.mp3',
    '../mp3/Amee/Trời Giấu Trời Mang Đi.mp3',
    '../mp3/BRay/B.S.N.L 2.mp3',
    '../mp3/BRay/Cao Ốc 20.mp3',
    '../mp3/BRay/Ex Hate Me.mp3',
    '../mp3/BRay/Làm Vì Yêu.mp3',
    '../mp3/BRay/Yêu Như Trẻ Con.mp3',
    '../mp3/DenVau/Anh Đếch Cần Gì Ngoài Em.mp3',
    '../mp3/DenVau/Bài Này Chill Phết.mp3',
    '../mp3/DenVau/Cảm Ơn.mp3',
    '../mp3/DenVau/Đưa Nhau Đi Trốn.mp3',
    '../mp3/DenVau/Hai Triệu Năm.mp3',
    '../mp3/DenVau/Lối Nhỏ.mp3',
    '../mp3/DenVau/Một Triệu Like.mp3',
    '../mp3/DenVau/Mười Năm.mp3',
    '../mp3/DenVau/Ngày Khác Lạ.mp3',
    '../mp3/DenVau/Ta Cứ Đi Cùng Nhau.mp3',
    '../mp3/DucPhuc/Ánh Nắng Của Anh.mp3',
    '../mp3/DucPhuc/Hết Thương Cạn Nhớ.mp3',
    '../mp3/DucPhuc/Hơn Cả Yêu.mp3',
    '../mp3/DucPhuc/Năm Ấy.mp3',
    '../mp3/DucPhuc/Ta Còn Yêu Nhau.mp3',
    '../mp3/DucPhuc/Yêu Được Không.mp3',
    '../mp3/Erik/Chạm Đáy Nỗi Đau.mp3',
    '../mp3/Erik/Có Tất Cả Nhưng Thiếu Anh.mp3',
    '../mp3/Erik/Ghen Cô Vy.mp3',
    '../mp3/Erik/Lạc Nhau Có Phải Muôn Đời.mp3',
    '../mp3/Erik/Sau Tất Cả.mp3',
    '../mp3/Jack/Bạc Phận.mp3',
    '../mp3/Jack/Em Gì Ơi.mp3',
    '../mp3/Jack/Hoa Vô Sắc.mp3',
    '../mp3/Jack/Hồng Nhan.mp3',
    '../mp3/Jack/Là 1 Thằng Con Trai.mp3',
    '../mp3/Jack/Sao Em Vô Tình.mp3',
    '../mp3/Jack/Sóng Gió.mp3',
    '../mp3/Jack/Việt Nam Tôi.mp3',
    '../mp3/LeBaoBinh/Bước Qua Đời Nhau.mp3',
    '../mp3/LeBaoBinh/Lá Xa Lìa Cành.mp3',
    '../mp3/LeBaoBinh/Thích Thì Đến.mp3',
    '../mp3/Min/Có Em Chờ.mp3',
    '../mp3/Min/Đừng Yêu Nữa, Em Mệt Rồi.mp3',
    '../mp3/Min/Em Mới Là Người Yêu Anh.mp3',
    '../mp3/Min/Ghen.mp3',
    '../mp3/Mr.Siro/Cô Đơn Không Muốn Về Nhà.mp3',
    '../mp3/Mr.Siro/Đã Từng Vô Giá.mp3',
    '../mp3/Mr.Siro/Day Dứt Nỗi Đau.mp3',
    '../mp3/Mr.Siro/Đừng Lo Anh Đợi Mà.mp3',
    '../mp3/Mr.Siro/Em Gái Mưa.mp3',
    '../mp3/Mr.Siro/Khóc Cùng Em.mp3',
    '../mp3/Mr.Siro/Lắng Nghe Nước Mắt.mp3',
    '../mp3/Mr.Siro/Một Bước Yêu, Vạn Dặm Đau.mp3',
    '../mp3/Mr.Siro/Tự Lau Nước Mắt.mp3',
    '../mp3/Mr.Siro/Vô Hình Trong Em.mp3',
    '../mp3/LeBaoBinh/Thích Thì Đến.mp3',
    '../mp3/Tình Sầu Thiên Thu Muôn Lối.mp3',
    '../mp3/DucPhuc/Hơn Cả Yêu.mp3',
    '../mp3/Yêu Từ Đâu Mà Ra.mp3',
    '../mp3/Sợ Phải Kết Thúc.mp3'
];
thumbnails = [
    '../img/thumbnail/amee/anh-danh-roi-nguoi-yeu-nay.jpg',
    '../img/thumbnail/amee/anh-nha-o-dau-the.jpg',
    '../img/thumbnail/amee/dau-yeu-vo-hinh.jpg',
    '../img/thumbnail/amee/den-da-khong-duong.jpg',
    '../img/thumbnail/amee/sao-anh-chua-ve-nha.jpg',
    '../img/thumbnail/amee/troi-giau-troi-mang-di.jpg',
    '../img/thumbnail/bray/bsnl2.jpg',
    '../img/thumbnail/bray/cao-oc-20.jpg',
    '../img/thumbnail/bray/ex-hate-me.jpg',
    '../img/thumbnail/bray/lam-vi-yeu.png',
    '../img/thumbnail/bray/yeu-nhu-tre-con.jpg',
    '../img/thumbnail/denvau/anh-dech-can-gi-ngoai-em.jpg',
    '../img/thumbnail/denvau/bai-nay-chill-phet.jpg',
    '../img/thumbnail/denvau/cam-on.jpg',
    '../img/thumbnail/denvau/dua-nhau-di-tron.jpg',
    '../img/thumbnail/denvau/hai-trieu-nam.jpg',
    '../img/thumbnail/denvau/loi-nho.jpg',
    '../img/thumbnail/denvau/mot-trieu-like.jpg',
    '../img/thumbnail/denvau/muoi-nam.jpg',
    '../img/thumbnail/denvau/ngay-khac-la.jpg',
    '../img/thumbnail/denvau/ta-cu-di-cung-nhau.jpg',
    '../img/thumbnail/ducphuc/anh-nang-cua-anh.jpg',
    '../img/thumbnail/ducphuc/het-thuong-can-nho.jpg',
    '../img/thumbnail/ducphuc/hon-ca-yeu.jpg',
    '../img/thumbnail/ducphuc/nam-ay.jpg',
    '../img/thumbnail/ducphuc/ta-con-yeu-nhau.jpg',
    '../img/thumbnail/ducphuc/yeu-duoc-khong.jpg',
    '../img/thumbnail/erik/cham-day-noi-dau.jpg',
    '../img/thumbnail/erik/co-tat-ca-nhung-thieu-anh.jpg',
    '../img/thumbnail/erik/ghen-co-vy.jpg',
    '../img/thumbnail/erik/lac-nhau-co-phai-muon-doi.jpg',
    '../img/thumbnail/erik/sau-tat-ca.jpg',
    '../img/thumbnail/jack/bac-phan.jpg',
    '../img/thumbnail/jack/em-gi-oi.jpg',
    '../img/thumbnail/jack/hoa-vo-sac.jpg',
    '../img/thumbnail/jack/hong-nhan.jpg',
    '../img/thumbnail/jack/la-1-thang-con-trai.jpg',
    '../img/thumbnail/jack/sao-em-vo-tinh.jpg',
    '../img/thumbnail/jack/song-gio.jpg',
    '../img/thumbnail/jack/viet-nam-toi.jpg',
    '../img/thumbnail/lebaobinh/buoc-qua-doi-nhau.jpg',
    '../img/thumbnail/lebaobinh/la-xa-lia-canh.jpg',
    '../img/thumbnail/lebaobinh/thich-thi-den.jpg',
    '../img/thumbnail/min/co-em-cho.jpg',
    '../img/thumbnail/min/dung-yeu-nua-em-met-roi.jpg',
    '../img/thumbnail/min/em-moi-la-nguoi-yeu-anh.jpg',
    '../img/thumbnail/min/ghen.jpg',
    '../img/thumbnail/mrsiro/co-don-khong-muon-ve-nha.jpg',
    '../img/thumbnail/mrsiro/da-tung-vo-gia.jpg',
    '../img/thumbnail/mrsiro/day-dut-noi-dau.jpg',
    '../img/thumbnail/mrsiro/dung-lo-anh-doi-ma.jpg',
    '../img/thumbnail/mrsiro/em-gai-mua.jpg',
    '../img/thumbnail/mrsiro/khoc-cung-em.jpg',
    '../img/thumbnail/mrsiro/lang-nghe-nuoc-mat.png',
    '../img/thumbnail/mrsiro/mot-buoc-yeu-van-dam-dau.jpg',
    '../img/thumbnail/mrsiro/tu-lau-nuoc-mat.jpg',
    '../img/thumbnail/mrsiro/vo-hinh-trong-em.jpg',
    '../img/thumbnail/lebaobinh/thich-thi-den.jpg',
    '../img/tinh-sau-thien-thu-muon-loi.jpg',
    '../img/thumbnail/ducphuc/hon-ca-yeu.jpg',
    '../img/yeu-tu-dau-ma-ra.jpg',
    '../img/so-phai-ket-thuc.jpg',
];
songTitles = [
    "Anh Đánh Rơi Người Yêu Này - Amee",
    "Anh Nhà Ở Đâu Thế - Amee",
    "Dấu Yêu Vô Hình - Amee",
    "Đen Đá Không Đường - Amee",
    "Sao Anh Chưa Về Nhà - Amee",
    "Trời Giấu Trời Mang Đi - Amee",
    "B.S.N.L 2 - B Ray",
    "Cao Ốc 20 - B Ray",
    "Ex's Hate Me - B Ray",
    "Làm Vì Yêu - B Ray",
    "Yêu Như Trẻ Con - B Ray",
    "Anh Đếch Cần Gì Ngoài Em - Đen Vâu",
    "Bài Này Chill Phết - Đen Vâu",
    "Cảm Ơn - Đen Vâu",
    "Đưa Nhau Đi Trốn - Đen Vâu",
    "Hai Triệu Năm - Đen Vâu",
    "Lối Nhỏ - Đen Vâu",
    "Một Triệu Like - Đen Vâu",
    "Mười Năm - Đen Vâu",
    "Ngày Khác Lạ - Đen Vâu",
    "Ta Cứ Đi Cùng Nhau - Đen Vâu",
    "Ánh Nắng Của Anh - Đức Phúc",
    "Hết Thương Cạn Nhớ - Đức Phúc",
    "Hơn Cả Yêu - Đức Phúc",
    "Năm Ấy - Đức Phúc",
    "Ta Còn Yêu Nhau - Đức Phúc",
    "Yêu Được Không - Đức Phúc",
    "Chạm Đáy Nỗi Đau - Erik",
    "Có Tất Cả Nhưng Thiếu Anh - Erik",
    "Ghen Cô Vy - Erik",
    "Lạc Nhau Có Phải Muôn Đời - Erik",
    "Sau Tất Cả - Erik",
    "Bạc Phận - Jack",
    "Em Gì Ơi - Jack",
    "Hoa Vô Sắc - Jack",
    "Hồng Nhan - Jack",
    "Là 1 Thằng Con Trai - Jack",
    "Sao Em Vô Tình - Jack",
    "Sóng Gió - Jack",
    "Việt Nam Tôi - Jack",
    "Bước Qua Đời Nhau - Lê Bảo Bình",
    "Lá Xa Lìa Cành - Lê Bảo Bình",
    "Thích Thì Đến - Lê Bảo Bình",
    "Có Em Chờ - Min",
    "Đừng Yêu Nữa, Em Mệt Rồi - Min",
    "Em Mới Là Người Yêu Anh - Min",
    "Ghen - Min",
    "Cô Đơn Không Muốn Về Nhà - Mr.Siro",
    "Đã Từng Vô Giá - Mr.Siro",
    "Day Dứt Nỗi Đau - Mr.Siro",
    "Đừng Lo Anh Đợi Mà - Mr.Siro",
    "Em Gái Mưa - Mr.Siro",
    "Khóc Cùng Em - Mr.Siro",
    "Lắng Nghe Nước Mắt - Mr.Siro",
    "Một Bước Yêu, Vạn Dặm Đau - Mr.Siro",
    "Tự Lau Nước Mắt - Mr.Siro",
    "Vô Hình Trong Em - Mr.Siro",
    "#1 Thích Thì Đến - Lê Bảo Bình",
    "#2 Tình Sầu Thiên Thu Muôn Lối - Doãn Hiếu",
    "#3 Hơn Cả Yêu - Đức Phúc",
    "#4 Yêu Từ Đâu Mà Ra - Lil Zpoet",
    "#5 Sợ Phải Kết Thúc - Nhật Phong",
];

// đổi play-pause, thu phóng thumbnail
let playing = true;
function playPause() {
    if (playing) {
        const song = document.querySelector('#song'), thumbnail = document.querySelector('#thumbnail');
        pPause.src = "../img/mp3icon/pause.png";
        thumbnail.style.transform = "scale(1.15)";
        song.play();
        playing = false;
    }
    else {
        pPause.src = "../img/mp3icon/play.png"
        thumbnail.style.transform = "scale(1)"
        song.pause();
        playing = true;
    }
}
// Chạy bài hát tiếp theo khi bài cũ hết
song.addEventListener('ended', function () {
    nextSong();
});
function amee_run() {
    song.src = songs[0];
    thumbnail.src = thumbnails[0];
    songTitle.innerHTML = songTitles[0];
    songIndex = 0;
    playing = true;
    pPause.src = "../img/mp3icon/pause.png"
    playPause();
}
function bray_run() {
    song.src = songs[6];
    thumbnail.src = thumbnails[6];
    songTitle.innerHTML = songTitles[6];
    songIndex = 6;
    playing = true;
    pPause.src = "../img/mp3icon/pause.png"
    playPause();
}
function den_run() {
    song.src = songs[11];
    thumbnail.src = thumbnails[11];
    songTitle.innerHTML = songTitles[11];
    songIndex = 11;
    playing = true;
    pPause.src = "../img/mp3icon/pause.png"
    playPause();
}
function ducphuc_run() {
    song.src = songs[21];
    thumbnail.src = thumbnails[21];
    songTitle.innerHTML = songTitles[21];
    songIndex = 21;
    playing = true;
    pPause.src = "../img/mp3icon/pause.png"
    playPause();
}
function erik_run(){
    song.src = songs[27];
    thumbnail.src = thumbnails[27];
    songTitle.innerHTML = songTitles[27];
    songIndex = 27;
    playing = true;
    pPause.src = "../img/mp3icon/pause.png"
    playPause();
}
function jack_run() {
    song.src = songs[32];
    thumbnail.src = thumbnails[32];
    songTitle.innerHTML = songTitles[32];
    songIndex = 32;
    playing = true;
    pPause.src = "../img/mp3icon/pause.png"
    playPause();
}
function lebaobinh_run() {
    song.src = songs[40];
    thumbnail.src = thumbnails[40];
    songTitle.innerHTML = songTitles[40];
    songIndex = 40;
    playing = true;
    pPause.src = "../img/mp3icon/pause.png";
    playPause();
}
function min_run() {
    song.src = songs[43];
    thumbnail.src = thumbnails[43];
    songTitle.innerHTML = songTitles[43];
    songIndex = 43;
    playing = true;
    pPause.src = "../img/mp3icon/pause.png";
    playPause();
}
function mrsiro_run() {
    song.src = songs[47];
    thumbnail.src = thumbnails[47];
    songTitle.innerHTML = songTitles[47];
    songIndex = 47;
    playing = true;
    pPause.src = "../img/mp3icon/pause.png"
    playPause();
}
function top1() {
    song.src=songs[57];
    songsIndex = 57;
    thumbnail.src = thumbnails[57];
    songTitle.innerHTML = songTitles[57];
    playing = true;
    pPause.src = "../img/mp3icon/pause.png";
    playPause();
}
function top2() {
    song.src=songs[58];
    songsIndex = 58;
    thumbnail.src = thumbnails[58];
    songTitle.innerHTML = songTitles[58];
    playing = true;
    pPause.src = "../img/mp3icon/pause.png";
    playPause();
}
function top3() {
    song.src=songs[59];
    songsIndex = 59;
    thumbnail.src = thumbnails[59];
    songTitle.innerHTML = songTitles[59];
    playing = true;
    pPause.src = "../img/mp3icon/pause.png";
    playPause();
}
function top4() {
    song.src=songs[60];
    songsIndex = 60;
    thumbnail.src = thumbnails[60];
    songTitle.innerHTML = songTitles[60];
    playing = true;
    pPause.src = "../img/mp3icon/pause.png";
    playPause();
}
function top5() {
    song.src=songs[61];
    songsIndex = 61;
    thumbnail.src = thumbnails[61];
    songTitle.innerHTML = songTitles[61];
    playing = true;
    pPause.src = "../img/mp3icon/pause.png";
    playPause();
}
// Bài tiếp theo
function nextSong() {
    songIndex++;
    if (songIndex == 6) {
        songIndex = 0;
    } else if (songIndex == 11) {
        songIndex=6
    } else if (songIndex == 21) {
        songIndex=11
    } else if (songIndex == 27) {
        songIndex=21
    } else if (songIndex == 32) {
        songIndex=27
    } else if (songIndex == 40) {
        songIndex=32
    } else if (songIndex == 43) {
        songIndex=40
    } else if (songIndex == 47) {
        songIndex=43
    } else if (songIndex == 57) {
        songIndex=47
    } else if (songIndex == 62) {
        songIndex=57
    }

    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    playing = true;
    playPause();
}
// Bài trước đó
function previousSong() {
    songIndex--;
    if (songIndex == -1) {
        songIndex = 5;
    } else if (songIndex == 5) {
        songIndex=10
    } else if (songIndex == 10) {
        songIndex=20
    } else if (songIndex == 20) {
        songIndex=26
    } else if (songIndex == 26) {
        songIndex=31
    } else if (songIndex == 31) {
        songIndex=39
    } else if (songIndex == 39) {
        songIndex=42
    } else if (songIndex == 42) {
        songIndex=46
    } else if (songIndex == 46) {
        songIndex=56
    } else if (songIndex == 56) {
        songIndex=61
    }
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    playing = true;
    playPause();
}

// Cập nhật progress-bar với chiều dài bản nhạc
function updateProgressValue() {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(song.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(song.duration)));
    }
};

// Thời gian bản nhạc
function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10) {
        sec = `0${sec}`;
    };
    return `${min}:${sec}`;
};

// Cập nhật con chạy của progress-bar
setInterval(updateProgressValue, 500);

// Kết nối progress-bar với thời gian bản nhạc
function changeProgressBar() {
    song.currentTime = progressBar.value;
};

function seek(e)
{
    var percent=e.offsetX;
    song.currentTime=percent*song.durationTime;
    progressBar.value=percent/100;
}