import srcPrueba from '../prueba.mp3'

const audio = document.createElement('audio')
audio.src = srcPrueba

export default function useAudio () {
    return audio
}