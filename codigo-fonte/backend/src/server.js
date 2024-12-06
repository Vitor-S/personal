const express = require("express");
const cors = require("cors");
const UserRoutes = require('./routes/UserRoutes');
const ExerciseRoutes = require('./routes/ExerciseRoutes');
const ProgramRoutes = require('./routes/ProgramRoutes');
const WorkoutRoutes = require('./routes/WorkoutRoutes');

const app = express();

// Config JSON response
app.use(express.json());
app.use(cors())

//Solve CORS
// app.use(
//   cors({
//     origin: "http://localhost:8081", // Substitua pela URL do seu front-end
//     methods: ["GET", "POST", "PUT", "DELETE"], // Inclua todos os métodos que você quer permitir
//   })
// );
// Public folder for images
app.use(express.static("public"));

// Adicionar os cabeçalhos Access-Control-Allow-Origin
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// Healthcheck endpoint
app.get('/healthcheck', (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Backend is running",
        timestamp: new Date().toISOString(),
    });
});

// Routes
app.use('/users', UserRoutes);
app.use('/', ExerciseRoutes);
app.use('/', ProgramRoutes);
app.use('/', WorkoutRoutes);

const PORT = 3333;
app.listen(PORT, '0.0.0.0', function () {
    console.log(`Server is running on Port ${PORT}`);
});


// const https = require('https');
// const fs = require('fs');
// const express = require("express");
// const cors = require("cors");

// const app = express();

// // Config JSON response
// app.use(express.json());

// // Solve CORS
// app.use(cors({
//   origin: "https://seu-frontend-dominio.com", // Use um domínio seguro
//   methods: ["GET", "POST", "PUT", "DELETE"],
// }));

// // Certificados SSL
// const options = {
//   key: fs.readFileSync('/caminho/para/privkey.pem'),
//   cert: fs.readFileSync('/caminho/para/fullchain.pem'),
// };

// // Rotas e Configurações
// app.get('/healthcheck', (req, res) => {
//   res.status(200).json({ status: "OK" });
// });

// // Porta HTTPS
// const PORT = 443; // HTTPS usa a porta 443 por padrão
// https.createServer(options, app).listen(PORT, () => {
//   console.log(`Server running securely on https://100.27.33.200:${PORT}`);
// });
