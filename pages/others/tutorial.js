import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import 'tailwindcss/tailwind.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <script src="./assets/vendor/preline/dist/preline.js" defer="true"></script>
        <title>Next Fega</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  
        <div className="max-w-2xl mx-auto mb-10 mt-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">Você deve estar se perguntando...</h2>
        </div>

        <div className="max-w-2xl mx-auto divide-y divide-gray-200">
            <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
                <svg className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                </svg>

                <div>
                <h3 className="md:text-lg font-semibold text-gray-800">
                    Porquê eu estou aqui?
                </h3>
                <p className="mt-1 text-gray-500">
                    Bem, a regra é clara, seu objetivo é obter diferentes itens ou caracteristícas pra ambos os jogadores clicando neles na tela.<br></br> 
                    Sua recompensa virá dependendo de seu desempenho, ou da sua sorte.
                </p>
                </div>
            </div>
            </div>

            <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
                <svg className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                </svg>

                <div>
                <h3 className="md:text-lg font-semibold text-gray-800">
                    Vamos começar com alguns conceitos básicos...
                </h3>
                <p className="mt-1 text-gray-500">
                    As telas são divididas em diferentes seções.<br></br> 
                    No centro, você verá os itens que precisam ser clicados.<br></br>
                    No topo ou nas laterais, você pode encontrar informações úteis, assim como dicas ou o tempo restante.
                </p>
                </div>
            </div>
            </div>

            <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
                <svg className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                </svg>

                <div>
                <h3 className="md:text-lg font-semibold text-gray-800">
                    How does Preline's pricing work?
                </h3>
                <p className="mt-1 text-gray-500">
                    Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
                </p>
                </div>
            </div>
            </div>

            <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
                <svg className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                </svg>

                <div>
                <h3 className="md:text-lg font-semibold text-gray-800">
                    How secure is Preline?
                </h3>
                <p className="mt-1 text-gray-500">
                    Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
                </p>
                </div>
            </div>
            </div>

            <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
                <svg className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                </svg>

                <div>
                <h3 className="md:text-lg font-semibold text-gray-800">
                    How do I get access to a theme I purchased?
                </h3>
                <p className="mt-1 text-gray-500">
                    If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.
                </p>
                </div>
            </div>
            </div>

            <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
                <svg className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                </svg>

                <div>
                <h3 className="md:text-lg font-semibold text-gray-800">
                    Upgrade License Type
                </h3>
                <p className="mt-1 text-gray-500">
                    There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.
                </p>
                </div>
            </div>
            </div>
            <div className="py-8 w-100 mt-5 text-center">
            <button type="button" className="py-3 px-10 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 w-100" data-controller="redirect" data-action="click->redirect#to_url" data-redirect-url-value="/main" >
                Aceito e quero continuar &#10132;
            </button>
            </div>
        </div>
        </div>
    </div>
  )
}
