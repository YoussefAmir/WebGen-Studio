<html>
<body>


<?php

if(isset($_POST['submit'])){
  $conn = new mysqli('localhost',$_POST['username'] , $_POST['password'], 'webgen');

  if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
  }

  if($_FILES['csv_data']['name']){

    $arrFileName = explode('.',$_FILES['csv_data']['name']);
    if($arrFileName[1] == 'csv'){
      $handle = fopen($_FILES['csv_data']['tmp_name'], "r");
      while (($item = fgetcsv($handle, 1000, ",")) !== FALSE) {


        $import="INSERT into info(client, deal, hour, accepted, refused) values('$item[0]','$item[1]','$item[2]','$item[3]','$item[4]')";
        mysqli_query($conn,$import);

      }
      fclose($handle);
      echo "Import done";
    }
    else{
      echo "fail";
    }
  }
} ?>


  <form method='POST' enctype='multipart/form-data'>
  MySQL UserName: <input type="text" name="username" />
  MySQL Password: <input type="text" name="password" />
  <br> <br>
  Upload CSV FILE: <input type='file' name='csv_data' /> <input type='submit' name='submit' value='Upload File' />
  </form>

<?php
if(isset($conn)){
    $sqlSelect = "SELECT * FROM info";
    $result = mysqli_query($conn,$sqlSelect);
    }

if (! empty($result)) {
?>

    <table class='tutorial-table'  style="margin-top:  30px;">
        <thead>
            <tr>
                <th>Client</th>
                <th>Deal</th>
                <th>Hour</th>
                <th>Accepted</th>
                <th>Rejected</th>

            </tr>
        </thead>
<?php
    foreach ($result as $row) {
?>
        <tbody style="text-align: center">
        <tr>
            <td><?php  echo $row['client']; ?></td>
            <td><?php  echo $row['deal']; ?></td>
            <td><?php  echo $row['hour']; ?></td>
            <td><?php  echo $row['accepted']; ?></td>
            <td><?php  echo $row['refused']; ?></td>
        </tr>
<?php
    }
?>
        </tbody>
    </table>
<?php
}
?>
</body>

</html>
