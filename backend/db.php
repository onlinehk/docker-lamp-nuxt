<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>LAMP - Docker</title>
</head>

<body>
	<h1>LAMP - Docker</h1>
	<?php
	// 定義數據庫連接參數
	$servername = "mysql";
	$username = "root";
	$password = "admin";
	$dbname = "testdb";

	// 建立數據庫連接
	$conn = mysqli_connect($servername, $username, $password, $dbname);

	// 執行 SELECT 查詢
	$sql = "SELECT * FROM people";
	$result = mysqli_query($conn, $sql);

	// 檢查查詢結果是否有數據
	if (mysqli_num_rows($result) > 0) {
		// 輸出每一行數據
		while ($row = mysqli_fetch_assoc($result)) {
			foreach ($row as $key => $value) {
				echo $key . ": " . $value . "<br />";
			}
			echo "<hr />";
		}
	} else {
		echo "0 results";
	}

	// 關閉數據庫連接
	mysqli_close($conn);
	?>
</body>

</html>