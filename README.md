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
* http verb:post  &nbsp;&nbsp;   /login    &nbsp;&nbsp;   (return token called auth-token)
* http verb:post   &nbsp;&nbsp;  /register   &nbsp;&nbsp;  (return token called auth-token)
* http verb:put   &nbsp;&nbsp;  /update/:id  &nbsp;&nbsp;   (use the token called auth-token)
* http verb:delete   &nbsp;&nbsp;  /delete/:id   &nbsp;&nbsp;  (use the token called auth-token)
* http verb:get &nbsp;&nbsp;    /myposts/:id<br />

### second : /api/post<br />
* http verb:get  &nbsp;&nbsp;   /
* http verb:post  &nbsp;&nbsp;   /add   &nbsp;&nbsp;  (use the token called auth-token)
* http verb:put   &nbsp;&nbsp;  /edite/:id   &nbsp;&nbsp;  (use the token called auth-token)
* http verb:delete   &nbsp;&nbsp;  /delete/:id   &nbsp;&nbsp;  (use the token called auth-token)<br />

## Schemas used 
* UserSchema: { <br />
  email: { <br /> 
    type: String, <br /> 
    required: true, <br />
  }, <br />
  password: { <br />
    type: String, <br />
    required: true, <br />
  },
  posts: [ <br />
    { <br />
      type: mongoose.SchemaTypes.ObjectId, <br />
      ref: "post", <br />
      required: true, <br />
      default: [], <br />
    }, <br />
  ], <br />
} <br />

<br />----

* PostSchema : { <br />
  name: { <br />
    type: String, <br />
    required: true, <br />
  }, <br />
  path: { <br />
    type: String, <br />
  }, <br />
  discription: { <br />
    type: String, <br />
  }, <br />
  likes: { <br />
    type: Number, <br />
    default: 0, <br />
  },
  createdBy: { <br />
    type: mongoose.SchemaTypes.ObjectId, <br />
    ref: "user", <br />
    required: true, <br />
  }, <br />
} <br />

<br />

## notes
You have to create .env file and set your DB link and JWT secert 

## Inspiration
These tutorials helped me:<br />
* (https://www.youtube.com/watch?v=0oXYLzuucwE&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q)
* (https://www.youtube.com/watch?v=SnoAwLP1a-0&list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp)

