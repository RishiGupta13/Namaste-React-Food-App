import { Image, Shimmer } from 'react-shimmer'

export const Shimer=()=> {
  return (
    <div>
      <Image
        src='https://source.unsplash.com/random/800x600'
        fallback={<Shimmer width={800} height={600} />}
      />
    </div>
  )
}