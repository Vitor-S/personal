const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());

app.use(express.json());


// const PORT = 3333;
// app.listen(PORT, function () {
//   console.log(`Server is running on Port ${PORT}`);
// });


const PORT = 3333;
app.listen(PORT, function () {
  console.log(`Server is running on Port ${PORT}`);
});
// const express = require("express");
// const cors = require("cors");

// const app = express();

// // Configurar CORS para permitir requisições do frontend
// app.use(cors({
//     origin: '*', // Permitir todas as origens para teste (altere para um domínio específico em produção)
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
// }));

// app.use(express.json());

// // Rota de teste
// app.get("/api/test", (req, res) => {
//     res.json({ message: "Hello from Backend!" });
// });

// // Porta do backend
// const PORT = 3333;
// app.listen(PORT, '100.27.33.200', () => {
//     console.log(`Server is running on http://100.27.33.200:${PORT}`);
// });
