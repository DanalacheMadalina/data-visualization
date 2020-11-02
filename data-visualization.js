// declarare JSON-uri locale
const foodJSON = [
	{
		"1983": "3610",
		"1984": "3610",
		"1985": "3600",
		"1986": "3660",
		"1987": "3680",
		"1988": "3700",
		"1989": "3620",
		"1990": "3130",
		"1991": "3040",
		"1992": "3020",
		"1993": "2960",
		"1994": "2870",
		"1995": "2900",
		"1996": "2740",
		"1997": "2680",
		"1998": "2820",
		"1999": "2880",
		"2000": "2810",
		"2001": "2820",
		"2002": "2780",
		"2003": "2760",
		"2004": "2760",
		"2005": "2720",
		"2006": "2760",
		"2007": "2730",
		"2008": "2780",
		"2009": "2790",
		"2010": "2760",
		"2011": "2770",
		"2012": "2780",
		"2013": "2830",
		"country": "Bulgaria"
	},
	{
		"1983": "3380",
		"1984": "3390",
		"1985": "3420",
		"1986": "3410",
		"1987": "3380",
		"1988": "3400",
		"1989": "3400",
		"1990": "3260",
		"1991": "3320",
		"1992": "3390",
		"1993": "3200",
		"1994": "3210",
		"1995": "3250",
		"1996": "3300",
		"1997": "3180",
		"1998": "3290",
		"1999": "3280",
		"2000": "3340",
		"2001": "3360",
		"2002": "3430",
		"2003": "3390",
		"2004": "3410",
		"2005": "3450",
		"2006": "3470",
		"2007": "3530",
		"2008": "3520",
		"2009": "3520",
		"2010": "3500",
		"2011": "3540",
		"2012": "3500",
		"2013": "3500",
		"country": "Germany"
	},
	{
		"1983": "3000",
		"1984": "3070",
		"1985": "3030",
		"1986": "2940",
		"1987": "2900",
		"1988": "2920",
		"1989": "2920",
		"1990": "3130",
		"1991": "2920",
		"1992": "2840",
		"1993": "3000",
		"1994": "2930",
		"1995": "3030",
		"1996": "3060",
		"1997": "3050",
		"1998": "3070",
		"1999": "3080",
		"2000": "3140",
		"2001": "3240",
		"2002": "3320",
		"2003": "3370",
		"2004": "3350",
		"2005": "3400",
		"2006": "3430",
		"2007": "3380",
		"2008": "3400",
		"2009": "3380",
		"2010": "3330",
		"2011": "3340",
		"2012": "3340",
		"2013": "3360",
		"country": "Romania"
	},
	{
		"1983": "3050",
		"1984": "3040",
		"1985": "3110",
		"1986": "3100",
		"1987": "3150",
		"1988": "3210",
		"1989": "3240",
		"1990": "3260",
		"1991": "3410",
		"1992": "3410",
		"1993": "3310",
		"1994": "3300",
		"1995": "3220",
		"1996": "3360",
		"1997": "3300",
		"1998": "3340",
		"1999": "3330",
		"2000": "3360",
		"2001": "3330",
		"2002": "3360",
		"2003": "3300",
		"2004": "3250",
		"2005": "3220",
		"2006": "3230",
		"2007": "3220",
		"2008": "3210",
		"2009": "3210",
		"2010": "3180",
		"2011": "3190",
		"2012": "3170",
		"2013": "3170",
		"country": "Spain"
	},
	{
		"1983": "3430",
		"1984": "3420",
		"1985": "3630",
		"1986": "3620",
		"1987": "3690",
		"1988": "3720",
		"1989": "3720",
		"1990": "3780",
		"1991": "3720",
		"1992": "3710",
		"1993": "3730",
		"1994": "3730",
		"1995": "3720",
		"1996": "3690",
		"1997": "3600",
		"1998": "3660",
		"1999": "3620",
		"2000": "3660",
		"2001": "3620",
		"2002": "3610",
		"2003": "3590",
		"2004": "3610",
		"2005": "3610",
		"2006": "3650",
		"2007": "3630",
		"2008": "3600",
		"2009": "3620",
		"2010": "3650",
		"2011": "3670",
		"2012": "3690",
		"2013": "3710",
		"country": "Turkey"
	}
];

