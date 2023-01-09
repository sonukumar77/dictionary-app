const addPersonBtn = document.querySelector("#add-new-person-btn");
const retrieveInfoBtn = document.querySelector("#retrieve-info-btn");
const addPersonContainer = document.querySelector(".add-new-person-container");
const retrieveInfoContainer = document.querySelector(
  ".retrieve-info-container"
);
const addBtn = document.querySelector("#add-btn");
const tableBody = document.querySelector("#table-body");
const inputsRow = document.querySelector("#inputs-row");
const aadharInputBox = document.querySelector("#aadhar-input-box");
const findBtn = document.querySelector("#find-btn");
const showInfoTable = document.querySelector("#show-info-table");

const dt = new Date();
let isView = true;
function hideShow() {
  if (isView == true) {
    addPersonContainer.style.display = "none";
    retrieveInfoContainer.style.display = "block";
    isView = false;
  } else {
    addPersonContainer.style.display = "block";
    retrieveInfoContainer.style.display = "none";
    isView = true;
  }
}
let count = 1;
const listArr = [];
function addRow() {
  const tr = document.createElement("tr");

  const p = document.createElement("p");

  const tdName = document.createElement("td");
  const tdDob = document.createElement("td");
  const tdAadhar = document.createElement("td");
  const tdMobile = document.createElement("td");
  const tdAge = document.createElement("td");
  const tdActions = document.createElement("td");

  const inputName = document.createElement("input");
  const inputDob = document.createElement("input");
  const inputAadhar = document.createElement("input");
  const inputMobile = document.createElement("input");

  const saveBtn = document.createElement("a");
  saveBtn.innerText = "Save";
  saveBtn.id = `saveBtn${count}`;
  saveBtn.style.textDecoration = "underline";
  const deleteBtn = document.createElement("a");
  deleteBtn.innerText = "Delete";
  deleteBtn.style.textDecoration = "underline";
  deleteBtn.style.marginLeft = "5px";
  deleteBtn.id = `deleteBtn${count}`;

  inputName.type = "text";
  inputDob.type = "text";
  inputDob.placeholder = "dd/mm/yyyy";
  inputAadhar.type = "text";
  inputMobile.type = "text";

  tdName.appendChild(inputName);
  tdDob.appendChild(inputDob);
  tdAadhar.appendChild(inputAadhar);
  tdMobile.appendChild(inputMobile);
  tdAge.appendChild(p);

  tdActions.appendChild(saveBtn);
  tdActions.appendChild(deleteBtn);

  tr.append(tdName, tdDob, tdAadhar, tdMobile, tdAge, tdActions);
  tableBody.appendChild(tr);

  saveBtn.addEventListener("click", () => {
    if (
      inputName.value == "" &&
      inputDob.value == "" &&
      inputAadhar.value == "" &&
      inputMobile.value == ""
    ) {
      alert("All fields is required!");
      return false;
    } else if (inputAadhar.value.length != 12) {
      alert("Aadhar number must be of 12 digit!");
      return false;
    } else if (inputMobile.value.length != 10) {
      alert("Mobile number must be of 10 digit!");
      return false;
    } else {
      p.innerText = dt.getFullYear() - inputDob.value.split("/")[2];

      const obj = {
        Name: inputName.value,
        Date_of_Birth: inputDob.value,
        Aadhar_Number: inputAadhar.value,
        Mobile_Number: inputMobile.value,
        Age: p.innerText,
      };

      listArr.push(obj);
      localStorage.setItem("list", JSON.stringify(listArr));
    }
  });
  deleteBtn.addEventListener("click", () => {
    const localData = JSON.parse(localStorage.getItem("list"));

    for (let i = 0; i < localData.length; i++) {
      if (inputAadhar.value == localData[i].Aadhar_Number) {
        localData.splice(i, 1);
        localStorage.setItem("list", JSON.stringify(localData));
        tableBody.removeChild(tr);
      }
    }
  });

  count++;
}

function getData() {
  const aadharNumber = aadharInputBox.value;
  if (aadharNumber.length != 12) {
    alert("Aadhar number must be of 12 digit!");
    aadharInputBox.value = "";
    return false;
  }

  let getList = JSON.parse(localStorage.getItem("list"));
  let result = getList.filter((element, index) => {
    if (element.Aadhar_Number == aadharNumber) {
      return true;
    }
  });

  if (result.length != 0) {
    result.forEach((element, idx) => {
      showInfoTable.innerHTML = "";

      let trName = document.createElement("tr");
      let trDob = document.createElement("tr");
      let trAadhar = document.createElement("tr");
      let trMobile = document.createElement("tr");
      let trAge = document.createElement("tr");

      let tdNameTitle = document.createElement("td");
      tdNameTitle.innerText = "Name";
      let tdNameValue = document.createElement("td");
      tdNameValue.innerText = element.Name;

      let tdDobTitle = document.createElement("td");
      tdDobTitle.innerText = "DOB";
      let tdDobValue = document.createElement("td");
      tdDobValue.innerText = element.Date_of_Birth;

      let tdAadharTitle = document.createElement("td");
      tdAadharTitle.innerText = "Aadhar No.";
      let tdAadharValue = document.createElement("td");
      tdAadharValue.innerText = element.Aadhar_Number;

      let tdMobileTitle = document.createElement("td");
      tdMobileTitle.innerText = "Mobile";
      let tdMobileValue = document.createElement("td");
      tdMobileValue.innerText = element.Mobile_Number;

      let tdAgeTitle = document.createElement("td");
      tdAgeTitle.innerText = "Age";
      let tdAgeValue = document.createElement("td");
      tdAgeValue.innerText = element.Age;

      trName.append(tdNameTitle, tdNameValue);
      trDob.append(tdDobTitle, tdDobValue);
      trAadhar.append(tdAadharTitle, tdAadharValue);
      trMobile.append(tdMobileTitle, tdMobileValue);
      trAge.append(tdAgeTitle, tdAgeValue);

      showInfoTable.append(trName, trDob, trAadhar, trMobile, trAge);
    });
  } else {
    alert("No match found");
  }
}

findBtn.addEventListener("click", getData);
addPersonBtn.addEventListener("click", hideShow);
retrieveInfoBtn.addEventListener("click", hideShow);
addBtn.addEventListener("click", addRow);
