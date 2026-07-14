FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY src ./src

ENV LUCAS_BRAIN_ROOT=/brain
ENV HOST=0.0.0.0
ENV PORT=7337
ENV NODE_ENV=production
ENV WATCH=false

EXPOSE 7337

# Mount playbooks at /brain (folders 01-12)
CMD ["node", "src/index.http.js"]
