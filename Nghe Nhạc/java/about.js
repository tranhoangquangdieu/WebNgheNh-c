var doimau = document.getElementsByClassName("dau");
for(let i=0;i<=doimau.length-1;i++){
doimau[i].addEventListener("mouseover",chuotlen);
doimau[i].addEventListener("mouseout",chuotra);
function chuotlen()
{
    doimau[i].style.backgroundColor="gray";
}
function chuotra()
{
    doimau[i].style.backgroundColor="gainsboro";
}
}
let caunoi1={
    noidung: "Người thiết kế web: Trần Hoàng Quang Diệu"
}
let caunoi2={
    noidung: "Ngày tháng năm sinh: 15/10/2004"
}
let caunoi3={
    noidung: "Học sinh trường THPT Chuyên Hà Nội - Amsterdam"
}
let caunoi4={
    noidung: "Sở thích: Chơi Game, Đọc Anime One Piece"
}
let caunoi5={
    noidung: "Cảm ơn"
}
let caccaunoi=[
    caunoi1,caunoi2,caunoi3,caunoi4,caunoi5
]
let para=document.getElementById("caunoi");
para.textContent=caunoi1.noidung;

let j=1;
tien.addEventListener("click",function(){
    para.textContent=caccaunoi[j].noidung; 
    j+=1;
    if(j===caccaunoi.length)
    {
        j=0;
    }
})
lui.addEventListener("click",function(){
    para.textContent=caccaunoi[j].noidung; 
    j-=1;
    if(j===0)
    {
        j=caccaunoi.length;
    }
})