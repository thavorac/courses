<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  Product List
  @if(count($products) > 0)
    <table style="border:1px solid black;">
      <thead>
        <tr>
          <th>Name</th>
          <th>In stock at</th>
          <th>Price</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        @foreach($products as $product)
        <tr>
          <td>{{$product->name}}</td>
          <td>{{$product->in_stock}}</td>
          <td>{{$product->price}}</td>
          <td><img style="height: 80px;" src="{{$product->image}}" /></td>
        </tr>
        @endforeach
      </tbody>
    </table>
    <a href="/product/form"><button>Create Product</button></a>
  @else
    <p>There are no products in our database!!!</p>
  @endif
</body>
</html>