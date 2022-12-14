function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "sc") {
        images.src = "img/scoups.jpg";
        images.width = 1000;
        images.alt = "Choi Seungcheol";
        alert("SVT LEADER SCOUPS");
    } else if (picker == "jh") {
        images.src = "img/jeonghan.jpg";
        images.width = 1000;
        images.alt = "Yoon Jeonghan";
        alert("SVT VOCAL TEAM MEMBER");
    } else if (picker == "js") {
        images.src = "img/joshua.png";
        images.width = 1000;
        images.alt = "Hong Jisoo";
        alert("SVT VOCAL TEAM MEMBER");
    } else if (picker == "jn") {
        images.src = "img/jun.jpg";
        images.width = 1000;
        images.alt = "Wen Junhui";
        alert("SVT PERFORMANCE TEAM MEMBER");
    } else if (picker == "hs") {
        images.src = "img/hoshi.jpg";
        images.width = 1000;
        images.alt = "Kwon Soonyoung";
        alert("SVT PERFORMANCE TEAM LEADER");
    } else if (picker == "wn") {
        images.src = "img/wonwoo.jpg";
        images.width = 1000;
        images.alt = "Jeon Wonwoo";
        alert("SVT HIPHOP TEAM MEMBER");
    } else if (picker == "wz") {
        images.src = "img/woozi.jpg";
        images.width = 1000;
        images.alt = "Lee Jihoon";
        alert("SVT VOCAL TEAM LEADER");
    } else if (picker == "mh") {
        images.src = "img/the8.jpg";
        images.width = 1000;
        images.alt = "Xu Minghao";
        alert("SVT PERFORMANCE TEAM MEMBER");
    } else if (picker == "mg"){
        images.src = "img/mingyu.jpg"
        images.width = 1000;
        images.alt = "Kim Mingyu"
        alert("SVT HIPHOP TEAM MEMBER")
    } else if (picker == "dk") {
        images.src = "img/dk.jpg"
        images.width = 1000;
        images.alt = "Lee Seokmin"
        alert("SVT VOCAL TEAM MEMBER")        
    } else if (picker == "sk") {
        images.src = "img/seungkwan.png"
        images.width = 1000;
        images.alt = "Boo Seungkwan"
        alert("SVT VOCAL TEAM MEMBER")
    } else if (picker == "vn") {
        images.src = "img/vernon.jpg"
        images.width = 1000;
        images.alt = "Chwe Hansol"
        alert("SVT HIPHOP TEAM MEMBER")
    } else if (picker == "dn") {
        images.src = "img/dino.jpg"
        images.width = 1000;
        images.alt == "Lee Chan"
        alert("SVT PERFORMANCE TEAM MEMBER")
    }

    else {
        alert("Gagal");
    }
}