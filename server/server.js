const io = require("socket.io")(8080, {
  cors: {
    origin: "http://127.0.0.1:5173/",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("connected");
});
