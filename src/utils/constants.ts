import { Course, Review } from '../types';

export const COURSES: Course[] = [
  {
    id: 5,
    title: 'AI pamati nākotnei',
    description:  
      'Izpētiet mākslīgā intelekta konceptus un pielietojumus. Sagatavojieties nākotnei ar modernām zināšanām un prasmēm.',
    icon: 'Brain',
    duration: '10 nedēļu kurss | 1 nodarbība nedēļā',
    certificate: 'Starptautisks sertifikāts',
    price: '60 € mēnesī',
    ageRange: '9-17 gadi',
    startDays: 2
  },
  {
    id: 4,
    title: 'Datorpratība un Drošība',
    description:
      'Attīstiet būtiskās datoru prasmes un iemācieties droši pārvietoties digitālajā vidē. Piemērots visu vecumu studentiem.',
    icon: 'Shield',
    duration: '10 nedēļu kurss | 1 nodarbība nedēļā',
    certificate: 'Digitālās pratības sertifikāts',
    price: '60 € mēnesī',
    ageRange: '6-12 gadi',
    startDays: 2
  },
  {
    id: 2,
    title: 'Programmēšanas Pamati',
    description:
      'Apgūstiet programmēšanas pamatus ar praktiskiem projektiem un ekspertu vadību. Veidojiet spēcīgu pamatu savai tehnoloģiju karjerai.',
    icon: 'Code',
    duration: '10 nedēļu kurss | 1 nodarbība nedēļā',
    certificate: 'Programmēšanas sertifikāts',
    price: '60 € mēnesī',
    ageRange: '9-18 gadi',
    startDays: 3
  },
  {
    id: 3,
    title: 'Minecraft Education',
    description:
      'Spēlējiet, būvējiet un programmējiet Minecraft pasaulē. Apgūstiet datorizēto domāšanu, vienlaikus gūstot prieku pazīstamā vidē.',
    icon: 'Blocks',
    duration: '10 nedēļu kurss | 1 nodarbība nedēļā',
    certificate: 'Minecraft Education sertifikāts',
    price: '55 € mēnesī',
    ageRange: '9-14 gadi',
    startDays: 2
  },
  {
    id: 1,
    title: 'Roblox Studio',
    description:
      'Veidojiet spēles un mācieties programmēt ar mūsu interaktīvo Roblox Studio kursu. Ideāls iesācējiem un vidēja līmeņa audzēkņiem.',
    icon: 'GameController',
    duration: '10 nedēļu kurss | 1 nodarbība nedēļā',
    certificate: 'Roblox sertifikāts',
    price: '60 € mēnesī',
    ageRange: '9-14 gadi',
    startDays: 3
  },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Anna K.",
    text: "AI pamati nākotnei kurss bija fantastisks! Mans dēls iemācījās tik daudz par mākslīgo intelektu un tagad saprot tā nozīmi mūsdienu pasaulē.",
    rating: 5,
    course: "AI pamati nākotnei"
  },
  {
    id: 2,
    name: "Jānis B.",
    text: "Programmēšanas pamatu kurss bija lieliski strukturēts. Meita tagad ar prieku veido savus pirmos koda projektus.",
    rating: 4,
    course: "Programmēšanas Pamati"
  },
  {
    id: 3,
    name: "Marta P.",
    text: "Minecraft Education kurss pārsteidza ar to, cik daudz var iemācīties caur spēli. Bērns ar prieku piedalījās katrā nodarbībā!",
    rating: 5,
    course: "Minecraft Education"
  },
  {
    id: 4,
    name: "Toms R.",
    text: "Roblox Studio kurss bija tieši tas, ko meklējām. Tagad dēls ne tikai spēlē spēles, bet arī saprot, kā tās tiek veidotas.",
    rating: 5,
    course: "Roblox Studio"
  },
  {
    id: 5,
    name: "Linda S.",
    text: "Datorpratības kurss sniedza meitai pārliecību par drošu interneta lietošanu. Ļoti noderīgas zināšanas!",
    rating: 4,
    course: "Datorpratība un Drošība"
  }
];

export const SOCIAL_LINKS = [
  // { name: 'Facebook', icon: 'Facebook', url: '#' },
  // { name: 'Twitter', icon: 'Twitter', url: '#' },
  // { name: 'Instagram', icon: 'Instagram', url: '#' },
  // { name: 'LinkedIn', icon: 'LinkedIn', url: '#' },
];