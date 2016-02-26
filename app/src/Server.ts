/// <reference path="../typings/tsd.d.ts" />
import * as express from "express";
import * as fs from "fs";
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
    // resolving the schema name
    let schema = req.params.file;
    if (typeof schema === "undefined") {
      schema = "schema";
    }

    // checking if it exists
    let filepath = `./schemas/${schema}.raml`;
    fs.stat(filepath, ((err, stats) => {
      if (err) {
        if (err.code === "ENOENT") {
          res.status(404).send({});
          return;
        }

        res.status(500).send(JSON.stringify(err));
        return;
      }

      render(res, filepath);
    }));
  });
}
