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
    switch (url) {
        case 'guitarChord':
            audio.src = guitarChord
            break;
        case 'guitarCool':
            audio.src = guitarCool
            break;
        case 'guitarElectrial':
            audio.src = guitarElectrial
            break;
        case 'guitarNotification':
            audio.src = guitarNotification
            break;    
        case 'guitarQuick':
            audio.src = guitarQuick
            break;
        case 'guitarRiff':
            audio.src = guitarRiff
            break;
        case 'guitarStroke':
            audio.src = guitarStroke
            break;
        case 'guitarStrum':
            audio.src = guitarStrum
            break;
        case 'guitarToy':
            audio.src = guitarToy
            break;
    
        default:
            break;
    }
    return audio
}