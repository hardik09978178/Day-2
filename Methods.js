<!DOCTYPE html>
<html>
	<body>

		<h1>JavaScript CompilerResponse</h1>

		<script>
			let arr = ["I", "go", "home"]; delete arr[1]; // remove "go" alert( arr[1] ); // undefined // now arr = ["I", , "home"]; alert( arr.length );
			arr.splice(1, 1);
			let removed = arr.splice(0, 2); alert( removed );
		</script>
	</body>
</html>