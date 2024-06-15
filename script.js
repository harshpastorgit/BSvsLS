// let container = document.getElementById("array");
// let arr = [];

// for (let i = 0; i < 20; i++) {
// 	let val = Number(Math.ceil(Math.random() * 100));
// 	arr.push(val);
// }

// arr.sort(function (a, b) {
// 	return a - b;
// });
// function Search(){
// 	BinarySearch()
// 	LinearSearch()
// }
// function generatearray() {

// for (let i = 0; i < 20; i++) {
// 	let value = arr[i];
// 	let array_ele = document.createElement("div");

// 	array_ele.classList.add("block");

// 	// Adding style to div
// 	array_ele.style.height = `${value * 3}px`;
// 	array_ele.style.transform = `translate(${i * 30}px)`;

// 	// Creating label element for displaying
// 	// size of particular block
// 	let array_ele_label = document.createElement("label");
// 	array_ele_label.classList.add("block_id");
// 	array_ele_label.innerText = value;
// 	array_ele.appendChild(array_ele_label);
// 	container.appendChild(array_ele);
// }
// }

// async function BinarySearch(delay = 1000) {
// let blocks = document.querySelectorAll(".block");
// let output = document.getElementById("text");
// let num = document.getElementById("fname").value;
// for (let i = 0; i < blocks.length; i += 1) {
// 	blocks[i].style.backgroundColor = "#6b5b95";
// }

// output.innerText = "";

// let start = 0;
// let end = 19;
// let flag = 0;
// while (start <= end) {
// 	let mid = Math.floor((start + end) / 2);
// 	blocks[mid].style.backgroundColor = "#FF4949";
// 	let value = Number(blocks[mid].childNodes[0].innerHTML);
// 	await new Promise((resolve) =>
// 	setTimeout(() => {
// 		resolve();
// 	}, delay)
// 	);

// 	if (value == num) {
// 	output.innerText = "Element Found";
// 	blocks[mid].style.backgroundColor = "#13CE66";
// 	flag = 1;
// 	break;
// 	}
// 	if (value > num) {
// 	end = mid - 1;
// 	blocks[mid].style.backgroundColor = "#6b5b95";
// 	} else {
// 	start = mid + 1;
// 	blocks[mid].style.backgroundColor = "#6b5b95";
// 	}
// }
// if (flag === 0) {
// 	output.innerText = "Element Not Found";
// }
// }
// async function LinearSearch(delay = 1000) {
// let blocks = document.querySelectorAll(".block");
// let output = document.getElementById("text");
// let num = document.getElementById("fname").value;
// for (let i = 0; i < blocks.length; i += 1) {
// 	blocks[i].style.backgroundColor = "#6b5b95";
// }

// output.innerText = "";

// let i = 0;
// let end = 19;
// let flag = 0;
// while (i<20) {
	
// 	blocks[i].style.backgroundColor = "#FF4949";
// 	let value = Number(blocks[i].childNodes[0].innerHTML);

// 	await new Promise((resolve) =>
// 	setTimeout(() => {
// 		resolve();
// 	}, delay)
// 	);

// 	if (value == num) {
// 	output.innerText = "Element Found";
// 	blocks[i].style.backgroundColor = "#13CE66";
// 	flag = 1;
// 	break;
// 	}
// 	if (value > num) {
// 		flag=0;
// 		break;
	
// 	}
// 	i++;
// }
// if (flag === 0) {
// 	output.innerText = "Element Not Found";
// }
// }
// generatearray();




let container = document.getElementById("array");
let arr = [];

// Function to generate the array of blocks
function generatearray() {
    container.innerHTML = ""; // Clear the previous array
    arr = []; // Reset the array

    // Create 20 blocks with random values and add to the array
    for (let i = 0; i < 20; i++) {
        let value = Number(Math.ceil(Math.random() * 100));
        arr.push(value);

        
    }

    // Sort the array for binary search
    arr.sort(function (a, b) {
        return a - b;
    });
	for (let i = 0; i < 20; i++) {
		let value=arr[i]
		let array_ele = document.createElement("div");
		// array_ele.style.backgroundColor="#212121"
        array_ele.classList.add("block");
        array_ele.style.height = `${value * 3}px`;
        array_ele.style.transform = `translate(${i * 30}px)`;

        let array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;

        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);

	}

}

// Function to perform Binary Search
async function BinarySearch(delay = 1000) {
    let blocks = document.querySelectorAll(".block");
    let output = document.getElementById("text");
    let num = Number(document.getElementById("fname").value);

    output.innerText = "";
    let count=0;
    let start = 0;
    let end = arr.length - 1;
    let flag = 0;

    while (start <= end) {
		count++;
        // Update colors of blocks
        updateColors(blocks, "#6b5b95");

        let mid = Math.floor((start + end) / 2);
        blocks[mid].style.backgroundColor = "#FF4949";

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );

        if (arr[mid] == num) {
            output.innerText = `Element Found after ${count} searchs`;
            blocks[mid].style.backgroundColor = "#13CE66";
            flag = 1;
            break;
        } else if (arr[mid] > num) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    if (flag === 0) {
        output.innerText = "Element Not Found";
    }
}

// Function to perform Linear Search
async function LinearSearch(delay = 1000) {
    let blocks = document.querySelectorAll(".block");
    let output = document.getElementById("text");
    let num = Number(document.getElementById("fname").value);

    output.innerText = "";
    
    let flag = 0;

    for (let i = 0; i < blocks.length; i++) {
        // Update colors of blocks
        updateColors(blocks, "#6b5b95");

        blocks[i].style.backgroundColor = "#FF4949";

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );

        if (arr[i] == num) {
            output.innerText = `Element Found after ${i} searchs`;
            blocks[i].style.backgroundColor = "#13CE66";
            flag = 1;
            break;
        }
		if(arr[i]>num){
			break;
		}
    }

    if (flag === 0) {
        output.innerText = "Element Not Found";
    }
}

// Helper function to update colors of blocks
function updateColors(blocks, color) {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = color;
    }
}

// Initially generate the array
generatearray();
