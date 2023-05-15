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
            </div>
        </div>
    )
}