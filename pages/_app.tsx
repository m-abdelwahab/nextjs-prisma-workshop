import 'styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-900 py-56">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
