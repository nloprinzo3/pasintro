var lil = 2;
var orgList = document.getElementById("branchBlacklist");

var count = 5;
var skuIn = document.getElementById("skuEntry");
var qtyIn = document.getElementById("QtyEntry");
var addBttn = document.getElementById("AddInputs");

function extendLimitList(branchNo) {
   var yik = document.getElementById("BranchPartExclude"+branchNo);
   currCount = yik.childElementCount/2 + 1;
   //console.log(currCount)
   //console.log("Crying")
   var yikCln = yik.cloneNode(true);

   let clnArr = [];

   yikCln.children[0].children[0].for="BranchPartExclude"+branchNo+".SKU"+currCount;
   yikCln.children[0].children[1].id ="BranchPartExclude"+branchNo+".SKU"+currCount;
   yikCln.children[0].children[1].name="BranchPartExclude"+branchNo+".SKU"+currCount;
   yikCln.children[0].children[1].value = "";

   yikCln.children[1].children[0].for="BranchPartExclude"+branchNo+".Qty"+currCount;
   yikCln.children[1].children[1].id = "BranchPartExclude"+branchNo+".Qty"+currCount;
   yikCln.children[1].children[1].name="BranchPartExclude"+branchNo+".Qty"+currCount;
   yikCln.children[1].children[1].value = "";

   for (let a = 0; a<2;a++) {
      clnArr[a] = yikCln.children[a];
   }
   for (let a =0; a<2; a++) {
      yik.appendChild(clnArr[a]);
   }
   //yik.appendChild(yikCln.children[1]);

}

function revealItemSearch(checkboxID,locationType,num) {
   fullId = checkboxID+num;
   //console.log(fullId)
   var checkBox = document.getElementById(fullId);
   //console.log(checkBox);
   var text = document.getElementById(locationType+'PartExclude'+num);
   var myButton = document.getElementById("branchExcludeMoreItems"+num);
   if (checkBox.checked == true){
    text.style.display = "grid";
    myButton.style.display = "inline-grid";
   } else {
     text.style.display = "none";
     myButton.style.display = "none";
   }
}


function excludeMore() {
   var listCln = orgList.cloneNode(true);
   currentBranch = orgList.childElementCount/2;
   let arr = [];
   //console.log(listCln.children[2])
   listCln.children[0].children[0].children[0].for = "excludebranch"+lil;
   listCln.children[0].children[0].children[0].innerHTML = "&nbsp";

   listCln.children[0].children[0].children[1].name = "excludebranch"+lil;
   listCln.children[0].children[0].children[1].id = "excludebranch"+lil;
   listCln.children[0].children[0].children[1].value = "";

   listCln.children[0].children[1].children[1].setAttribute('for','excludeAllBranch'+lil)
   listCln.children[0].children[1].children[1].children[0].id="excludeAllBranch" + lil;
   listCln.children[0].children[1].children[1].children[0].name="excludeAllBranch" + lil;
   listCln.children[0].children[1].children[1].checked = false;

   listCln.children[0].children[1].children[2].setAttribute('for','excludeSomeBranch'+lil);
   listCln.children[0].children[1].children[2].children[0].id="excludeSomeBranch"+lil;
   listCln.children[0].children[1].children[2].children[0].name="excludeSomeBranch"+lil;
   listCln.children[0].children[1].children[2].checked = false;
   //listCln.children[0].children[2].id = "branchExcludeMoreItems"+lil;
   // Editing the Part List
   //;abel
   listCln.children[1].id = "BranchPartExclude"+lil;
   listCln.children[1].children[0].children[0].setAttribute("for","BranchPartExclude"+lil+".SKU"+"1");//= "BranchPartExclude"+lil+".SKU"+"1";
   console.log("yeeee")
   console.log(listCln.children[1].children[0].children[0]);
   //sku/qty
   listCln.children[1].children[0].children[1].name= "BranchPartExclude"+lil+".SKU"+"1";
   listCln.children[1].children[0].children[1].id= "BranchPartExclude"+lil+".SKU"+"1";

   listCln.children[1].children[1].children[0].for="BranchPartExclude"+lil+".Qty"+"1";

   listCln.children[1].children[1].children[1].name="BranchPartExclude"+lil+".Qty"+"1";
   listCln.children[1].children[1].children[0].id="BranchPartExclude"+lil+".Qty"+"1";

   firstParam = "excludeSomeBranch"+lil;
   secondParam = "Branch"
   let n = lil
   //console.log(listCln.children[0].children[1].children[2].children[0].onclick)
   listCln.children[0].children[2].id = "branchExcludeMoreItems"+n;
   listCln.children[0].children[2].setAttribute("onclick","javascript: extendLimitList("+n+")");//function() {extendLimitList(n)};
   listCln.children[0].children[1].children[2].children[0].onclick = function() { revealItemSearch('excludeSomeBranch',secondParam,n)};
   //console.log(listCln.children[0].children[1].children[2].children[0].onclick)


   console.log(listCln.children[0].children[2])
   for (let i = 0; i<2; i++) {
      arr[i] = listCln.children[i];
   }
   for (let b = 0; b < 2; b++) {
      //console.log(listCln.children[b]);
      orgList.appendChild(arr[b]);
   }
   newClone = orgList.cloneNode(true);

   lil += 1;
}

function revealAdvancedSearch() {
   var x = document.getElementById("AdvancedSearch")
   if (x.style.display === "none") {
       x.style.display = "block";
     } else {
       x.style.display = "none";
     }
}


function appendSKU() {
   for (let x = 0; x < 3; x++) {
      var skuCln = skuIn.cloneNode(true);
      var qtyCln = qtyIn.cloneNode(true);

      skuCln.children[0].for = "SKU"+count;
      skuCln.children[1].id = "SKU"+count;
      skuCln.children[1].name = "SKU"+count;

      qtyCln.children[0].for = "Qty"+count;
      qtyCln.children[1].id = "Qty"+count;
      qtyCln.children[1].name = "Qty"+count;

      document.getElementById("bomInput").appendChild(skuCln);
      document.getElementById("bomInput").appendChild(qtyCln);
      count += 1;
   }
}
