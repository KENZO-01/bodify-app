FROM node:20

# Install pnpm globally
RUN npm install -g pnpm

COPY . /app
WORKDIR /app

# Install dependencies using pnpm
RUN pnpm install
RUN pnpm run build

CMD ["pnpm", "run", "dev"]