const lifeJSON = [
	{
		"1983": "71.4",
		"1984": "71.4",
		"1985": "71.3",
		"1986": "71.5",
		"1987": "71.5",
		"1988": "71.6",
		"1989": "71.6",
		"1990": "71.5",
		"1991": "71.3",
		"1992": "71.3",
		"1993": "71.2",
		"1994": "70.9",
		"1995": "71",
		"1996": "70.9",
		"1997": "70.6",
		"1998": "71.1",
		"1999": "71.5",
		"2000": "71.8",
		"2001": "72",
		"2002": "72.3",
		"2003": "72.5",
		"2004": "72.6",
		"2005": "72.7",
		"2006": "72.8",
		"2007": "73.1",
		"2008": "73.3",
		"2009": "73.6",
		"2010": "73.9",
		"2011": "74.3",
		"2012": "74.7",
		"2013": "74.9",
		"country": "Bulgaria"
	},
	{
		"1983": "73.7",
		"1984": "74",
		"1985": "74.2",
		"1986": "74.5",
		"1987": "74.7",
		"1988": "74.9",
		"1989": "75.2",
		"1990": "75.3",
		"1991": "75.5",
		"1992": "75.8",
		"1993": "76",
		"1994": "76.2",
		"1995": "76.5",
		"1996": "76.7",
		"1997": "77",
		"1998": "77.3",
		"1999": "77.6",
		"2000": "77.9",
		"2001": "78.2",
		"2002": "78.4",
		"2003": "78.6",
		"2004": "78.9",
		"2005": "79.2",
		"2006": "79.4",
		"2007": "79.6",
		"2008": "79.8",
		"2009": "79.9",
		"2010": "80.1",
		"2011": "80.3",
		"2012": "80.4",
		"2013": "80.5",
		"country": "Germany"
	},
	{
		"1983": "70.2",
		"1984": "70.1",
		"1985": "69.8",
		"1986": "70",
		"1987": "69.4",
		"1988": "69.8",
		"1989": "69.9",
		"1990": "69.9",
		"1991": "70.4",
		"1992": "69.9",
		"1993": "69.7",
		"1994": "69.5",
		"1995": "69.4",
		"1996": "69.2",
		"1997": "69.4",
		"1998": "70.1",
		"1999": "70.9",
		"2000": "71.2",
		"2001": "71.1",
		"2002": "71.3",
		"2003": "71.6",
		"2004": "72.1",
		"2005": "72.4",
		"2006": "72.8",
		"2007": "73.2",
		"2008": "73.2",
		"2009": "73.3",
		"2010": "73.7",
		"2011": "74.5",
		"2012": "74.6",
		"2013": "74.8",
		"country": "Romania"
	},
	{
		"1983": "76.1",
		"1984": "76.3",
		"1985": "76.4",
		"1986": "76.6",
		"1987": "76.8",
		"1988": "76.9",
		"1989": "77",
		"1990": "77.1",
		"1991": "77.3",
		"1992": "77.5",
		"1993": "77.7",
		"1994": "77.9",
		"1995": "78.2",
		"1996": "78.4",
		"1997": "78.7",
		"1998": "78.9",
		"1999": "79.1",
		"2000": "79.4",
		"2001": "79.7",
		"2002": "79.8",
		"2003": "80",
		"2004": "80.2",
		"2005": "80.5",
		"2006": "80.8",
		"2007": "81",
		"2008": "81.3",
		"2009": "81.7",
		"2010": "81.9",
		"2011": "82.2",
		"2012": "82.3",
		"2013": "82.6",
		"country": "Spain"
	},
	{
		"1983": "66.6",
		"1984": "67.5",
		"1985": "68",
		"1986": "68.6",
		"1987": "69.9",
		"1988": "70.4",
		"1989": "70.1",
		"1990": "70.2",
		"1991": "70.2",
		"1992": "70.5",
		"1993": "70.6",
		"1994": "70.7",
		"1995": "70.9",
		"1996": "71.4",
		"1997": "71.9",
		"1998": "72.6",
		"1999": "72",
		"2000": "74.1",
		"2001": "74.8",
		"2002": "75.4",
		"2003": "75.5",
		"2004": "76.3",
		"2005": "76.7",
		"2006": "77.2",
		"2007": "78.1",
		"2008": "78.8",
		"2009": "78.2",
		"2010": "78.2",
		"2011": "78.2",
		"2012": "78.6",
		"2013": "78.4",
		"country": "Turkey"
	}
];

