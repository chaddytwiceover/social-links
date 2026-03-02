export type LinkItem = {
  id: string;
  label?: string;
  url: string;
  category?: 'social' | 'work' | 'extras';
  featured?: boolean;
  external?: boolean;
};

export const links: LinkItem[] = [
  {
    id: 'site',
    label: 'Main Site',
    url: 'https://chaddytwiceover.com',
    category: 'work'
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/chaddytwiceover',
    category: 'work'
  },
  {
    id: 'twitter',
    label: 'Twitter / X',
    url: 'https://x.com/chaddytwiceover',
    category: 'social'
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    url: 'https://www.tiktok.com/@chaddytwiceover',
    category: 'social'
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/chaddytwiceover',
    category: 'social'
  },
  {
    id: 'email',
    label: 'Email',
    url: 'mailto:contact@chaddytwiceover.com',
    category: 'extras',
    external: false
  }
];
