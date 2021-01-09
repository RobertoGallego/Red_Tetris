import app from "app/app";
import "app/database";

app.listen(app.get("port"), () => {
    console.log("\x1b[32m" + "Server on port " + app.get("port") + "\x1b[0m");
});
