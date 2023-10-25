import { isPlaying, currentTrack } from './state'

export default function Record({
  albumId,
  title,
  imageUrl,
}: {
  albumId: string
  title: string
  imageUrl: string
}) {
  const isPlayingCurrentRecord =
    isPlaying.value && currentTrack.value?.albumId === albumId


  return (
    <div class="relative shadow-xl mr-32 w-72 md:w-auto">
      <img
        src={imageUrl}
        alt={title}
        width="400"
        height="400"
        class="block rounded-md tag-album-cover relative z-10 bg-white aspect-square"
        style={`view-transition-name: record-${albumId};`}
      />
      <img
        src="/vynil-lp.webp"
        width="400"
        height="400"
        class='absolute top-0 opacity-0 vynil-image vynil-animation-in-spin'
        style={`view-transition-name: vinyl-${albumId};`}
      />
    </div>
  )
}
