import React from 'react'
import CardImage from './CardImage'
import ImageTwo from '../../photos/images/img2.png'
import ImageThree from '../../photos/images/img3.png'
import ImageFour from '../../photos/images/img4.png'
import ImageFive from '../../photos/images/img5.png'
import ImageSix from '../../photos/images/img6.png'
import ImageSeven from '../../photos/images/img7.png'
import ImageHeight from '../../photos/images/img8.png'
import ImageNine from '../../photos/images/img9.png'
import ImageTen from '../../photos/images/img10.png'

function Main() {
    const gallery1Images = [
        ImageTwo,
        ImageThree,
        ImageFour
    ];
    const gallery2Images = [
        ImageFive,
        ImageSix,
        ImageSeven,
    ];
    const gallery3Images = [
        ImageHeight,
        ImageNine,
        ImageTen
    ];
return (
    <>
        <main className='w-[100%] h-[330dvh] flex flex-col gap-[40px] px-[5rem] bg-gradient-to-br from-[#000000] to-[#06090e]'>
            <CardImage heading="SUPERMAN AU CINÉMA" para=" Dans la version actuelle de son histoire, Superman est né sur la planète Krypton sous le nom de « Kal-El ». Encore bébé, il fut placé dans un vaisseau spatial par son père, le scientifique Jor-El, et sa mère, Lara, car la planète était sous la menace d'une destruction totale.Le vaisseau quitta Krypton juste avant l'explosion fatidique... Au terme d'un très long voyage, il atterrit sur la planète Terre. Kal-El est trouvé par un couple de fermiers de Smallville, (Kansas). Jonathan et Martha Kent, qui n'ont pas d'enfant, décident alors de l'adopter et de garder le secret sur son origine. Kal-El est rebaptisé « Clark Joseph Kent » et grandit entouré de ses amis Lana Lang (son premier amour) et Pete Ross jusqu'à ce que ses pouvoirs se révèlent à lui au moment de son adolescence.Jeune adulte, Clark décide de s'installer à Metropolis pour devenir journaliste. Il y est engagé par Perry White, le rédacteur en chef du Daily Planet. Pour sauver les personnes qui lui sont chers ainsi que les habitants de la Terre, Clark revêt son costume et devient Superman, l’homme d’acier aux yeux du monde." images={gallery1Images} />
            <CardImage heading="NÉMÉSIS" para="Superman mène une lutte sans fin contre de nombreux adversaires, son adversaire le plus connu étant le milliardaire Lex Luthor, fils de Lionel Luthor, qui déteste tout ce qu'incarne Superman et finira notamment par devenir président des États-Unis, ce qui participera à faire de lui le pire ennemi de Clark. Doomsday, une abomination génétique qui souhaite tout détruire sur son passage, sera celui qui réussira à tuer Superman. Zod est un kryptonien qui fut condamné à l'emprisonnement dans la Zone Fantôme pour s'être insurgé contre les autorités. Il est libéré et vient sur Terre pour la conquérir mais est arrêté par Superman. Étant kryptonien, Zod possède les mêmes pouvoirs que Superman, et constitue donc l'un de ses plus dangereux adversaires." images={gallery2Images} />
            <CardImage heading="ALLIES" para="Jor-El était le père biologique de Kal-El, ainsi que le savant le plus célèbre de Krypton et un membre influent du Conseil des Sciences. Lorsque Krypton s’effondre il place une version impuissante de lui même dans le vaisseau emportant Kal-El vers la Terre afin de lui apporter les réponses à ses questions quand il grandira. Sur Terre Clark est pris en charge par Jonathan et Martha Kent qui l’élèvent comme leur propre fils. Lorsque John sera mort, Clark pourra compter sur  le soutien indéféctible de sa mère. Une fois engagé au Daily Planet, il rencontrera Loïs Lane qui deviendra sa partenaire et son seul “véritable amour”" images={gallery3Images} />
        </main>
        <section className='h-[100dvh] w-full px-[3rem] bg-gradient-to-br from-[#000000] to-[#06090e]'>
            <div className='w-full h-[100dvh] bgImageEleven'></div>
        </section>
    </>
    
)
}

export default Main
