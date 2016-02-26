/// <reference path="../typings/tsd.d.ts" />
import * as supertest from "supertest";
import * as test from "tape";
import {Server} from "../src/Server";

test("Homepage should work", (t: test.Test) => {
  let url = "/";
  supertest(Server.app)
    .get(url)
    .end((err: Error, res: supertest.Response) => {
      t.equal(err, null, `GET ${url} err was not null`);
      t.equal(res.status, 200, `GET ${url} response status was not 200`);
      t.end();
    });
});

test("Music schema should work", (t: test.Test) => {
  let url = "/music";
  supertest(Server.app)
    .get(url)
    .end((err: Error, res: supertest.Response) => {
      t.equal(err, null, `GET ${url} err was not null`);
      t.equal(res.status, 200, `GET ${url} response status was not 200`);
      t.end();
    });
});
