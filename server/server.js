const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("send-changes", (delta) => {
    console.log(delta);
    socket.broadcast.emit("recieve-changes", delta);
  });
  // console.log("a user connected");
});

http.listen(3001, () => {
  console.log("listening on *:3001");
});

// const mongoose = require("mongoose");
// const Document = require("./Document");

// mongoose.connect("mongodb://localhost/google-docs-clone", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// });

// const io = require("socket.io")(3001, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });

// const defaultValue = "";

// io.on("connection", (socket) => {
//   socket.on("get-document", async (documentId) => {
//     const document = await findOrCreateDocument(documentId);
//     socket.join(documentId);
//     socket.emit("load-document", document.data);

//     socket.on("send-changes", (delta) => {
//       socket.broadcast.to(documentId).emit("receive-changes", delta);
//     });

//     socket.on("save-document", async (data) => {
//       await Document.findByIdAndUpdate(documentId, { data });
//     });
//   });
// });

// async function findOrCreateDocument(id) {
//   if (id == null) return;

//   const document = await Document.findById(id);
//   if (document) return document;
//   return await Document.create({ _id: id, data: defaultValue });
// }
