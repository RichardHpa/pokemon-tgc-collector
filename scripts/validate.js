const styles = {
  success: { open: "\u001b[32;1m", close: "\u001b[0m" },
  danger: { open: "\u001b[31;1m", close: "\u001b[0m" },
  info: { open: "\u001b[36;1m", close: "\u001b[0m" },
  subtitle: { open: "\u001b[2;1m", close: "\u001b[0m" },
};

function color(modifier, string) {
  return styles[modifier].open + string + styles[modifier].close;
}

const concurrently = require("concurrently");

console.log(color("info", "▶️  Starting pre commit..."));

const { result } = concurrently(
  [
    { command: "npm run lint --silent", name: "lint" },
    { command: "npm run test --silent -- --watch=false", name: "test" },
    { command: "npm run typecheck", name: "typecheck" },
    { command: "npm run build --silent", name: "build" },
  ],
  {
    prefix: "name",
    killOthers: ["failure"],
    prefixColors:
      "bgRed.bold.white,bgGreen.bold.white,bgBlue.bold.white,bgMagenta.bold.white",
  }
);
result
  .then((res) => {
    console.log(color("success", "✅  Pre commit complete"));
  })
  .catch((err) => {
    console.error(color("danger", "🚨 Something needs fixing 🚨"));
  });
