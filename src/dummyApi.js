import { TramRounded } from "@mui/icons-material";

export const Apis = [
    {
        id: 'zapi1',
        name: 'Speech Synthesis',
        description: 'Can create same sentence in multiple languages.',
        url: 'https://zapi.com/speech-synthesis-api',
        category: ['AI', 'Speech'],
        subscribers: 10,
        status: true
    },
    {
        id: 'zapi2',
        name: 'Emotion Detector',
        description: 'Can be used to detect changes in facial expression.',
        url: 'https://zapi.com/emotion-detector-api',
        category: ['AI', 'Security'],
        subscribers: 10,
        status: true
    },
    {
        id: 'zapi3',
        name: 'Face Recognition',
        description: 'Can recognize a person by searching through government database.',
        url: 'https://zapi.com/face-recognition-api',
        category: ['AI', 'Security'],
        subscribers: 10,
        status: false
    },
    {
        id: 'zapi4',
        name: 'Weather API',
        description: 'Get latest weather forecast and predictions for 30days>.',
        url: 'https://zapi.com/weather-api',
        category: ['Weather'],
        subscribers: 10,
        status: false
    },
    {
        id: 'zapi5',
        name: 'Textio',
        description: 'An instant messaging API with multimedia support.',
        url: 'https://zapi.com/textio-api',
        category: ['Instant Messaging'],
        subscribers: 10,
        status: true
    },
]