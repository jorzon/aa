var animationData ={"v":"5.7.1","fr":30,"ip":0,"op":30,"w":1024,"h":768,"nm":"brillo 01","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Capa de formas 6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.082,"y":1},"o":{"x":0.231,"y":0},"t":0,"s":[-602,384,0],"e":[1898,384,0],"to":[0,0,0],"ti":[0,0,0]},{"t":28}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":29,"nm":"Desenfoque gaussiano","np":5,"mn":"ADBE Gaussian Blur 2","ix":1,"en":1,"ef":[{"ty":0,"nm":"Desenfoque","mn":"ADBE Gaussian Blur 2-0001","ix":1,"v":{"a":0,"k":370,"ix":1}},{"ty":7,"nm":"Dimensiones de desenfoque","mn":"ADBE Gaussian Blur 2-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":7,"nm":"Repetir píxeles del borde","mn":"ADBE Gaussian Blur 2-0003","ix":3,"v":{"a":0,"k":0,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-504,-432],[368,440]],"c":false},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.419607843137,0.592156862745,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":280,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Trazo 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-120,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Forma 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":61,"st":0,"bm":0}],"markers":[]};
var params = {
    container: document.getElementById('lottie1'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    animationData: animationData
};

var anim2;

anim2 = lottie.loadAnimation(params);

var cont = 0;

function contador(){
    cont++;
    if($("#content-protector-nfc").hasClass("hide")){
        $("#content-protector-nfc").removeClass("hide");
        anim2.play(); 
        setTimeout(function(){
            anim2.stop();
            $("#content-protector-nfc").addClass("hide"); 
        }, 1000);
    }else{
        anim2.play();
    }
};
//TIEMPO PARA QUE SE MUESTRE LA ANIMACION DEL PROTECTOR DE PANTALLA
setInterval('contador()',60000);
