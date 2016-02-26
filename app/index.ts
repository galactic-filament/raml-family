/// <reference path="./typings/tsd.d.ts" />
import {Server} from "./src/Server";

Server.app.listen(80, () => { console.log("Listening on 80"); });

let exit = () => process.exit(0);
process.on("SIGTERM", exit);
process.on("SIGINT", exit);
