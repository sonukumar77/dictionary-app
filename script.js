const addPersonBtn = document.querySelector("#add-new-person-btn");
const retrieveInfoBtn = document.querySelector("#retrieve-info-btn");
const addPersonContainer = document.querySelector(".add-new-person-container");
const retrieveInfoContainer = document.querySelector(".retrieve-info-container");
const addBtn = document.querySelector("#add-btn");
const tableBody = document.querySelector("#table-body");
const inputsRow = document.querySelector("#inputs-row");
const aadharInputBox= document.querySelector("#aadhar-input-box");
const findBtn = document.querySelector("#find-btn");
const showInfoTable = document.querySelector("#show-info-table");


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
let count =1;
const listArr=[];
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
        saveBtn.id=`saveBtn${count}`;
        const deleteBtn = document.createElement("a");
        deleteBtn.innerText="Delete";
        deleteBtn.id=`deleteBtn${count}`;

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

        tr.append(tdName,tdDob,tdAadhar,tdMobile,tdAge,tdActions);
        tableBody.appendChild(tr);

        saveBtn.addEventListener("click",() => {
            console.log(inputName.value)
            const obj = {
                "Name":inputName.value,
                "Date_of_Birth":inputDob.value,
                "Aadhar_Number":inputAadhar.value,
                "Mobile_Number":inputMobile.value,
                "Age":23
            };
            listArr.push(obj);
            localStorage.setItem("list",JSON.stringify(listArr));
            // console.log(localStorage.getItem("list"))
        });
        deleteBtn.addEventListener("click",() => {
            tableBody.removeChild(tr);
        });

        count++;
 
    
}

function getData() {
    const aadharNumber = aadharInputBox.value;

    let getList = JSON.parse(localStorage.getItem("list"));
    let result = getList.filter((element,index) => {
        if(element.Aadhar_Number == aadharNumber)
        {
            return true;
        }
        
    })

   
    result.forEach((element ,idx) => {
        showInfoTable.innerHTML="";
        
        let trName = document.createElement("tr");
        let trDob= document.createElement("tr");
        let trAadhar= document.createElement("tr");
        let trMobile= document.createElement("tr");
        let trAge= document.createElement("tr");

        let tdNameTitle = document.createElement("td");
        tdNameTitle.innerText="Name";
        let tdNameValue = document.createElement("td");
        tdNameValue.innerText=element.Name;

        let tdDobTitle = document.createElement("td");
        tdDobTitle .innerText="DOB";
        let tdDobValue = document.createElement("td");
        tdDobValue.innerText=element.Date_of_Birth;

        let tdAadharTitle = document.createElement("td");
        tdAadharTitle .innerText="Aadhar No.";
        let tdAadharValue = document.createElement("td");
        tdAadharValue.innerText=element.Aadhar_Number;

        let tdMobileTitle = document.createElement("td");
        tdMobileTitle .innerText="Mobile";
        let tdMobileValue = document.createElement("td");
        tdMobileValue.innerText=element.Mobile_Number;

        let tdAgeTitle = document.createElement("td");
        tdAgeTitle.innerText="Age";
        let tdAgeValue = document.createElement("td");
        tdAgeValue.innerText=element.Age;

        trName.append(tdNameTitle,tdNameValue);
        trDob.append(tdDobTitle ,tdDobValue);
        trAadhar.append(tdAadharTitle ,tdAadharValue);
        trMobile.append(tdMobileTitle  ,tdMobileValue);
        trAge.append(tdAgeTitle  ,tdAgeValue);

        showInfoTable.append(trName,trDob,trAadhar,trMobile,trAge);
    })
   
    console.log(result);
}

findBtn.addEventListener("click",getData);
addPersonBtn.addEventListener("click",hideShow);
retrieveInfoBtn.addEventListener("click",hideShow);
addBtn.addEventListener("click",addRow);
