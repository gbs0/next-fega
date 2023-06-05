import Head from 'next/head';
import style from '../styles/Spin.module.css';
import 'tailwindcss/tailwind.css'

export default function Main() {
    return (
        <div className="bg-slate-900 flex h-full">
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" integrity="sha512-vKMx8UnXk60zUwyUnUPM3HbQo8QfmNx7+ltw8Pm5zLusl1XIfwcxo8DbWCqMGKaWeNxWA8yrx5v3SaVpMvR3CA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <title>Next Fega</title>
                <script src="./assets/vendor/preline/dist/preline.js" defer="true"></script>
            </Head>
            <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
                <h1 className="py-2 mt-5 text-lg text-center text-gray-300">Gire a roleta!</h1>
                <p className="text-center text-gray-500 mt-4 py-2">
                  Algumas supresas te aguardam... ou não!
                </p>
                <main id="content" role="main" data-controller="spin">
                    <div className={style.rouletteBody}>
                        <div className={style.buttonDrawer}>
                            <button className={style.spin} data-action="click->spin#rotate" data-spin-target="button">Girar</button>
                        </div>
                        <span className={style.arrow}></span>
                        <div id="roulette" data-spin-target="roulette" className={style.roulette}>
                            <div className={style.one}>1</div>
                            <div className={style.two}>2</div>
                            <div className={style.three}>3</div>
                            <div className={style.four}>4</div>
                            <div className={style.five}>5</div>
                            <div className={style.six}>6</div>
                            <div className={style.seven}>7</div>
                            <div className={style.eight}>8</div>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg text-center text-gray-300 py-2">Você tem: <span data-spin-target="counter">1</span> chance(s).</p>
                    </div>
                </main>
            </div>
        </div>
    )
}

