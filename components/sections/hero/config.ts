import { Hero } from '@/types/hero';
import { metadata as meta } from '@/app/config';

const hero: Hero = {
  name: meta.author.name,
  firstName: meta.author.firstName,
  lastName: meta.author.lastName,
  label: meta.author.label,
  description: 'Designing and building beautiful websites👋🏻'
};

export { hero };
