import Head from 'next/head';
import styles from '../styles/Spin.module.css';
import 'tailwindcss/tailwind.css'

export default function Main() {
    return (
        <div className="bg-slate-900 flex h-full">
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" integrity="sha512-vKMx8UnXk60zUwyUnUPM3HbQo8QfmNx7+ltw8Pm5zLusl1XIfwcxo8DbWCqMGKaWeNxWA8yrx5v3SaVpMvR3CA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <title>Layout Test</title>
            </Head>
            <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
                <main id="content" role="main">
                <div id="roulette" class="roulette-wheel">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402 402">
                        <path id="curve2" fill="none" transform="rotate(15)" d="M50,201c0-83.4,67.6-151,151-151s151,67.6,151,151"/>
                        <text width="500" text-anchor="middle">
                        <textPath startOffset="50%" xlink:href="#curve2">
                            Lauren</textPath>
                        </text>
                        <path id="curve3" fill="none" transform="rotate(135)" d="M50,201c0-83.4,67.6-151,151-151s151,67.6,151,151"/>
                        <text width="500" text-anchor="middle">
                        <textPath startOffset="50%" xlink:href="#curve3">
                            Cam</textPath>
                        </text>
                        <path id="curve4" fill="none" transform="rotate(255)" d="M50,201c0-83.4,67.6-151,151-151s151,67.6,151,151"/>
                        <text width="500" text-anchor="middle">
                        <textPath startOffset="50%" xlink:href="#curve4">
                            James</textPath>
                        </text>
                    </svg>
                    </div>
                    <div>
                        <button id="roulette-trigger">Do the Thing</button>
                    </div>
                </main>
            </div>
        </div>
    )
}

