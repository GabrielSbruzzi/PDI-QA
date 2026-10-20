
const { Builder, By } = require("selenium-webdriver");
const assert = require("node:assert/strict");

class HomePage {
  constructor(driver) {
    this.driver = driver;
  }

  async abrir() {
    await this.driver.get("https://www.selenium.dev/");
  }

  async obterTitulo() {
    return await this.driver.getTitle();
  }

  async abrirDocumentacao() {
    const link = await this.driver.findElement(
      By.linkText("Documentation")
    );
    await link.click();
  }
}

async function executarTestePOM() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    const homePage = new HomePage(driver);

    await homePage.abrir();

    const titulo = await homePage.obterTitulo();
    assert.ok(titulo.toLowerCase().includes("selenium"));

    console.log("POM: pagina inicial validada.");

    // A ação abaixo demonstra o uso de um método da página.
    // Execute-a apenas se o link "Documentation" estiver disponível.
    // await homePage.abrirDocumentacao();

  } catch (erro) {
    console.error("Falha no teste POM:", erro.message);
    throw erro;
  } finally {
    await driver.quit();
  }
}

executarTestePOM().catch(() => {
  process.exitCode = 1;
});
