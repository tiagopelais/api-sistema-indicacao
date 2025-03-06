import { redis } from '../redis/client'

interface GetSubscriberInvitesCountParams {
  subscriberId: string
}

export async function getSubscriberRankPosition({
  subscriberId,
}: GetSubscriberInvitesCountParams) {
  const rank = await redis.zrevrank('referral:ranking', subscriberId)

  if (rank === null) {
    return { position: null }
  }

  return { position: rank + 1 }
}
