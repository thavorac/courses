<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Create Post</title>
</head>
<body>
  <h3>Post Form</h3>
  <form action="/post/form" method="POST">
    {{ csrf_field() }}
    <label>Author ID</label>: <input name="author_id" type="text" value="{{$author_id}}"/> <br/>
    <label>Title</label>: <input name="title" type="text" /> <br/>
    <button type="submit">Submit</button>
  </form>
</body>
</html>