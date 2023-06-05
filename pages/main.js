import Head from 'next/head';
import 'tailwindcss/tailwind.css'

export default function Main() {
    return (
        <div className='bg-slate-900 flex h-full'>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" integrity="sha512-vKMx8UnXk60zUwyUnUPM3HbQo8QfmNx7+ltw8Pm5zLusl1XIfwcxo8DbWCqMGKaWeNxWA8yrx5v3SaVpMvR3CA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <title>Next Fega</title>
                <script src="./assets/vendor/preline/dist/preline.js" defer="true"></script>
            </Head>
            <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full" data-controller="main">
                <main id="content" role="main">
                <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                    <section className="header">
                        <h1 className="block text-2xl font-bold text-white sm:text-4xl">O destino está em suas mãos!</h1>
                    </section>
                    <section className="title">
                        <p className="mt-3 text-md text-gray-300">Cada escolha que você fizer agora pode mudar o rumo de seu relacionamento.</p>
                        <p className="mt-3 text-md text-gray-300">Não se engane, isso não é um simples teste.</p>
                    </section>
                    <hr className="my-5"></hr>
                    <section className="subtitle text-left">
                        <p className="mt-3 text-md text-gray-300">
                        Os itens à sua escolha podem parecer apenas meros adjetivos, mas são símbolos de desejos, esperanças e sonhos. Suas escolhas determinarão se essas aspirações se tornarão realidade ou se desvanecerão como fumaça.
                        </p>
                        <p className="mt-3 text-md text-gray-300">
                        Não tome suas decisões levianamente, pois elas refletirão sua alma e moldarão a teia complexa de relacionamentos que você constrói.
                        </p>
                    </section>
                    <section className="scenario text-left">
                        <p className="mt-3 text-md text-gray-300">Escolha com sabedoria, pois a felicidade ou o desespero aguardam nas escolhas traçadas por seus dedos.</p>
                        <p className="mt-3 text-md text-gray-300">O tempo não espera por ninguém, abrace essa responsabilidade, pois cada clique nessa tela é uma sentença que ecoará através dos anos.</p>
                    </section>
                    <section className="final text-left">
                        <p className="mt-3 text-md text-gray-300">Agora, escolha, com a seriedade de quem sabe que as decisões feitas aqui transcenderão as fronteiras deste momento, permeando os véus da realidade.</p>
                        <p className="mt-3 text-md text-gray-300">Que seu destino se torne uma obra-prima escrita com cliques corajosos e intenções verdadeiras.</p>
                    </section>
                    
                    <h6 className="text-xl mt-3 text-white hidden" data-main-target="tip"> Desça a página quando estiver pronto(a)!</h6>
                    
                    <div className="mt-5 pt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                        <a className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center border border-2 border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-300 hover:text-white hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition py-3 px-4" href="/">
                            <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            Voltar ao Início
                        </a>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="flex flex-row items-center justify-between">
                        <h2 className="mt-3 mb-3 text-lg text-gray-300">Selecione algumas das opções abaixo:</h2>
                        <p hidden className="text-lg text-gray-300">Voce pode escolher: <span data-main-target="counter">1</span> opções.</p>
                    </div>
                    
                    <div className="switchBox flex space-x-10 justify-between">
                        <div className='first-toggle-col mr-5'>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Amoroso" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-300 ml-3 dark:text-gray-300">Amoroso</label>
                            </div>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Atencioso" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Atencioso</label>
                            </div>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Afetuoso" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Afetuoso</label>
                            </div>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Acolhedor" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Acolhedor</label>
                            </div>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Altruísta" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Altruísta</label>
                            </div>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Apoiador" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Apoiador</label>
                            </div>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Atencioso" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Atencioso</label>
                            </div>
                        </div>
                        <div className='second-toggle-col'>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Bondoso" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Bondoso</label>
                            </div>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Carinhoso" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Carinhoso</label>
                            </div>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Compreensivo" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Compreensivo</label>
                            </div>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Cordial" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Cordial</label>
                            </div>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Cuidadoso" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Cuidadoso</label>
                            </div>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Dedicado" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Dedicado</label>
                            </div>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Empático" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Empático</label>
                            </div>
                        </div>
                        <div className='second-toggle-col'>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Encorajador" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Encorajador</label>
                            </div>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Generoso" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Generoso</label>
                            </div>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Gentil" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Gentil</label>
                            </div>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Harmonioso" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Harmonioso</label>
                            </div>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Paciente" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Paciente</label>
                            </div>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Protetor" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Protetor</label>
                            </div>
                            <div className="flex items-center mb-3 mt-3">
                                <input type="checkbox" data-action="click->main#dispatch" id="switch" data-emotion="Sensível" className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"/>
                                <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ml-3 dark:text-gray-300">Sensível</label>
                            </div>
                        </div>
                    </div>

                    <div className="py-3">
                        <h2 className="mt-3 mb-3 text-lg text-gray-300">Opções Selecionadas:</h2>
                        <div>
                            <ul data-main-target="list" className="flex row"></ul>
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

