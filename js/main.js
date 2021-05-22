
function mudaFoto(){
    var a,b,c,d,e = 0;
    a=0;b=1;c=2;d=3;e=4;
    setInterval(function(){
        document.getElementById("photo-img0").className = "phone-photo tr" + a;
        document.getElementById("photo-img1").className = "phone-photo tr" + b;
        document.getElementById("photo-img2").className = "phone-photo tr" + c;
        document.getElementById("photo-img3").className = "phone-photo tr" + d;
        document.getElementById("photo-img4").className = "phone-photo tr" + e;
        if (a==0){
            a=1;b=2;c=3;d=4;e=0;
        }else if (a==1){
            a=2;b=3;c=4;d=0;e=1;
            }else if (a==2){
                a=3;b=4;c=0;d=1;e=2;
                }else if(a==3){
                    a=4;b=0;c=1;d=2;e=3;
                    }else if (a==4){
                        a=0;b=1;c=2;d=3;e=4;
                        }
    },5000);
}