const incomeJSON = [
	{
		"1983": "10400",
		"1984": "10700",
		"1985": "10400",
		"1986": "10600",
		"1987": "10600",
		"1988": "10500",
		"1989": "10300",
		"1990": "9300",
		"1991": "8600",
		"1992": "8060",
		"1993": "8000",
		"1994": "8180",
		"1995": "8450",
		"1996": "8630",
		"1997": "8580",
		"1998": "8940",
		"1999": "8490",
		"2000": "8960",
		"2001": "9530",
		"2002": "10300",
		"2003": "10900",
		"2004": "11700",
		"2005": "12700",
		"2006": "13600",
		"2007": "14800",
		"2008": "15700",
		"2009": "15200",
		"2010": "15300",
		"2011": "15700",
		"2012": "15800",
		"2013": "16000",
		"country": "Bulgaria"
	},
	{
		"1983": "28100",
		"1984": "29000",
		"1985": "29700",
		"1986": "30300",
		"1987": "30800",
		"1988": "31700",
		"1989": "32500",
		"1990": "31300",
		"1991": "32600",
		"1992": "33000",
		"1993": "32500",
		"1994": "33200",
		"1995": "33700",
		"1996": "33800",
		"1997": "34400",
		"1998": "35100",
		"1999": "35800",
		"2000": "36800",
		"2001": "37300",
		"2002": "37300",
		"2003": "37000",
		"2004": "37400",
		"2005": "37700",
		"2006": "39100",
		"2007": "40500",
		"2008": "41000",
		"2009": "38800",
		"2010": "40400",
		"2011": "42700",
		"2012": "42800",
		"2013": "42900",
		"country": "Germany"
	},
	{
		"1983": "13300",
		"1984": "13800",
		"1985": "13700",
		"1986": "13900",
		"1987": "13500",
		"1988": "13400",
		"1989": "12900",
		"1990": "11500",
		"1991": "10100",
		"1992": "9280",
		"1993": "9440",
		"1994": "9820",
		"1995": "10500",
		"1996": "11000",
		"1997": "10500",
		"1998": "10300",
		"1999": "10300",
		"2000": "10500",
		"2001": "11300",
		"2002": "12100",
		"2003": "12800",
		"2004": "14000",
		"2005": "14700",
		"2006": "15900",
		"2007": "17300",
		"2008": "19100",
		"2009": "17900",
		"2010": "17800",
		"2011": "18100",
		"2012": "18300",
		"2013": "19000",
		"country": "Romania"
	},
	{
		"1983": "18500",
		"1984": "18700",
		"1985": "19000",
		"1986": "19600",
		"1987": "20600",
		"1988": "21700",
		"1989": "22800",
		"1990": "23800",
		"1991": "24300",
		"1992": "24400",
		"1993": "24000",
		"1994": "24500",
		"1995": "25100",
		"1996": "25600",
		"1997": "26400",
		"1998": "27500",
		"1999": "28600",
		"2000": "30000",
		"2001": "31000",
		"2002": "31400",
		"2003": "31800",
		"2004": "32300",
		"2005": "32900",
		"2006": "33700",
		"2007": "34300",
		"2008": "34200",
		"2009": "32700",
		"2010": "32500",
		"2011": "32100",
		"2012": "31100",
		"2013": "30700",
		"country": "Spain"
	},
	{
		"1983": "9060",
		"1984": "9350",
		"1985": "9750",
		"1986": "10200",
		"1987": "11000",
		"1988": "11100",
		"1989": "10800",
		"1990": "11400",
		"1991": "11300",
		"1992": "11700",
		"1993": "12400",
		"1994": "11600",
		"1995": "12300",
		"1996": "13000",
		"1997": "13800",
		"1998": "13900",
		"1999": "13200",
		"2000": "13900",
		"2001": "12800",
		"2002": "13500",
		"2003": "14000",
		"2004": "15200",
		"2005": "16300",
		"2006": "17300",
		"2007": "17900",
		"2008": "17800",
		"2009": "16800",
		"2010": "18000",
		"2011": "19700",
		"2012": "20300",
		"2013": "21700",
		"country": "Turkey"
	}
];

