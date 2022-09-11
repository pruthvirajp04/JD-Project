const addbtn = document.getElementById("add_more_fields");
var list = document.getElementById("speclist");
var counter = 1;
var hiden = document.getElementById("no_of_specs");
    hiden.innerHTML = counter;
var tempid = "spec1";

addbtn.addEventListener('click',(e)=>{
    counter++;
    e.preventDefault();
    const myli = document.createElement('li');
    var idspec = "spec"+counter;
    tempid=idspec;
    myli.innerHTML = `
                    <input type="text" class="specnamestyle" id="spec1" list="specnames" name="specname" value="" placeholder="Specification Name">
                    <input type="date" id="${idspec} class="specstyle" name="specdate" value="2000-01-01" min="2000-01-01" max="3000-12-31" placeholder="Specification Date">
                    <br>
                    <input type="text" id=${idspec} class="specstyle" name="speccompany" value="" placeholder="Company Name">
                    <input type="text" id=${idspec} class="specstyle" name="specdescription" value="" placeholder="Description">
                    <span id="hidethis"><button id="close" onclick="remove()"><img src="../static/x-square.svg" alt=""></button></span>
                    <input type="text["counter"]" id=${idspec} class="specstyle" name="specquantity" value="" placeholder="Quantity">
                    <input type="text["counter"]" id=${idspec} class="specstyle" name="specamount" value="" placeholder="Amount">
                    `;  
    list.appendChild(myli);
    var hiden = document.getElementById("no_of_specs");
    hiden.innerHTML = counter;
    

});

function remove(){
const closespec = document.querySelectorAll('span');
for(let i=0;i<closespec.length; i++){
    closespec[i].addEventListener('click',()=>{
        counter--;
        closespec[i].parentElement.style.display = "none";
        var hiden = document.getElementById("no_of_specs");
        hiden.innerHTML = counter;
    })
} 
}



let names = [
    "Printing",
    "Lamination",
    "Foiling",
    "Die Punching",
    "Back to back pesting",
    "Handcutting",
    "Spot U.V.",
    "Centre Pinning",
    "Section Sewing Binding",
    "Perfect Binding",
    "Strip Gumming",
    "Varnishing",
  ];
  
  //Sort names in ascending order
//   function recommend(){
  
//   let sortedNames = names.sort();
//   //reference
//   let input = document.activeElement;
//   console.log(input);
//   //Execute function on keyup
//   input.addEventListener("keyup", (e) => {
//     //loop through above array
//     //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
//     removeElements();
//     function displayNames(value) {
//       input.value = value;
//       removeElements();
//     }
//     for (let i of sortedNames) {
//       //convert input to lowercase and compare with each string
//       if (
//         i.toLowerCase().startsWith(input.value.toLowerCase()) &&
//         input.value != ""
//       ) {
//         //create li element
        
//         let listItem = document.createElement("li");
//         //One common class name
//         listItem.classList.add("list-items");
//         listItem.style.cursor = "pointer";
//         listItem.setAttribute("keyup",displayNames(i));
//         //Display matched part in bold
//         let word = "<b>" + i.substr(0, input.value.length) + "</b>";
//         word += i.substr(input.value.length);
//         //display the value in array
//         listItem.innerHTML = word;
//         document.querySelector(".list").appendChild(listItem);
//       }
//     }
//   });
  
//   function removeElements() {
//     //clear all the item
//     let items = document.querySelectorAll(".list-items");
//     items.forEach((item) => {
//       item.remove();
//     });
//   }
// }
