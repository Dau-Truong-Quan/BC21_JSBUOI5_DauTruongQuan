function bai1(){
    let i =1;
    let tong =0;
    while(true){
        if((tong+=i)>10000){
            document.getElementById('txt__timSoNho').innerHTML = `số đó là: ${i}`;
            return;
        }
        i++;
    }
}

function bai2(){
    
    let somot = document.getElementById('viTri1').value*1;
    let sohai = document.getElementById('viTri2').value*1;

    let tong =0;
    for(let i =1; i <= sohai;i++){

        tong += Math.pow(somot, i);
    }
    document.getElementById('txt__bai2').innerHTML = `tổng: ${tong}`;
}

function bai3(){
    
    let somot = document.getElementById('input_bai3').value*1;


    let tong =1;
    for(let i =1; i <= somot;i++){

        tong *= i;
    }
    document.getElementById('txt__bai3').innerHTML = `tổng giai thừa: ${tong}`;
}

function bai4(){
    let a = '';
    for(let i =1; i <= 10;i++){
        if(i%2 == 0){
            document.getElementById("bai4").innerHTML += 
              "<div class=\"chan\">chan</div>";
             
        }else{
            document.getElementById("bai4").innerHTML += 
              "<div class=\"le\">le</div>";
              
        }
    }
    
    document.querySelectorAll('.chan').forEach(el => {
        el.style.background = "red";
       
    });
    document.querySelectorAll('.le').forEach(el => {
        el.style.background = "blue";
       
    });
;}

function isprime(n){
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố
    
    let flag = 1;

    if (n <2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
    
    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    let i = 2;
    while(i <n){
        if( n%i==0 ) {
            flag = 0;
            break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        i++;
    }

    return flag;
}

function baitap5(){
    let somot = document.getElementById('input_bai5').value*1;
    for(let i =1; i <= somot;i++){
        if(isprime(i) == 1){
            document.getElementById('txt__baitap5').innerHTML += ` - ${i}`;
        }
    }
}