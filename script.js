const addPersonBtn = document.querySelector("#add-new-person-btn");
const retrieveInfoBtn = document.querySelector("#retrieve-info-btn");
const addPersonContainer = document.querySelector(".add-new-person-container");
const retrieveInfoContainer = document.querySelector(".retrieve-info-container");
const addBtn = document.querySelector("#add-btn");
const tableBody = document.querySelector("#table-body");
const inputsRow = document.querySelector("#inputs-row");


let isView=true;
function hideShow(){
    if(isView == true){
        addPersonContainer.style.display="none";
        retrieveInfoContainer.style.display="block";
        isView=false;
    }else{
        addPersonContainer.style.display="block";
        retrieveInfoContainer.style.display="none";
        isView=true;
    }
    
}

function addRow(){
   
        const tr = document.createElement("tr")

        const p = document.createElement("p")

        const tdName = document.createElement("td")
        const tdDob = document.createElement("td")
        const tdAadhar = document.createElement("td")
        const tdMobile = document.createElement("td")
        const tdAge = document.createElement("td")
        const tdActions = document.createElement("td")

        const inputName = document.createElement("input");
        const inputDob = document.createElement("input");
        const inputAadhar = document.createElement("input");
        const inputMobile = document.createElement("input");

        const saveBtn = document.createElement("a");
        saveBtn.innerText="Save";
        const deleteBtn = document.createElement("a");
        deleteBtn.innerText="Delete";

        inputName.type="text";
        inputDob.type="text";
        inputAadhar.type="text";
        inputMobile.type="text";

        tdName.appendChild(inputName);
        tdDob.appendChild(inputDob);
        tdAadhar.appendChild(inputAadhar);
        tdMobile.appendChild(inputMobile);
        tdAge.appendChild(p);

        tdActions.appendChild(saveBtn);
        tdActions.appendChild(deleteBtn);

        tr.appendChild(tdName);
        tr.appendChild(tdDob);
        tr.appendChild(tdAadhar);
        tr.appendChild(tdMobile);
        tr.appendChild(tdAge);
        tr.appendChild(tdActions);
        tableBody.appendChild(tr);
 
    
}

addPersonBtn.addEventListener("click",hideShow);
retrieveInfoBtn.addEventListener("click",hideShow);
addBtn.addEventListener("click",addRow);
