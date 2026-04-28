// resources/js/components/ui/pagination.tsx

import { Link } from '@inertiajs/react';

interface Props {
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
}

export function Pagination({ links }: Props) {
  return (
    <div className="flex items-center justify-end gap-2 mt-6">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url ?? ''}
          dangerouslySetInnerHTML={{ __html: link.label }}
          className={`px-3 py-1 rounded text-sm border ${
            link.active ? 'bg-primary text-white' : 'hover:bg-gray-100'
          } ${!link.url && 'text-gray-400 cursor-not-allowed'}`}
        />
      ))}
    </div>
  );
}
