<!DOCTYPE html>
<html lang="en">

<head>
    <title>Assignment 9 - Wang.kay</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <link href="style.css" rel="stylesheet" />
</head>
<body>

<div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4">Flowers</h1>
    </div>
</div>

<hr>

<?php
$servername = "fdb30.awardspace.net";
$username = "3633571_drawings";
$password = "Dr@wing51";
$database = "3633571_drawings";
$port = "3306";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database, $port);

// Check connection
if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
} 

$sql = "SELECT * FROM products";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
        echo "<div class=\"container\">";
        while($row = $result->fetch_assoc()) {
                echo "<div class=\"row\">";
                echo "<h2>" . $row["p_name"] . "</h2>";
                echo "</div>";
                
                echo "<div class=\"row group\">";
                
                echo "<div class=\"col-lg-4 col-md-6 col-sm-12\">";
                echo "<div class=\"imageCrop\">";
                echo "<img class=\"image\" src=\"" . $row["p_img"] . "\"/>";
                echo "</div>";
                echo "</div>";
                
                echo "<div class=\"col-lg-8 col-md-6 col-sm-12\">";
                echo "<p>" . $row["p_desc"] . "<p/>";
                echo "</div>";
                
                echo "</div>";
        }
        echo "</div>";
               
} 
?>


</body>
</html>





