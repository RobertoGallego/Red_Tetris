import mongoose, { ConnectionOptions } from "mongoose";

import config from "app/config";

( async () => {
    try {
        const mongooseOptions: ConnectionOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            authSource: "admin",
            user: config.MONGO_USER,
            pass: config.MONGO_PASSWORD,
        };

        const db = await mongoose.connect(
            // local mongoose
            // `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,

            // mongoose atlas
            `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.z8jjj.mongodb.net/${config.MONGO_DATABASE}?retryWrites=true&w=majority`,
            mongooseOptions
        );

            console.log("\x1b[33m" + "Database connected" + "\x1b[0m");
        } catch (error) {
            console.error(error);
        }
})();
