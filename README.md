# AWS Amplify + Next.js 15 (Gen 2)

Este é um projeto **Next.js 15** otimizado para deploy no **AWS Amplify Gen 2**, utilizando **pnpm** e foco em alta performance e estabilidade de build.

## 🚀 Tecnologias

- **Next.js 15** (App Router)
- **React 19**
- **AWS Amplify Gen 2** (Infraestrutura como Código)
- **Tailwind CSS 4**
- **pnpm** (Gerenciador de pacotes)

---

## 🛠️ Soluções Implementadas

### 1. Normalização de Rotas (Trailing Slash)
Para resolver o comportamento padrão do AWS Amplify/S3 que adiciona uma barra final (`/`) às URLs, implementamos uma lógica de normalização no `app/page.tsx` e no componente de `/version`.
- **Problema**: O S3 redireciona `/version` para `/version/`, quebrando validações rígidas de rota.
- **Solução**: Uso do hook `usePathname` com limpeza de caracteres via regex:
  ```tsx
  const normalizedPath = pathname?.replace(/\/$/, '') || '';
  ```

### 2. Otimização de Build (Anti-OOM)
Configuramos o ambiente de build do Amplify para suportar aplicações robustas sem erros de "Out of Memory":
- **Swap de Memória**: Adição de um arquivo de **16GB de Swap** no disco durante o `preBuild` para expandir a RAM disponível.
- **Heap Size**: Aumento do limite de memória do Node.js para **12GB** (`--max-old-space-size=12288`).
- **Cache Inteligente**: Persistência seletiva das pastas `.next/cache` e `node_modules` para builds incrementais rápidos.

---

## 💻 Desenvolvimento Local

Primeiro, instale as dependências:
```bash
pnpm install
```

Inicie o servidor de desenvolvimento:
```bash
pnpm dev
```

Para validar o build de produção exatamente como ele rodará no Amplify:
```bash
pnpm build
```

---

## 🔗 Links Úteis

- **Rota de Versão**: [http://localhost:3000/version](http://localhost:3000/version) (Para testes de normalização de path)
- **Documentação Next.js**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **AWS Amplify Gen 2**: [https://docs.amplify.aws/gen2/](https://docs.amplify.aws/gen2/)

---

## 📝 Licença
Este projeto é privado e de uso restrito.
