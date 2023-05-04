const checkboxBtn = document.querySelector('.checkbox'),
amountBasic = document.querySelector('.amount-basic'),
amountPro = document.querySelector('.amount-pro'),
amountMaster = document.querySelector('.amount-master');

let flag = true;

checkboxBtn.addEventListener('change', ()=>{
    if(flag){
        amountBasic.textContent = '19.99';
        amountPro.textContent = '24.99';
        amountMaster.textContent = '39.99';
        flag = false;
    }else{
        amountBasic.textContent = '199.99';
        amountPro.textContent = '249.99';
        amountMaster.textContent = '399.99';
        flag = true
    }
    
})
