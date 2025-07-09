import '../../../styles/globals.css'; // ✅ Tailwind only

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
