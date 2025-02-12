import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/stateless-add", (c) => {
  const x = +(c.req.query("x") || 0);
  if (isNaN(x)) {
    return c.text("Invalid x");
  }

  const y = +(c.req.query("y") || 0);
  if (isNaN(y)) {
    return c.text("Invalid y");
  }

  const result = x + y;
  return c.json({ result });
});

let zustand = 0;

app.get("/add", (c) => {
  // const y = +(c.req.query("y") || 0);
  // if (isNaN(y)) {
  //   return c.text("Invalid y");
  // }
  zustand += 2;
  const result = zustand;
  return c.json({ result });
});

app.get("/reset", (c) => {
  zustand = 0;
  return c.json({ zustand });
});

export default app;
