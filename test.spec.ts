import { test, expect } from '@playwright/test';

const usuarios = [
  { nome: 'Usuário A', email: 'a@teste.com' },
  { nome: 'Usuário B', email: 'b@teste.com' },
  { nome: 'Usuário C', email: 'c@teste.com' },
  { nome: 'Usuário D', email: 'd@teste.com' },
];

usuarios.forEach(({ nome, email }) => {
  test(`Cadastrar usuário ${nome}`, async ({ page }) => {
    await page.goto('http://localhost:5500/index.html');
    await page.fill('#nome', nome);
    await page.fill('#email', email);
    await page.click('button');
    await page.waitForSelector(`ul li:has-text("${nome}")`, { timeout: 5000 });
    const texto = await page.textContent('ul');
    expect(texto).toContain(nome);
  });
});
