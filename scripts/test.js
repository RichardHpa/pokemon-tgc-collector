const spawnSync = require("child_process").spawnSync;

const styles = {
  success: { open: "\u001b[32;1m", close: "\u001b[0m" },
  danger: { open: "\u001b[31;1m", close: "\u001b[0m" },
  info: { open: "\u001b[36;1m", close: "\u001b[0m" },
  subtitle: { open: "\u001b[2;1m", close: "\u001b[0m" },
};

function color(modifier, string) {
  return styles[modifier].open + string + styles[modifier].close;
}
console.log(color("info", "▶️  Starting pre commit..."));

const error = spawnSync("npx --version", { shell: true })
  .stderr.toString()
  .trim();
if (error) {
  console.error(
    color(
      "danger",
      "🚨  npx is not available on this computer. Please install npm@5.2.0 or greater"
    )
  );
  throw error;
}

const command = `npx concurrently --kill-others-on-fail --prefix "[{name}]" --names "test,lint,typecheck,build"   --prefix-colors "bgRed.bold.white,bgGreen.bold.white,bgBlue.bold.white,bgMagenta.bold.white" "npm run test --silent -- --watch=false" "npm run lint --silent" "npm run typecheck --silent" "npm run build --silent"`;
console.log(color("subtitle", "      Running commands"));

const result = spawnSync(command, { stdio: "inherit", shell: true });
if (result.status === 0) {
  console.log(color("success", "✅  Pre commit complete"));
} else {
  console.clear();
  console.log(result);
  // process.exit(resuxlt.status);
}
