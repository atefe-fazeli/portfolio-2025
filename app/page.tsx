import { ThemeToggle } from "@/components/themeToggle";
import { Button } from "@/components/ui/button";


export default function Home() {
 
  return (
    <div>
      <h1 className="text-rose-300 text-9xl">hello </h1>
      <ThemeToggle />
      <div className="flex gap-5 p-4">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>
    </div>
  );
}
