//Autor del codigo: Daniel Mendez Mendez 

const mapping = {
					"A" : ".-", "B" : "-...","C" : "-.-.", "D" : "-..",
					"E" : ".", "F" : "..-.", "G" : "--.", "H" : "....",
					"I" : "..", "J" : ".---", "K" : "-.-", "L" : ".-..",
					"M" : "--", "N" : "-.", "O" : "---", "P" : ".--.",
					"Q" : "--.-", "R" : ".-.", "S" : "...", "T" : "-",
					"U" : "..-", "V" : "...-", "W" : ".--", "X" : "-..-",
					"Y" : "-.--", "Z" : "--..",
					
					
					"0" : "-----",
					"1" : ".----", "2" : "..---", "3" : "...--",
					"4" : "....-", "5" : ".....", "6" : "-....",
					"7" : "--...", "8" : "---..", "9" : "----."
				}
// Funcion para cambiar funcionalidad
function toggle()
{
		const decrypt = "Descifrar mensaje";
		const encrypt = "Cifrar mensaje";
		let curr = document.getElementById("toggle").innerHTML;
		
		if(curr == decrypt)
		{
			document.getElementById("toggle").innerHTML = encrypt;
			document.getElementById("input").value = "";
			document.getElementById("output").value = "";
			document.getElementById("input").placeholder = "Pega tu código...";
			document.getElementById("convert").innerHTML = "Convertir morse a texto"
			document.getElementById("convert").setAttribute('onclick','morse2text()');
		}
		else{
			document.getElementById("toggle").innerHTML = decrypt;
			document.getElementById("input").value = "";
			document.getElementById("output").value = "";
			document.getElementById("input").placeholder = "Escribe tu mensaje...";
			document.getElementById("convert").innerHTML = "Convertir a Código Morse"
			document.getElementById("convert").setAttribute('onclick','text2morse()');
		}
}



// Función para encriptar el mensaje 
function text2morse()			
{	
	let input = document.getElementById("input").value;
	
	input = input.toUpperCase();
	
	let arr1 = input.split("");
	
	let arr2 = arr1.map(x => {
		if(mapping[x])
		{
			return mapping[x];
		}
		else{						
			return x;
		}
	});
	
	let code = arr2.join(" ");
	
	document.getElementById("output").value = code;	
}

// Función para buscar valor en un objeto
function getKey(obj, val) {
  return Object.keys(obj).find(key => obj[key] === val);
}

// Función para descifrar el mensaje
function morse2text()
{
	let code = document.getElementById("input").value;
	let arr1 = code.split(" ");
	
	let arr2 = arr1.map(x=>{
		if(getKey(mapping,x))
		{
			return getKey(mapping,x);
		}
		else if(x==""){
			return " ";
		}
		else{
			return x;
		}
	});	
	
	let text = arr2.join("").replace(/\s\s+/g, ' ');	
	document.getElementById("output").value = text;		
}

