# apps/backend/Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN pnpm install
CMD ["node", "index.js"]
