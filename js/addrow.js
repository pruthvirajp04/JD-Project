const addbtn = document.getElementById("add_more_fields");
var list = document.getElementById("speclist");

addbtn.addEventListener('click',(e)=>{

    e.preventDefault();
    const myli = document.createElement('li');
    myli.innerHTML = `
                    <input type="text" id="spec" name="specname" value="" placeholder="Specification Name">
                    <input type="date" id="spec" name="specdate" value="2000-01-01" min="2000-01-01" max="3000-12-31" placeholder="Specification Date">
                    <br>
                    <input type="text" id="spec" name="speccompany" value="" placeholder="Company Name">
                    <input type="text" id="spec" name="specdescription" value="" placeholder="Description">
                    <span id="hidethis"><button id="close" onclick="remove()"><img src="../static/x-square.svg" alt=""></button></span>
                    <input type="text" id="spec" name="specquantity" value="" placeholder="Quantity">
                    <input type="text" id="spec" name="specamount" value="" placeholder="Amount">
                    
    
                    `;
    list.appendChild(myli);


});

function remove(){
const closespec = document.querySelectorAll('span');
for(let i=0;i<closespec.length; i++){
    closespec[i].addEventListener('click',()=>{
        closespec[i].parentElement.style.display = "none";
    })
} 
}