import { redis } from '../redis/client'

interface GetSubscriberInviteClicksParams {
  subscriberId: string
}

export async function getSubscriberInviteClicks({
  subscriberId,
}: GetSubscriberInviteClicksParams) {
  const count = await redis.hget('referrer:access-count', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
