let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let alpha_div = document.getElementById('alpha');
let numeric_div = document.getElementById('numeric');

let string = "";

function vowelCount(stringVar) {
    let vowelString = 'aeiouAEIOU';
    let vowel_count = 0;
    for (let i = 0; i < stringVar.length; i++) {
        if (vowelString.includes(stringVar[i])) {
            vowel_count += 1;
        }
    }
    return vowel_count;
}

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = string.replaceAll("^", "**");
            string = eval(string);
            input.value = string;
        }
        else if (e.target.classList.contains("irrconstant")) {
            if (e.target.innerHTML == "π") {
                string += "3.14";
                input.value = string;
            }
            else {
                string += "2.72";
                input.value = string;
            }
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (e.target.innerHTML == 'Str') {
            numeric_div.style.display = 'none';
            alpha_div.style.display = 'block';
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'Num') {
            numeric_div.style.display = 'block';
            alpha_div.style.display = 'none';
            string = "";
            input.value = string;
        }
        else if (e.target.classList.contains("scientific")) {
            string += e.target.innerHTML + "(";
            input.value = string;
        }
        else if (e.target.classList.contains("uppercase")||e.target.classList.contains("lowercase")) {
            let caseswitch = document.querySelectorAll('.alphakey');
            let arrcase = Array.from(caseswitch);
            if(e.target.classList.contains("uppercase"))
            {
                arrcase.forEach(ind_element=>{
                    ind_element.innerHTML = ind_element.innerHTML.toUpperCase();
                })
            }
            else{
                 arrcase.forEach(ind_element=>{
                    ind_element.innerHTML = ind_element.innerHTML.toLowerCase();
                })
            }
        }
        else if(e.target.innerHTML=="__"){
            string = string + " ";
            input.value = string;
        }
        else if (e.target.innerHTML == 'Rev') {
            //    Logic for Reversing the String
            string = string.split('').reverse().join('');
            input.value = string;
        }
        else if (e.target.innerHTML == 'VC') {
            //    Logic for Vowel Count
            let vc = vowelCount(string);
            input.value = vc;
            string = "";
        }
        else if (e.target.innerHTML == 'ChC') {
            //    Logic for Consonant Count
            input.value = string.length;
            string = "";
        }
        else if (e.target.innerHTML == 'CnC') {
            //    Logic for Consonant Count
            let vc = vowelCount(string);
            input.value = string.length - vc;
            string = "";
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})