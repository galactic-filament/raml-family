/// <reference path="./typings/index.d.ts" />
import {Server} from "./src/Server";

Server.app.listen(8080, () => { console.log("Listening on 8080"); });

let exit = () => process.exit(0);
process.on("SIGTERM", exit);
process.on("SIGINT", exit);
