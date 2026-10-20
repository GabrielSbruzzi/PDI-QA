
const { Builder } = require("selenium-webdriver");
const assert = require("node:assert/strict");

async function executarTeste() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    console.log("Abrindo o site do Selenium...");

    await driver.get("https://www.selenium.dev/");

    const titulo = await driver.getTitle();

    console.log("Titulo encontrado:", titulo);

    assert.ok(
      titulo.toLowerCase().includes("selenium"),
      "O titulo deveria conter a palavra Selenium"
    );

    console.log("TESTE APROVADO: o titulo contem Selenium.");
  } catch (erro) {
    console.error("TESTE FALHOU:", erro.message);
    throw erro;
  } finally {
    await driver.quit();
  }
}

executarTeste().catch(() => {
  process.exitCode = 1;
});
