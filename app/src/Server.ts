/// <reference path="../typings/tsd.d.ts" />
import * as express from "express";
let raml2html = require("raml2html");

export namespace Server {
  // misc
  let configWithDefaultTemplates = raml2html.getDefaultConfig();
  let render = (res: express.Response, path: string) => {
    raml2html.render(path, configWithDefaultTemplates).then(
      (result) => res.send(result),
      (err: Error) => res.send(err)
    );
  };

  // express server
  export let app = express();
  app.get("/:file?", (req, res) => {
    let schema = req.params.file;
    if (typeof schema === "undefined") {
      schema = "schema";
    }
    render(res, `../schemas/${schema}.raml`);
  });
}
