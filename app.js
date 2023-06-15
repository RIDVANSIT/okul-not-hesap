

document.getElementById("btn").addEventListener("click",hesapla);
function hesapla(){
    const ort = parseFloat(document.getElementById("ortalama").value) ;
    const ssapma = parseFloat(document.getElementById("ssapma").value) ;
    const not = parseFloat(document.getElementById("not").value);
    let t = 10*(not-ort)/ssapma+50;
    
    let sonuc1 = katalog(not);
    let sonuc2 = uygunTablo(t,ort);
    let tsonuc;
    if(sonuc1>sonuc2) tsonuc=sonuc1;
        else tsonuc=sonuc2;

   harfnotu(tsonuc);


    
    
}
function katalog(not){
    let puan;
    if(not>=90&&not<=100) puan=40;
    if(not>=85&&not<90) puan=35;
    if(not>=80&&not<85) puan=30;
    if(not>=75&&not<80) puan=25;
    if(not>=70&&not<75) puan=20;
    if(not>=60&&not<70) puan=15;
    if(not>=50&&not<60) puan=10;
    if(not>=40&&not<50) puan=5;
    if(not>=0&&not<40) puan=0;
    return puan;

}
function uygunTablo(tnotu,ortalamaNot){
    let puan;
    if(ortalamaNot>80&&ortalamaNot<=100){
        if(tnotu>=57&&tnotu<=100) puan=40;
        if(tnotu>=52&&tnotu<57) puan=35;
        if(tnotu>=47&&tnotu<52) puan=30;
        if(tnotu>=42&&tnotu<47) puan=25;
        if(tnotu>=37&&tnotu<42) puan=20;
        if(tnotu>=32&&tnotu<37) puan=15;
        if(tnotu>=27&&tnotu<32) puan=10;
        if(tnotu>=20&&tnotu<27) puan=5;
        if(tnotu>=0&&tnotu<20) puan=0;
       
    }
    if(ortalamaNot>70&&ortalamaNot<=80){
        if(tnotu>=59&&tnotu<=100) puan=40;
        if(tnotu>=54&&tnotu<59) puan=35;
        if(tnotu>=49&&tnotu<54) puan=30;
        if(tnotu>=44&&tnotu<49) puan=25;
        if(tnotu>=39&&tnotu<44) puan=20;
        if(tnotu>=34&&tnotu<39) puan=15;
        if(tnotu>=29&&tnotu<34) puan=10;
        if(tnotu>=20&&tnotu<29) puan=5;
        if(tnotu>=0&&tnotu<20) puan=0;
        
    }
    if(ortalamaNot>62.5&&ortalamaNot<=70){
        if(tnotu>=61&&tnotu<=100) puan=40;
        if(tnotu>=56&&tnotu<61) puan=35;
        if(tnotu>=51&&tnotu<56) puan=30;
        if(tnotu>=46&&tnotu<51) puan=25;
        if(tnotu>=41&&tnotu<46) puan=20;
        if(tnotu>=36&&tnotu<41) puan=15;
        if(tnotu>=31&&tnotu<36) puan=10;
        if(tnotu>=20&&tnotu<31) puan=5;
        if(tnotu>=0&&tnotu<20) puan=0;
       
    }
    if(ortalamaNot>57.5&&ortalamaNot<=62.5){
        if(tnotu>=63&&tnotu<=100) puan=40;
        if(tnotu>=58&&tnotu<63) puan=35;
        if(tnotu>=53&&tnotu<58) puan=30;
        if(tnotu>=48&&tnotu<53) puan=25;
        if(tnotu>=43&&tnotu<48) puan=20;
        if(tnotu>=38&&tnotu<43) puan=15;
        if(tnotu>=33&&tnotu<38) puan=10;
        if(tnotu>=20&&tnotu<33) puan=5;
        if(tnotu>=0&&tnotu<20) puan=0;
        
    }
    if(ortalamaNot>52.5&&ortalamaNot<=57.5){
        if(tnotu>=65&&tnotu<=100) puan=40;
        if(tnotu>=60&&tnotu<65) puan=35;
        if(tnotu>=55&&tnotu<60) puan=30;
        if(tnotu>=50&&tnotu<55) puan=25;
        if(tnotu>=45&&tnotu<50) puan=20;
        if(tnotu>=40&&tnotu<45) puan=15;
        if(tnotu>=35&&tnotu<40) puan=10;
        if(tnotu>=20&&tnotu<35) puan=5;
        if(tnotu>=0&&tnotu<20) puan=0;
        
    }
    
    if(ortalamaNot>47.5&&ortalamaNot<=52.5){
        if(tnotu>=67&&tnotu<=100) puan=40;
        if(tnotu>=62&&tnotu<67) puan=35;
        if(tnotu>=57&&tnotu<62) puan=30;
        if(tnotu>=52&&tnotu<57) puan=25;
        if(tnotu>=47&&tnotu<52) puan=20;
        if(tnotu>=42&&tnotu<47) puan=15;
        if(tnotu>=37&&tnotu<42) puan=10;
        if(tnotu>=20&&tnotu<37) puan=5;
        if(tnotu>=0&&tnotu<20) puan=0;
      
    }
    if(ortalamaNot>42.5&&ortalamaNot<=47.5){
        if(tnotu>=69&&tnotu<=100) puan=40;
        if(tnotu>=64&&tnotu<69) puan=35;
        if(tnotu>=59&&tnotu<64) puan=30;
        if(tnotu>=54&&tnotu<59) puan=25;
        if(tnotu>=49&&tnotu<54) puan=20;
        if(tnotu>=44&&tnotu<49) puan=15;
        if(tnotu>=39&&tnotu<44) puan=10;
        if(tnotu>=20&&tnotu<39) puan=5;
        if(tnotu>=0&&tnotu<20) puan=0;
        
    }
    if(ortalamaNot>5&&ortalamaNot<=42.5){
        if(tnotu>=71&&tnotu<=100) puan=40;
        if(tnotu>=66&&tnotu<71) puan=35;
        if(tnotu>=61&&tnotu<66) puan=30;
        if(tnotu>=56&&tnotu<61) puan=25;
        if(tnotu>=51&&tnotu<56) puan=20;
        if(tnotu>=46&&tnotu<51) puan=15;
        if(tnotu>=41&&tnotu<46) puan=10;
        if(tnotu>=20&&tnotu<41) puan=5;
        if(tnotu>=0&&tnotu<20) puan=0;
       
    }
    return puan;
}
function harfnotu(tsonuc){
    if(tsonuc===40)
    {
        document.getElementById("sonuc").innerText = "AA 🤓"
    }
    if(tsonuc===35)
    {
        document.getElementById("sonuc").innerText = "BA 🤣"
    }
    if(tsonuc===30)
    {
        document.getElementById("sonuc").innerText = "BB 😂"
    }
    if(tsonuc===25)
    {
        document.getElementById("sonuc").innerText = "  CB 😁 "
    }
    if(tsonuc===20)
    {
        document.getElementById("sonuc").innerText = "  CC 🙂 "
    }
    if(tsonuc===15)
    {
        document.getElementById("sonuc").innerText = "  DC 🫠"
    }
    if(tsonuc===10)
    {
        document.getElementById("sonuc").innerText = "  DD  😏"
    }
    if(tsonuc===5)
    {
        document.getElementById("sonuc").innerText = "  FD  🥴"
    }
    if(tsonuc===0)
    {
        document.getElementById("sonuc").innerText = "  FF 😵‍💫 "
    }
}
