import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import rateLimiter from "./middleware/rateLimiter.js";
import { sql } from "./config/db.js";
import transactionsRoute from "./routes/transactionsRoute.js";
import job from "./config/cron.js";

dotenv.config();

const app = express();

if (process.env.NODE_ENV === "production") job.start();

//middleware
app.use(cors());
app.use(rateLimiter); // Temporarily disabled for testing
app.use(express.json()); // ✅ needed for req.body

const PORT = process.env.PORT;

async function initDB() {
    try {
        await sql`CREATE TABLE IF NOT EXISTS transactions(
            id SERIAL PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            amount NUMERIC(10,2) NOT NULL, -- ✅ fixed datatype
            category VARCHAR(255) NOT NULL,
            created_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`;

        console.log("Database initialized successfully");
    } catch (error) {
        console.log("Error initializing", error);
        process.exit(1);
    }
}

//app.get("/", (req, res) => {
 // res.send("It's working");
//});


app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});



app.use("/api/transactions", transactionsRoute);

initDB().then(() => {
    app.listen(PORT, (err) => {
        if (err) {
            console.error("Error starting server:", err);
            process.exit(1);
        }
        console.log("Server is running at PORT:", PORT);
    });
});
