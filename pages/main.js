import Head from 'next/head';
import 'tailwindcss/tailwind.css'

export default function Main() {
    return (
        <div className='bg-slate-900 flex h-full'>
            <Head>
                <title>Layout Test</title>
            </Head>
            <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">

                <main id="content" role="main">
                <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                    <h1 className="block text-2xl font-bold text-white sm:text-4xl">Bem Vinda!</h1>
                    <p className="mt-3 text-lg text-gray-300">Isso não é um teste, você foi agraciada com o poder de escolhas de algumas coisas a mais em seu relacioanmento...</p>
                    <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                        <a className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center border border-2 border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-300 hover:text-white hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition py-3 px-4" href="/">
                            <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            Volte ao Início
                        </a>
                    </div>
                </div>

                <div className="container mx-auto px-4" data-controller="switch">
                    <div className="flex flex-row items-center justify-between">
                        <h2 className="mt-3 mb-3 text-lg text-gray-300">Selecione algumas das opções abaixo</h2>
                        <p className="text-lg text-gray-300">Voce pode escolher: <span data-switch-target="counter">0</span> opções.</p>
                    </div>
                    
                    <div className="switchBox">
                        <div className="flex items-center mb-3 mt-3">
                            <input type="checkbox" id="switch" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                            before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                            <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-400">Unchecked</label>
                        </div>
                    </div>
                </div>
                </main>

                <footer className="mt-auto text-center py-5">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm text-gray-400">Cover template for <a className="text-white decoration-2 underline underline-offset-2 font-medium hover:text-gray-200 hover:decoration-gray-400" href="../../index.html">Preline</a></p>
                </div>
                </footer>
                
            </div>
        </div>
    )
}

