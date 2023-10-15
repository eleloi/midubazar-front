import type { Product } from "@/types"

const URL = import.meta.env.URL

export async function searchProducts({ q }: { q: string | null }) {
  if (!q) return Promise.resolve([])
  const res = await fetch(`${URL}/api/items?q=${q}`, {
    headers: {
      Accept: "application/json",
    },
  })
  return (await res.json()) as Product[]
}
