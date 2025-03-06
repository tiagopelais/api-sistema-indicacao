import { tool } from 'ai'
import z from 'zod'
import { redis } from '../../redis/client'

export const redisTool = tool({
  description: `
        Realize um comando no Redis para buscar informações sobre o sistema de indicação como número de cliques , numero de indicações (convites) e ranking de indicações.
        Só pode ser utilizada para buscar dados do Redis, não é permitido qualquer comando de escrita.

        Você pode buscar dados de:
        - um hash chamado "referrer:access-count" que guarda o número de cliques/acessos no link de convite/indicação de cada usuário no formato { "SUBSCRIBER_ID: NUMERO_DE_CLIQUES" } onde o SUBSCRIBER_ID vemd o Postgres.
        - um zset chamado "referral:ranking" que guarda o total de convites/indicações feitos por cada usuário onde o score é a quantidade de convites/indicações e conteúdo é o SUBSCRIBER_ID que vem do Postgres.

        Todas as operações devem retornar um máximo de 50 itens.
    `.trim(),
  parameters: z.object({
    command: z
      .string()
      .describe(
        'O comando a ser executado no Redis como GET, WGET, ZREVREANGE '
      ),
    args: z
      .array(z.string())
      .describe('Argumentos que vem logo após o comando do Redis'),
  }),
  execute: async ({ command, args }) => {
    console.log(command, args)

    const result = await redis.call(command, args)

    return JSON.stringify(result)
  },
})
