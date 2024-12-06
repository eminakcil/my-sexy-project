# apps/frontend/Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN pnpm install && pnpm build
CMD ["pnpm", "start"]
