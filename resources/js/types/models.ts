// resources/js/types/models.ts

export interface Permission {
  id: number;
  name: string;
  guard_name: string;
  created_at?: string;
  updated_at?: string;
}

export interface Paginated<T> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number | null;
  to: number | null;
  links: {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
}