import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav class="py-4 md:py-6 border-b">
      <div class="container mx-auto flex items-center justify-between gap-x-6">
        <Logo />
      </div>
    </nav>
  );
}