// vectorul pentru culorile folosite de bubble chart
const colors = ['#ff9933', '#cc6699', '#3366ff', '#9933ff', '#ff66ff'];

let anCurent = 2000,
    ctColor = 0,
    date = null,
    allJSON = new Object();

// initializeaza variabilele pt canvas
const canvas = document.querySelector('canvas'),
    W = canvas.width,
    H = canvas.height,
    context = canvas.getContext('2d');

// ia elementele DOM pentru tooltip
// const tooltipHTML = document.querySelectorAll(".js-tooltip")[0]; sau
const tooltipHTML = document.querySelector(".js-tooltip");
const lifeHTML = document.querySelector(".js-life");
const foodHTML = document.querySelector(".js-food");
const incomeHTML = document.querySelector(".js-income");

// Ia elementele dom pentru labels
const xLabel = document.querySelector(".js-x-label");
const yLabel = document.querySelector(".js-y-label");

// ia elemenetele dom pentru a schimba anul
const prevHTML = document.querySelector(".js-prev");
const nextHTML = document.querySelector(".js-next");
const yearHTML = document.querySelector(".js-year");
//ia  elementele dom pentru animatie
const startHTML=document.querySelector(".js-animation");



// verifica daca mouse-ul este in cerc folosit teorema lui pitagora
function checkIfIsInBubble(circle, mouse) {
    let dx = circle.x - mouse.x;
    let dy = circle.y - mouse.y;
    let dist = Math.sqrt(dx*dx + dy*dy);
    
    if (dist < circle.r) {
        return true;
    }
    return false
}

// ia pozitia mouse-ului
function oMousePos(canvas, event) {
    var ClientRect = canvas.getBoundingClientRect();
    return {
        x: Math.round(event.clientX - ClientRect.left),
        y: Math.round(event.clientY - ClientRect.top)
    }
}

// creeaza cercurile in interiorul canvasului
function desenare(an) {
    context.clearRect(0, 0, W, H);
    let elements = [];
    Object.keys(allJSON).forEach(function (country) {
        const x = allJSON[country][an].lifeNormalization * W;
        const y = H - allJSON[country][an].foodNormalization * H;
        const r = allJSON[country][an].incomeNormalization * 100;
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.fillStyle = colors[ctColor % 5];
        context.fill();
        context.stroke();
        context.fillStyle = 'black';
        context.fillText(country, x, y);
		
		// array unde salvam pozitia si detaliile bubble chart-urilor
        elements.push({
            colour: colors[ctColor % 5],
            x: x,
            y: y,
            r: r,
            life: allJSON[country][an].life,
            food: allJSON[country][an].food,
            income: allJSON[country][an].income
        });

		// eveniment de click pentru a afisa detalii despre bubble chart
        canvas.addEventListener( "click",
        	function(event) {
        		let mouse = oMousePos(canvas, event)	// converteste coordonatele mouse-ului din pozitie ecran in pozitie din interiorul canvasului
        		let tempElem = "";
        		elements.forEach(function(elementCurent) { 
					// verificam daca click-ul mouse-ului se afla in interiorul mouse-ului, salvand cercul cel de deasupra in cazul suprapunerii.
            		if (checkIfIsInBubble(elementCurent, mouse)) {
                		tempElem = elementCurent;
            		}
				});
				// daca este gol, inseamna ca nu am dat click pe nici un bubble, deci facem tooltip-ul invizibil
				if (tempElem == "") {
					tooltipHTML.style.display= "none";
				} else {	// setam pozitia tooltip-ului si detaliile din interiorul lui 
					tooltipHTML.style.display= "block";
					tooltipHTML.style.left = `${mouse.x}px`;
					tooltipHTML.style.top = `${mouse.y}px`;
					lifeHTML.innerText = `life: ${tempElem.life}`;
					foodHTML.innerText = `food: ${tempElem.food}`;
					incomeHTML.innerText = `income: ${tempElem.income}`;
				}
    		},
			false
		); 
        ctColor++;
    })

}

