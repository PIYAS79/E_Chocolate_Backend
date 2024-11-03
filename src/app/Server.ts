
import { Server } from "http";
import app from "./App";
import config from "./config";

let server: Server;

function main() {
    server = app.listen(config.server_port, () => {
        console.log(`Server is running on http://localhost:${config.server_port}`);
    })
}

main();


