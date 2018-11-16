
# GraphQL Example

A basic example demonstrating a server side component and example queries.

## Query

```
query getblog($id: Int!) {
    blog(id: $id) {
      id
      name
    }
}
```

Query Params

```
{
  "id": 0
}
```