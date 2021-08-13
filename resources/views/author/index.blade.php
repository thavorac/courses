<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>List Authors</title>
  <style>
    td {
      border: 1px solid black;
    }
  </style>
</head>
<body>
  @if(count($authors) > 0)
    <table style="border:1px solid black;">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Nationalities</th>
          <th>Created at</th>
        </tr>
      </thead>
      <tbody>
        @foreach($authors as $author)
        <tr>
          <td><a href="/authors/{{$author->id}}/posts">{{$author->name}}</a></td>
          <td>{{$author->phone!=null?$author->phone->number:''}}</td>
          <td>
            @foreach($author->nationalities as $nationality)
              {{$nationality->nationality}},
            @endforeach
          </td>
          <td>{{$author->created_at}}</td>
        </tr>
        @endforeach
      </tbody>
    </table>
  @else
    <p>There are no authors in our database!!!</p>
  @endif
  <a href="/author/form"><button>Create Author</button></a>
</body>
</html>