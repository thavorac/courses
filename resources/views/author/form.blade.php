<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Create Author</title>
</head>
<body>
  <h3>Author Form</h3>
  <form action="/author/form" method="POST">
    {{ csrf_field() }}
    <label>Name</label>: <input name="name" type="text" /> <br/>
    <button type="submit">Submit</button>
  </form>
</body>
</html>