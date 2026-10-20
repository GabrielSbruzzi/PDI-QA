
const { Builder, By } = require("selenium-webdriver");
const assert = require("node:assert/strict");

class SeleniumPage {
  constructor(driver) {
    this.driver = driver;
  }

  async abrirPaginaInicial() {
    await this.driver.get("https://www.selenium.dev/");
  }

  async abrirDocumentacao() {
    const link = await this.driver.findElement(
      By.linkText("Documentation")
    );
    await link.click();
  }

  async obterUrl() {
    return await this.driver.getCurrentUrl();
  }
}

async function executarTeste() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    const pagina = new SeleniumPage(driver);

    await pagina.abrirPaginaInicial();
    await pagina.abrirDocumentacao();

    const url = await pagina.obterUrl();

    console.log("URL atual:", url);

    assert.ok(
      url.toLowerCase().includes("documentation"),
      "A URL deveria indicar a pagina de documentacao"
    );

    console.log("TESTE APROVADO: a documentacao foi aberta.");
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
