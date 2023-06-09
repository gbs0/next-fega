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
                    No topo ou abaixo, você pode encontrar informações úteis, assim como dicas ou o tempo restante.
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
                    Afinal, quais são os meus objetivos?
                </h3>
                <p className="mt-1 text-gray-500">
                    Cada etapa pode ter diferentes objetivos.<br></br>
                    Isso pode envolver clicar em uma certa quantidade de itens ou obter uma pontuação mínima para avançar.
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
                    Os prêmios serão dados caso você desista?
                </h3>
                <p className="mt-1 text-gray-500">
                    Não, será necessário que esteja 100% de acordo com os desafios que virão pela frente, desistir <strong>não é uma opção.</strong>
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="policy" data-controller="redirect">
            <div className="flex text-left">
                <input type="checkbox" data-redirect-target="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500" id="hs-default-checkbox"/>
                <label className="text-sm text-gray-500 ml-3 dark:text-gray-400">Aceito os termos e quero continuar.</label>
            </div>
            
            <div>
                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 mt-5 text-sm font-medium bg-red-100 text-red-800 hidden" data-redirect-target="badge">É necessário aceitar os termos acima</span>
            
                <div className="py-8 w-100 text-center">
                    <div className="py-3 px-10 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 w-100" data-action="click->redirect#to_url" data-redirect-url-value="/main" >
                        Ir adiante &#10132;
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
