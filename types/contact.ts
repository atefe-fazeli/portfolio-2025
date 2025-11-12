export interface ContactItem {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  color: string;
}