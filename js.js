function fun1(){
    const rtl=document.getElementById("rtl").value;
    const rtr=document.getElementById("rtr").value;
    const rbl=document.getElementById("rbl").value;
    const rbr=document.getElementById("rbr").value;
    const ttl=document.getElementById("ttl");
    const ttr=document.getElementById("ttr");
    const tbl=document.getElementById("tbl");
    const tbr=document.getElementById("tbr");
    const rall=document.getElementById("rall")
    const tall=document.getElementById("tall")
    const radio1=document.getElementById("1")
    const radio2=document.getElementById("2")

    const block=document.getElementById("block")
    ttl.value=rtl
    ttr.value=rtr
    tbl.value=rbl
    tbr.value=rbr
    tall.value=rall.value
    if(radio1.checked){
        block.style.borderRadius=rtl+"px "+rtr+"px "+rbl+"px "+rbr+"px "
    }
    else{
        block.style.borderRadius=rall.value+"px "
    }

    
    
    
}