import audiotest from '../assets/audio/003.mp3';
import audio1 from '../assets/audio/002.mp3';
import audio2 from '../assets/audio/LaVoieDroite.com_ L_épreuve des gens du fossé - Hadith du sorcier et du jeune homme..mp3';

const data = {
  dourous: [
    {
      id: '1co',
      title:
        "La clarification et l'éclaircissement de l'arbre de la foi de l'imam As-si'di (qu'ALLAH lui fasse miséricorde)",
      name: 'Abou houseyfa',
      date: '22/12/2021',
      link: "la-clarification-et-l'éclaircissement-de-l'arbre-de-la-foi-de-l'imam-As-si'di",
      specifyCourt: [
        { id: 1, link: 'le-tawhid', title: 'le tawhid', sound: audiotest },
        {
          id: 2,
          link: "la-seugnerie-d'Allah",
          title: "la seugnerie d'Allah",
          sound: audio2,
        },
      ],
    },
    {
      id: '2co',
      title: 'Le mariage en islam',
      name: 'Abou houseyfa',
      date: '12/01/2022',
      link: 'le-mariage-en-islam',
      specifyCourt: [
        { id: 1, link: 'le-mariage', title: 'le mariage', sound: audio1 },
        {
          id: 2,
          link: 'les-actes-du-mariage',
          title: 'les actes du mariage',
          sound: audio2,
        },
      ],
    },
    {
      id: '3co',
      title: "Les provisions du jeûneur cheminant vers l'agrément du Seigneur",
      name: 'Abou houseyfa',
      date: '22/01/2022',
      link: "les-provisions-du-jeûneur-cheminant-vers-l'agrément-du-Seigneur",
      specifyCourt: [
        {
          id: 4,
          title: "la crainte d'Allah",
          link: "la-crainte-d'Allah",
          sound: audio1,
        },
        {
          id: 5,
          title: "la grace d'Allah",
          link: "la-grace-d'Allah",
          sound: audio2,
        },
      ],
    },
    {
      id: '4co',
      title: 'Les exhortations du mois béni de Ramadan',
      name: 'Abou houseyfa',
      date: '12/12/2021',
      link: 'les-exhortations-du-mois-béni-de-Ramadan',
      specifyCourt: [
        { id: 1, link: 'le-tawhid', title: 'le tawhid', sound: audiotest },
        {
          id: 2,
          link: "la-seugnerie-d'Allah",
          title: "la seugnerie d'Allah",
          sound: audio1,
        },
      ],
    },
    {
      id: '5co',
      title: 'Les provisions du jeûneur (Ramadan 1442/2021)',
      name: 'Abou houseyfa',
      date: '18/12/2021',
      link: 'les-provisions-du-jeûneur',
      specifyCourt: [
        { id: 1, link: 'le-tawhid', title: 'le tawhid', sound: audio2 },
        {
          id: 2,
          link: "la-seugnerie-d'Allah",
          title: "la seugnerie d'Allah",
          sound: audio1,
        },
      ],
    },
    {
      id: '6co',
      title:
        "La clarification et l'éclaircissement de l'arbre de la foi de l'imam As-si'di (qu'ALLAH lui fasse miséricorde)",
      name: 'Abou houseyfa',
      date: '22/12/2021',
      link: "la-clarification-et-l'éclaircissement-de-l'arbre",
      specifyCourt: [
        { id: 1, link: 'le-tawhid', title: 'le tawhid', sound: audio2 },
        {
          id: 2,
          link: "la-seugnerie-d'Allah",
          title: "la seugnerie d'Allah",
          sound: audio1,
        },
      ],
    },
    {
      id: '7co',
      title: 'Le mariage en islam',
      name: 'Abou houseyfa',
      date: '12/01/2022',
      link: 'le-mariage-en-islam',
      specifyCourt: [
        { id: 1, link: 'le-tawhid', title: 'le tawhid', sound: audio2 },
        {
          id: 2,
          link: "la-seugnerie-d'Allah",
          title: "la seugnerie d'Allah",
          sound: audio1,
        },
      ],
    },
    {
      id: '8co',
      title: "Les provisions du jeûneur cheminant vers l'agrément du Seigneur",
      name: 'Abou houseyfa',
      date: '22/01/2022',
      link: "les-provisions-du-jeûneur-cheminant-vers-l'agrément-du-Seigneur",
      specifyCourt: [
        { id: 1, link: 'le-tawhid', title: 'le tawhid', sound: audio2 },
        {
          id: 2,
          link: "la-seugnerie-d'Allah",
          title: "la seugnerie d'Allah",
          sound: audio1,
        },
        { id: 3, link: 'le-tawhid', title: 'le tawhid', sound: audio2 },
        {
          id: 4,
          link: "la-seugnerie-d'Allah",
          title: "la seugnerie d'Allah",
          sound: audio1,
        },
        { id: 5, link: 'le-tawhid', title: 'le tawhid', sound: audio2 },
        {
          id: 6,
          link: "la-seugnerie-d'Allah",
          title: "la seugnerie d'Allah",
          sound: audio1,
        },
      ],
    },
  ],
};
export default data;
