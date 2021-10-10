import 'styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black h-screen pt-28">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