document.addEventListener('DOMContentLoaded', app);
async function app() {
    let lifeValues = [],
        foodValues = [],
        incomeValues = [];
    
    //pune valorile pentru food,life, income in arrays(vectori)
    for(let i = 0; i < 5; i++) {
        for(let a = 1983; a < 2014; a++) {
            lifeValues.push((Math.round(lifeJSON[i][a] * 100) / 100).toString());
            foodValues.push(foodJSON[i][a]);
            incomeValues.push(incomeJSON[i][a]);
        }
    }

    //gaseste maximul si minimul pentru fiecare indicator
    let lifeMin = Math.min(...lifeValues),
        lifeMax = Math.max(...lifeValues),
        foodMin = Math.min(...foodValues),
        foodMax = Math.max(...foodValues),
        incomeMin = Math.min(...incomeValues),
        incomeMax = Math.max(...incomeValues);


	//creeaza un JON final din cei 3 indicatori si normalizeaza fiecare indicator
    for (let i = 0; i < 5; i++) {
        let key = lifeJSON[i]["country"];
        let tempJSON = new Object();
        for(let a = 1983; a < 2014; a++) {
            let year = new Object();
            year.life = (Math.round(lifeJSON[i][a] * 100) / 100).toString();
            year.lifeNormalization = (year.life - lifeMin) / (lifeMax - lifeMin);
            year.food = foodJSON[i][a];
            year.foodNormalization = (year.food - foodMin) / (foodMax - foodMin);
            year.income = incomeJSON[i][a];
            year.incomeNormalization = (year.income - incomeMin) / (incomeMax - incomeMin);
            tempJSON[a] = year;
        }
        allJSON[key] = tempJSON;
    }

    // apelez functia de desenare sa creez bubbles
    desenare(anCurent);

    // Create x Label
    for(let x = 0; x < 10; x++ ) {
        let element = document.createElement("span");
        let text = document.createTextNode( Math.round( (lifeMax - lifeMin) / 10 * x + lifeMin) );
        element.appendChild(text);
        xLabel.appendChild(element);
    }
    
    // Create y Label
    for(let y = 7; y >= 0; y-- ) {
        let para = document.createElement("span");
        let node = document.createTextNode( Math.round( (foodMax - foodMin) / 8 * y + foodMin) );
        para.appendChild(node);
        yLabel.appendChild(para);
    }
}


//adauga eveniment de click pentru butoanele prev si next sa pot schimba anul 
nextHTML.addEventListener('click', () => {
    if (anCurent < 2013) {
        anCurent++;
        desenare(anCurent);
        yearHTML.textContent = anCurent;
    }
});
prevHTML.addEventListener('click', () => {
    if (anCurent > 1983) {
        anCurent--;
        desenare(anCurent);
        yearHTML.textContent = anCurent;
    }
})

//adauga eveniment de click pentru butonul de start al animatiei.
startHTML.addEventListener('click', () => {
    let an = 1983;
	setInterval(function() {
		if(an <2014) {
			desenare(an) ;
			yearHTML.textContent = an;
			an++; 
		}
	}, 150)
});


const dropdown = document.querySelector('.js-select');
let option;

// adauga elementele option de tip html care contin anii folositi in bubble chart
for (let i = 1983; i < 2014; i++) {
    option = document.createElement('option')
    option.text = i;
    option.value = i;
    dropdown.add(option);
}   

const table = document.querySelector(".js-table");

// functie care se apeleaza in momentul selectarii unui nou an, pentru a modifica valorile din tabel
function changeValuesTable() {
    let value = document.querySelector(".js-select").value;
    let numberrows = table.rows.length;
    for (let i = 1; i < numberrows; i++) {
    let row = table.rows[i];
    
        if (numberrows <= 1) 
            break;
         numberrows--;
        table.deleteRow(i);
        i--;
    }
    for(i=0; i<5; i++) {
        let row = table.insertRow(i+1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = foodJSON[i]["country"];
        cell2.innerHTML = lifeJSON[i][value];
        cell3.innerHTML = foodJSON[i][value];
        cell4.innerHTML = incomeJSON[i][value];
    }
}