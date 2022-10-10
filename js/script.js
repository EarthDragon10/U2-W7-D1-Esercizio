const table = document.getElementById("table");
const errorDisplay = document.getElementById("error-display");

class PersonalData {
	constructor(name, surname, age) {
		this.name = name;
		this.surname = surname;
		this.age = age;
	}
}

let archivePersonalData = [];

const createAndInsertElement = () => {
	let nameInput = document.getElementById("name").value;
	let surnameInput = document.getElementById("surname").value;
	let dateBirthdayInput = document.getElementById("date-birthday").value;
	let errorDiv = document.createElement("div");

	if (nameInput === "" || surnameInput === "" || dateBirthdayInput === "") {
		errorDiv.classList.add("error-box");
		errorDiv.innerText = "Error";
		errorDisplay.appendChild(errorDiv);
	} else {
		errorDisplay.innerHTML = "";

		let InputPersonalData = new PersonalData(
			nameInput,
			surnameInput,
			dateBirthdayInput
		);

		archivePersonalData.push(InputPersonalData);

		let newDiv = document.createElement("div");
		newDiv.classList.add("box");
		newDiv.innerText += `${InputPersonalData.name} | ${InputPersonalData.surname} | ${InputPersonalData.age}`;
		table.appendChild(newDiv);

		console.log(archivePersonalData);
	}
};

const resetArchiveData = () => {
	table.innerHTML = "";
	errorDisplay.innerHTML = "";
};
