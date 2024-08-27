import fs from 'node:fs'
import { env } from 'node:process'
import openapi, { astToString } from 'openapi-typescript'

async function generateApiTypes() {
  const apiUrl = env.VITE_API_URL
  const apiPrefix = env.VITE_API_PREFIX
  const apiJsonSuffix = '/docs-json'
  const ast = await openapi(new URL(`${apiPrefix}${apiJsonSuffix}`, apiUrl))
  const contents = astToString(ast)

  fs.writeFileSync('./app/types/api.ts', contents)
}

generateApiTypes()
