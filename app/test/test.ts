/// <reference path="../typings/tsd.d.ts" />
import * as request from "supertest";
import * as test from "tape";

test("Hello", (t: test.Test) => {
  t.equal("Hello, world!", "Hello, world!");
  t.end();
});
