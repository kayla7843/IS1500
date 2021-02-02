<?php
        $username = $_POST['username'];
        $password = $_POST['password'];
        
        if (strcmp($username, "admin") == 0 && strcmp($password, "pass123") == 0) {
                echo "<p> Success! </p>";
        }
        else {
                echo "<p> Invalid Credentials </p>";
        }

?>