import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fega</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Divirta-se!
        </h1>

        <p className={styles.description}>
          As experiências estão disponiveís no link abaixo.
        </p>

        <div className={styles.grid}>
          <a href="/main" className={styles.card}>
            <h3>Inicio &rarr;</h3>
            <p>Descubra respostas profundas sobre o que está por vir...</p>
          </a>


          <a
            href="/spin"
            className={styles.card}
          >
            <h3>Roleta &rarr;</h3>
            <p>Conte com a sorte p/ ganhar prémios incríveis.</p>
          </a>

          <a
            href="/galery"
            className={styles.card}
          >
            <h3>Galeria &rarr;</h3>
            <p>Veja a exposição das diferentes imagens usadas neste projeto.</p>
          </a>
        </div>

        <p className={styles.description}>
          <code>Desenvolvido e criado por Gabriel Schiavo</code>
        </p>

        <script src="./assets/vendor/preline/dist/preline.js"></script>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
