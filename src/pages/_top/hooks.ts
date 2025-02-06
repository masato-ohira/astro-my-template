import useSWR from 'swr'

export type PostType = {
  userId: number
  id: number
  title: string
  body: string
}

const fetcher = async (path: string) => {
  const res = await fetch(path)
  const json = await res.json()
  return json
}

export const usePosts = () => {
  const res = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  return res
}
