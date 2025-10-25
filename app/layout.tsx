export const metadata = {
  title: 'Wellness Mental Chat',
  description: 'Find calm through intelligent conversation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', background: '#0b1420', color: 'white', padding: 40 }}>
        <header style={{ borderBottom: '1px solid #333', marginBottom: 20, paddingBottom: 10 }}>
          <h2>🧠 Wellness Mental Chat</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
