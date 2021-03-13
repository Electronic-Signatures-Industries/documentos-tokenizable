import i18n from 'i18next';
import translationES from '../assets/locales/es/isotope.json';
import translationEN from '../assets/locales/en/isotope.json';

const userLanguage = () => navigator.language;

const resources = {
	es: {
		translation: translationES,
	},
	en: {
		translation: translationEN,
	}
};

i18n.init({
	resources,
	lng: userLanguage(),
	fallbackLng: ['es', 'en'],
});

export default i18n;
