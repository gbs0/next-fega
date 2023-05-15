import Head from 'next/head';
import 'tailwindcss/tailwind.css'

export default function Greetings() {
    return (
        <div className='bg-slate-900 flex h-full'>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" integrity="sha512-vKMx8UnXk60zUwyUnUPM3HbQo8QfmNx7+ltw8Pm5zLusl1XIfwcxo8DbWCqMGKaWeNxWA8yrx5v3SaVpMvR3CA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <title>Next Fega</title>
            </Head>
            <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
            <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                <h1 className="block text-2xl font-bold text-white sm:text-4xl">Bem Vinda!</h1>
                <p className="mt-3 text-lg text-gray-300">Isso não é um teste, você está com o poder de escolha de algumas coisas quem podem mudar o seu relacionamento, portanto, escolha com sabedoria...</p>
                    
                <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                    <a className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center border border-2 border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-300 hover:text-white hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition py-3 px-4" href="/">
                        <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        Volte ao Início
                    </a>
                </div>
            </div>
            <div data-controller="greetings" data-greetings-options-value='{"index": 2}'>
                <a href="../images/img1.png">
                    <img src="../images/img1.png" alt="" />
                </a>

                <a href="../images/img2.png">
                    <img src="../images/img2.png" alt="" />
                </a>
                </div>
            </div>
        </div>
    )
}