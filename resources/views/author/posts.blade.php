<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>List Posts</title>
  <style>
    td {
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <h3>All posts belong to author {{ $author->name }}</h3>
  @if(count($posts) > 0)
    <table style="border:1px solid black;">
      <thead>
        <tr>
          <th>Title</th>
          <th>Created at</th>
        </tr>
      </thead>
      <tbody>
        @foreach($posts as $post)
        <tr>
          <td>{{$post->title}}</td>
          <td>{{$post->created_at}}</td>
        </tr>
        @endforeach
      </tbody>
    </table>
  @else
    <p>There are no posts in our database!!!</p>
  @endif
  <a href="/post/form?author_id={{$author->id}}"><button>Create Post</button></a>
</body>
</html>