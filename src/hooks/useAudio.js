const audio = document.createElement('audio')
audio.src = ''

export default function useAudio () {
    console.log('estoy sonando')
    return audio.play()
}