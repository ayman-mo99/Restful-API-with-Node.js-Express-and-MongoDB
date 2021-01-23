# Restful-API-with-Node.js-Express-and-MongoDB
This is a simple restful API using node, express and MongoDB where we make the four CRUD operations for two different collections in mongoDB 
## Technologies
* Node v12
* Express 4.x
* MongoDB (MongoDB Atlas)

## TEST
online : https://api-for-usersandposts.herokuapp.com/
or run local on port 4000
<br />

## Launch
To run the server side<br />
`npm run server`<br />
## Available end-points
### first : /api/user<br />
<pre>
* http verb:post     /login       (return token called auth-token)
* http verb:post     /register     (return token called auth-token)
* http verb:put     /update/:id     (use the token called auth-token)
* http verb:delete     /delete/:id     (use the token called auth-token)
* http verb:get     /myposts/:id<br />
<pre>

### second : /api/post<br />
<pre>
* http verb:get     /
* http verb:post     /add     (use the token called auth-token)
* http verb:put     /edite/:id     (use the token called auth-token)
* http verb:delete     /delete/:id     (use the token called auth-token)<br />
<pre>

## Schemas used 
* <pre>UserSchema: {
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "post",
      required: true,
      default: [],
    },
  ],
}
<pre>

<br />----
* <pre> PostSchema : {
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
  },
  discription: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
    required: true,
  },
}
<pre>

<br />

## notes
You have to create .env file and set your DB link and JWT secert 

## Inspiration
These tutorials helped me:<br />
* (https://www.youtube.com/watch?v=0oXYLzuucwE&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q)
* (https://www.youtube.com/watch?v=SnoAwLP1a-0&list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp)

