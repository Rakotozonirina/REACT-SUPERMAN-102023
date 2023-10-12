import React from 'react'
import Header from '../components/homeCompenent/Header'

function Home() {
return (
    <div>
        <Header/>
            <main className='w-[100%] h-[300dvh] px-[5rem] bg-gradient-to-br from-[#000000] to-[#212E3E]'>
                <section className='w-[100%] h-[100dvh] flex flex-col gap-4 border'>
                    <article className='border h-[35dvh] border-[olive]'>
                        <h1 className='text-white font-rajdhani text-[36px]'>SUPERMAN AU CINÉMA</h1>
                        <p className='text-white font-cantarell text-justify'>
                            Dans la version actuelle de son histoire, Superman est né sur la planète Krypton sous le nom de « Kal-El ». Encore bébé, il fut placé dans un vaisseau spatial par son père, le scientifique Jor-El, et sa mère, Lara, car la planète était sous la menace d'une destruction totale.Le vaisseau quitta Krypton juste avant l'explosion fatidique... Au terme d'un très long voyage, il atterrit sur la planète Terre. Kal-El est trouvé par un couple de fermiers de Smallville, (Kansas). Jonathan et Martha Kent, qui n'ont pas d'enfant, décident alors de l'adopter et de garder le secret sur son origine. Kal-El est rebaptisé « Clark Joseph Kent » et grandit entouré de ses amis Lana Lang (son premier amour) et Pete Ross jusqu'à ce que ses pouvoirs se révèlent à lui au moment de son adolescence.Jeune adulte, Clark décide de s'installer à Metropolis pour devenir journaliste. Il y est engagé par Perry White, le rédacteur en chef du Daily Planet. Pour sauver les personnes qui lui sont chers ainsi que les habitants de la Terre, Clark revêt son costume et devient Superman, l’homme d’acier aux yeux du monde.
                        </p>
                    </article>
                    <div className='border h-[62dvh] border-red-400'>
                        
                    </div>
                </section>
            </main>
    </div>
    
)
}

export default Home
