# Devscale Bootcamp — Assignment 2 (EventMaker API)

This is my Devscale Bootcamp Assignment 2. I built a simple EventMaker API using Hono + Prisma and pnpm.

Repository  
https://github.com/hisyamakbar/hisyamakbar-devscale-assignment-2.git

## Tech
- Hono (HTTP framework)  
- Prisma (ORM)  
- pnpm (package manager)  
- SQLite

## Quick setup
```bash
git clone https://github.com/hisyamakbar/hisyamakbar-devscale-assignment-2.git
cd hisyamakbar-devscale-assignment-2
pnpm install
```

## Environment
Create a `.env` file:
```env
DATABASE_URL="file:./dev.db"
```

## Prisma (generate & migrate)
```bash
pnpm prisma generate
pnpm prisma migrate dev --name init
```

## Run (development)
```bash
pnpm dev
# or
pnpm run dev
```

## Build & Start (production)
```bash
pnpm build
pnpm start
```

## API (examples)
- GET  /events      — list events

## License
MIT
