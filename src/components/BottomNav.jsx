const navItems = [
  { icon: 'home', label: 'Home', active: true },
  { icon: 'church', label: 'About' },
  { icon: 'potted_plant', label: 'Sermons' },
  { icon: 'volunteer_activism', label: 'Give' },
];

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-md h-16 flex items-center justify-around z-50 border-t border-outline-variant/10">
      {navItems.map((item, i) => (
        <button
          key={i}
          className={`flex flex-col items-center ${item.active ? 'text-secondary' : 'text-on-surface-variant'}`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="text-[10px] font-bold">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
