interface SidebarProps {
  children?: React.ReactNode;
  title: string;
}

export default function Sidebar({ title, children }: SidebarProps) {
  return (
    <aside className="bg-secondary-darkblue px-5 pt-8 flex-1">
      <h2 className="text-primary-orange text-5xl font-bold ">{title}</h2>
      {children}
    </aside>
  );
}
