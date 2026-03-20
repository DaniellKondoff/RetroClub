import { createClient } from 'contentful';
import type { Event } from '../data/events';

const client = createClient({
  space:       import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const BULGARIAN_MONTHS: Record<number, string> = {
  1:  'Яну',  2:  'Фев',  3:  'Март', 4:  'Апр',
  5:  'Май',  6:  'Юни',  7:  'Юли',  8:  'Авг',
  9:  'Сеп',  10: 'Окт',  11: 'Ноем', 12: 'Дек',
};

function parseDate(iso: string): Pick<Event, 'day' | 'month' | 'year'> {
  const [year, month, day] = iso.split('-');
  return { day, month: BULGARIAN_MONTHS[Number(month)], year };
}

export async function fetchEvents(): Promise<Event[]> {
  const res = await client.getEntries<{
    date:        string;
    title:       string;
    meta:        string;
    description: string;
    tag:         string;
    featured?:   boolean;
  }>({
    content_type: 'event',
    order:        ['fields.date'],
  });

  return res.items.map((item) => ({
    ...parseDate(item.fields.date),
    title:       item.fields.title,
    meta:        item.fields.meta,
    description: item.fields.description,
    tag:         item.fields.tag,
    featured:    item.fields.featured ?? false,
  }));
}
