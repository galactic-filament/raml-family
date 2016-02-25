/// <reference path="./typings/tsd.d.ts" />
import * as express from "express";
let _ = require("underscore");
let raml2html = require("raml2html");
let merge = require("merge");

let configWithDefaultTemplates = raml2html.getDefaultConfig();

let render = (res: express.Response, path: string) => {
  raml2html.render(path, configWithDefaultTemplates).then(
    (result) => res.send(result),
    (err: Error) => res.send(err)
  );
};

let pickNonfalsy = _.partial(_.pick, _, _.identity);

let app = express();
app.get("/:file?", (req, res) => {
  let params = merge({ file: "schema" }, pickNonfalsy(req.params));
  render(res, `./${params.file}.raml`);
});

let server = app.listen(80, () => console.log("Listening on 80"));
let exit = () => process.exit(0);
process.on("SIGTERM", exit);
process.on("SIGINT", exit);
