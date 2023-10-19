import type { Product } from "@/types"

const URL = import.meta.env.API_URL

export async function searchProducts({ q }: { q: string | null }) {
  if (!q) return Promise.resolve([])
  const res = await fetch(`${URL}/api/items?q=${q}`, {
    headers: {
      Accept: "application/json",
    },
  })
  return (await res.json()) as Product[]
}

export async function productDetail({ id }: { id: string | undefined }) {
  if (!id) return Promise.resolve(null)
  try {
    const res = await fetch(`${URL}/api/items/${id}`, {
      headers: {
        Accept: "application/json",
      },
    })
    return (await res.json()) as Product
  } catch (error) {
    return null
  }
}
