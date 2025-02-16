### Prisma

npm i -D prisma @prisma/client
npx prisma init

// Add Prisma formatter configuration in User Settings(JSON)
"[prisma]": {
"editor.defaultFormatter": "Prisma.prisma",
"editor.formatOnSave": true
},

//in package.json file for server run:
"postinstall": "prisma generate"

// for local
npx prisma generate

//run migration: like git
npm prisma migrate dev --name init --> note: "init" here is name representing , we initiated the repo.

//to check Database
npx prisma studio

// to run seed file:
npx tsx ./db/seed

//Neon Configurations
npm i @neondatabase/serverless @prisma/adapter-neon ws

npm i -D @types/ws bufferutil

add previewFeatures = ["driverAdapters"] in prisma/schema.prisma
generator client {
provider = "prisma-client-js"
previewFeatures = ["driverAdapters"]
}
