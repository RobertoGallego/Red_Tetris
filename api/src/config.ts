import { config } from "dotenv";

config();

export default {
    API_PORT: process.env.PORT,
    MONGO_DATABASE: process.env.MONGO_DATABASE || "localhost",
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_HOST: process.env.MONGO_HOST || "localhost",
};
