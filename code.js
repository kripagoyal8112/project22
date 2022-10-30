<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<select id ="course">
		<option>BCA</option>
		<option>BE</option>
		<option>MCA</option>
		<option>MTech</option>
	</select>
	<br><br>
			<button onclick="buttonClicked()">Click Me</button>
			<script type="text/javascript">
				function buttonClicked()
				{
					let dropDown = document.getElementById("course");
					let index = dropDown.selectedIndex; // 0 1 2 3
					alert(dropDown.options[index].value);
				}

			</script>

</body>
</html>






<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<input id ="web" name="course" type="radio" value="Web App Development" checked="true">Web App Development</input><br>
	<input id = "mobile" name="course" type="radio" value="Mobile App Development">Mobile App Development</input><br>
	<input id = "game" name="course" type="radio" value="Game Development">Game Development</input><br>

	<button onclick="buttonClicked()">Click Me</button>
	<script type="text/javascript">
		function buttonClicked()
		{
			let webRadioButton = document.getElementById("web");
			let mobileRadioButton = document.getElementById("mobile");
			let gameRadioButton = document.getElementById("game");


			if (webRadioButton.checked == true)
			{
				alert("You selected: "+webRadioButton.value);
			}
			else if (mobileRadioButton.checked == true)
			{
				alert("You selected: "+mobileRadioButton.value);
			}
			else if (gameRadioButton.checked == true)
			{
				alert("You selected: "+gameRadioButton.value);
			}
			else
			{
				alert("No course is selected");
			}
		}
	</script>

</body>
</html>









