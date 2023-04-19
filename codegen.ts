import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  debug: true,
  verbose: true,
  schema: 'https://api-dev.plazaticket.com/public/graphql',
  documents: 'src/render/**/*.graphql',
  generates: {
    'src/render/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request'
      ]
    }
  }
}

export default config
