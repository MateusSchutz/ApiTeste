
# 🧩 Projeto CRUD de Usuários com API REST, Front-End, Testes e Monitoramento

Este projeto foi desenvolvido com o objetivo de demonstrar o uso de uma **API REST** integrada com um **formulário web**, **testes automatizados com Playwright**, **testes de carga com K6** e **monitoramento via Grafana**.

---

## 📌 Funcionalidades

- ✅ API REST com **GET**, **POST**, **PUT** e **DELETE**
- ✅ Front-end com formulário para **cadastro, edição e exclusão** de usuários
- ✅ Testes de carga com **K6**
- ✅ Dashboard no **Grafana** para visualizar os resultados
- ✅ Testes funcionais com **Playwright** diretamente no front-end

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| Python + Flask | Backend da API |
| HTML + JS | Front-end funcional |
| CSS Retro | Estilo visual inspirado em jogos |
| K6 | Testes de carga |
| Playwright | Testes funcionais automáticos |
| Grafana | Visualização de métricas de testes |

---

## 🔧 Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instalar dependências

Instale o Flask:

```bash
pip install flask flask-cors
```

Instale o Playwright:

```bash
npm install
npx playwright install
```

### 3. Rodar a API

```bash
python api.py
```

A API rodará em: `http://localhost:5000/usuarios`

### 4. Abrir o Front-End

Abra o `index.html` ou `make.css` no navegador. Eles consomem a API para realizar as operações.

---

## 📈 Testes de Carga com K6

### Executar teste:

```bash
k6 run teste_k6.js
```

Esse script realiza chamadas **POST**, **GET**, **PUT** e **DELETE**.

### Monitoramento via Grafana:

- Use o [K6 Cloud](https://k6.io/cloud/) ou configure um [Data Source do InfluxDB](https://grafana.com/docs/grafana/latest/datasources/influxdb/) para visualizar os resultados.
- Exporte o dashboard em JSON ou tire um print para fins de entrega.

---

## ✅ Testes com Playwright

### Rodar os testes:

```bash
npx playwright test
```

O arquivo `test.spec.ts` realiza testes diretamente no front-end, validando o comportamento de cadastro, edição e exclusão de usuários.

---

## 📁 Estrutura de Arquivos

```
├── api.py               # API REST com Flask
├── index.html           # Front-end funcional
├── make.css             # Estilo visual do formulário
├── teste_k6.js          # Script de testes de carga (K6)
├── test.spec.ts         # Testes funcionais com Playwright
├── package.json         # Dependências do Node/Playwright
├── package-lock.json    # Lockfile do NPM
```

---

## 👨‍💻 Autor

**Mateus Fernando Schutz Correia**  
Aluno de Engenharia de Software  
Centro Universitário Católica de Santa Catarina

---

## 📜 Licença

Este projeto é apenas para fins educacionais e acadêmicos.
