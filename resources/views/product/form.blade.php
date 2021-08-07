<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h3>Product Form</h3>
  <form action="/product/form" method="POST">
    {{ csrf_field() }}
    <label>Name</label>: <input name="name" type="text" /> <br/>
    <label>In Stock</label>: <input name="in_stock" type="text" /> <br/>
    <label>Price</label>: <input name="price" type="text" /> <br/>
    <label>Image</label>: <input name="image" type="text" /> <br/>
    <button type="submit">Submit</button>
  </form>
</body>
</html>