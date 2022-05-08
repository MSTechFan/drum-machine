import guitarChord from '../assets/audio/guitar-chords.wav'
import guitarCool from '../assets/audio/guitar-cool.wav'
import guitarElectrial from '../assets/audio/guitar-electrical.wav'
import guitarNotification from '../assets/audio/guitar-notification.wav'
import guitarQuick from '../assets/audio/guitar-quick.wav'
import guitarRiff from '../assets/audio/guitar-riff.wav'
import guitarStroke from '../assets/audio/guitar-stroke.wav'
import guitarStrum from '../assets/audio/guitar-strum.wav'
import guitarToy from '../assets/audio/guitar-toy.wav'


const audio = document.createElement('audio')

export default function useAudio (url) {
    audio.src = url
    return audio
}