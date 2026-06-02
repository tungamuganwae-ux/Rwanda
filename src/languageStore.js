import { ref } from 'vue'

const savedLanguage = localStorage.getItem('selectedLanguage')
const supportedLanguages = ['en', 'fr', 'rw']

export const currentLanguage = ref(
  supportedLanguages.includes(savedLanguage) ? savedLanguage : 'en'
)

export function setLanguage(lang) {
  if (!supportedLanguages.includes(lang)) return
  currentLanguage.value = lang
  localStorage.setItem('selectedLanguage', lang)
}
