import { Button } from '@/components/ui/button'
import { type PostType, usePosts } from './hooks'

export const TopPage = () => {
  const { data, isLoading } = usePosts()
  if (isLoading) return <></>
  return (
    <div className={`container py-8`}>
      <div className="mb-4">
        <Button>button</Button>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {data.map((i: PostType) => {
          return (
            <div key={i.id}>
              <p>{i.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
