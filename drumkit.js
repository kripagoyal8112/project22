
let numberOfButtons = document.querySelectorAll(".drum").length; // 7

for (let i = 0; i < numberOfButtons; i++)
{
	document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick()
{
	let buttonInnerHTML = this.innerHTML; // w
	playSound(buttonInnerHTML); // playSound(w)
	animateButton(buttonInnerHTML);
}
function playSound(key) // key = w, a, s, d, j, k, l
{
	switch(key)
	{
		case "w":
			let audio_w = new Audio("crash.mp3");
			audio_w.play();
			break;

		case "a":
			let audio_a = new Audio("kick-bass.mp3");
			audio_a.play();
			break;

		case "s":
			let audio_s = new Audio("snare.mp3");
			audio_s.play();
			break;


		case "d":
			let audio_d = new Audio("tom-1.mp3");
			audio_d.play();
			break;

		
        case "j":
			let audio_j = new Audio("tom-2.mp3");
			audio_j.play();
			break;

		case "k":
			let audio_k = new Audio("tom-3.mp3");
			audio_k.play();
			break;

		case "l":
			let audio_l = new Audio("tom-4.mp3");
			audio_l.play();
			break;
		default:
	
	}
}


function animateButton(key) // key = w, a, s, d, j, k, l
{
	//document.querySelector(".w")
	document.querySelector("." + key).classList.add("pressed"); // Add the animation effect
	
	setTimeout(
		function ()
		{
			document.querySelector("." + key).classList.remove("pressed");
		}
		, 5000); // After 5 seconds remove the button press animation effect
}


document.addEventListener("keydown", handleKeyPress);


function handleKeyPress(event)
{
	let pressedKeyCharacter = event.key;
	playSound(pressedKeyCharacter);
	animateButton(pressedKeyCharacter);
}