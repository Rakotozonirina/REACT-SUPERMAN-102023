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
import ImageTwelve from '../../photos/images/img12.png'
import ImageThirteen from '../../photos/images/img13.png'
import ImageFourteen from '../../photos/images/img14.png'
import ImageFiteen from '../../photos/images/img15.png'
import GuillemetOne from '../../photos/logo/icon_guillemets_1.png'
import GuillemetTwo from '../../photos/logo/icon_guillemets_2.png'
import Video from '../../video/video.mp4'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Slides from './Slides'

const slides = [
    {
        quoteOne: "- Que représente le S ?",
        quoteTwo:"- Ce n’est pas un S. Sur ma planète cela signifie espoir.",
        quoteThree: "",
        author: "Man Of Steel, Lois Lane et Clark Kent.",
    },
    {
        quoteOne: "Il y eu des temps célestes, les temps d’avant, emplit de merveilles : des diamants de la plus",
        quoteTwo: "belle eau. Plus dure est la chute, la chute sur Terre, et ce qui chute est déchu. Dans mon",
        quoteThree: "rêve, elles m’emportaient vers la lumière. Sublime mensonge !",
        author: "Batman v Superman : l’Aube de la Justice, Batman.",
    },
    {
        quoteOne: "- Vous félicitez le plus grand criminel de tous les temps ? Vous ne pouvez pas dire « brillant",
        quoteTwo: "» ? Non, ce serait trop banal, je vous l’accorde. Charismatique, génie surdoué.",
        quoteThree: "- Moi, je dirais « tordu ».",
        author: "Superman, Lex Luthor et Eve Teschmacher. ",
    }
];

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
        <main className='w-[100%] h-[330dvh] sm:max-md:h-[900dvh] lg:max-xl:h-[350vh] lg:max-xl:gap-[80px] flex flex-col gap-[40px] px-[5rem] bg-gradient-to-br from-[#000000] to-[#06090e]'>
            <CardImage heading="SUPERMAN AU CINÉMA" para="Dans la version actuelle de son histoire, Superman est né sur la planète Krypton sous le nom de « Kal-El ». Encore bébé, il fut placé dans un vaisseau spatial par son père, le scientifique Jor-El, et sa mère, Lara, car la planète était sous la menace d'une destruction totale.Le vaisseau quitta Krypton juste avant l'explosion fatidique... Au terme d'un très long voyage, il atterrit sur la planète Terre. Kal-El est trouvé par un couple de fermiers de Smallville, (Kansas). Jonathan et Martha Kent, qui n'ont pas d'enfant, décident alors de l'adopter et de garder le secret sur son origine. Kal-El est rebaptisé « Clark Joseph Kent » et grandit entouré de ses amis Lana Lang (son premier amour) et Pete Ross jusqu'à ce que ses pouvoirs se révèlent à lui au moment de son adolescence.Jeune adulte, Clark décide de s'installer à Metropolis pour devenir journaliste. Il y est engagé par Perry White, le rédacteur en chef du Daily Planet. Pour sauver les personnes qui lui sont chers ainsi que les habitants de la Terre, Clark revêt son costume et devient Superman, l’homme d’acier aux yeux du monde." images={gallery1Images} />
            <CardImage heading="NÉMÉSIS" para="Superman mène une lutte sans fin contre de nombreux adversaires, son adversaire le plus connu étant le milliardaire Lex Luthor, fils de Lionel Luthor, qui déteste tout ce qu'incarne Superman et finira notamment par devenir président des États-Unis, ce qui participera à faire de lui le pire ennemi de Clark. Doomsday, une abomination génétique qui souhaite tout détruire sur son passage, sera celui qui réussira à tuer Superman. Zod est un kryptonien qui fut condamné à l'emprisonnement dans la Zone Fantôme pour s'être insurgé contre les autorités. Il est libéré et vient sur Terre pour la conquérir mais est arrêté par Superman. Étant kryptonien, Zod possède les mêmes pouvoirs que Superman, et constitue donc l'un de ses plus dangereux adversaires." images={gallery2Images} />
            <CardImage heading="ALLIES" para="Jor-El était le père biologique de Kal-El, ainsi que le savant le plus célèbre de Krypton et un membre influent du Conseil des Sciences. Lorsque Krypton s’effondre il place une version impuissante de lui même dans le vaisseau emportant Kal-El vers la Terre afin de lui apporter les réponses à ses questions quand il grandira. Sur Terre Clark est pris en charge par Jonathan et Martha Kent qui l’élèvent comme leur propre fils. Lorsque John sera mort, Clark pourra compter sur  le soutien indéféctible de sa mère. Une fois engagé au Daily Planet, il rencontrera Loïs Lane qui deviendra sa partenaire et son seul “véritable amour”" images={gallery3Images} />
        </main>
        <section className='h-[130dvh] sm:max-md:h-[160vh] sm:max-md:gap-[100px] sm:max-md:border flex flex-col items-center w-full px-[3rem] bg-gradient-to-br from-[#000000] to-[#06090e]'>
            <div className='w-full h-[80dvh] px-[2rem] sm:max-md:border bgImageEleven grayscale'>
                <article className='w-full h-[100dvh] bg-black/75'>
                    <h1 className='text-white font-rajdhani text-[36px]'>BATMAN V SUPERMAN</h1>
                    <p className='text-white font-cantarell text-justify my-4'>Le monde n’est pas assez grand pour deux super héros. Alors que Superman se battait contre Zod, l’affrontement fait des dégats et détruit partiellement la ville de Métropolis. Bruce Wayne alors présent dans la ville assiste, impuissant, à l’effondrement de la ville qui fait beaucoup de victimes. Wayne est alors persuadé que Superman causera un jour la perte de l'Humanité et qu'il est inévitable de se préparer à l'éliminer. Devenu méfiant il se demande si l'homme de fer, cet extraterrestre de Krypton, qui peut à lui seul détruire le monde d'une simple pichenette, décidera un jour de ne plus défendre la Terre, voire même de causer sa perte.</p>
                    <p className='text-white mb-4 font-cantarell text-justify'>De son côté Superman d’une part cherche à se défendre mais retourne l’offensive contre Batman. Ce dernier n'est plus que l'ombre de lui-même. Devenu un justicier impitoyable, mégalomane et cruel à la suite du meurtre de son ancien partenaire Robin par le Joker, il n'hésite plus à violer son code moral en éliminant et marquant au fer les criminels. Superman souhaite simplement lui rappeler le code moral des “justicier” en usant de la force s’il le faut pour que Batman cesse son comportement abusif.</p>
                    <section>
                        <h2 className='text-white font-rajdhani text-[36px]'>MULTIMEDIA</h2>
                    </section>
                </article>
            </div>
            <Splide aria-label="My Favorite Images" options={{ width: "80%", height: "40dvh", gap: '1rem',}} className='sm:max-md:border'>
                <SplideSlide>
                <div className="centered-slide">
                    <div className="flex rounded-r-md bg-gradient-to-br from-[#19587D] to-[#193C7D] h-[40vh] sm:max-md:scale-[0.8] md:max-lg:w-[500px] w-[600px]">
                        <div className='w-[35%]'>
                            <img src={ImageTwelve} alt="pic" className='object-cover h-[40dvh]' />
                        </div>
                        <article className='w-[65%] flex flex-col gap-1 justify-center'>
                            <p className='font-cantarell text-white text-[16px] uppercase'>Action, Adventure</p>
                            <h2 className='font-cantarell text-white text-[20px]'>Superman Man of Steel</h2>
                            <h2 className='text-white font-bold text-[20px]'>IMDB: <span className='text-[#F1C530]'>7.1</span></h2>
                            <p className='font-cantarell text-white text-[16px]'>Clark Kent, malgré son apparence humaine normale, est l'un des derniers membres d'une race éteinte. Il se retrouve forcé de révéler son identité lorsque la Terre est envahie par une armée de survivants qui menacent détruire la planète.</p>
                        </article>
                    </div>
                </div>
                </SplideSlide>
                <SplideSlide>
                <div className="centered-slide">
                    <div className="flex bg-gradient-to-br rounded-r-md from-[#19587D] to-[#193C7D] h-[40vh] sm:max-md:scale-[0.8] md:max-lg:w-[500px] w-[600px]">
                        <div className='w-[35%]'>
                            <img src={ImageThirteen} alt="pic" className='object-cover h-[40dvh]' />
                        </div>
                        <article className='w-[65%]  flex flex-col gap-3 justify-center'>
                            <p className='font-cantarell text-white text-[16px] uppercase'>Action, Adventure</p>
                            <h2 className='font-cantarell text-white text-[20px]'>Superman (1978)</h2>
                            <h2 className='text-white font-bold text-[20px]'>IMDB: <span className='text-[#F1C530]'>7.4</span></h2>
                            <p className='font-cantarell text-white text-[16px]'>Un orphelin extra-terrestre est envoyé de sa planète mourante sur Terre, où il grandit et devient le premier et le plus grand super-héros de sa planète d'adoption.</p>
                        </article>
                    </div>
                </div>
                </SplideSlide>
                <SplideSlide>
                <div className="centered-slide">
                    <div className="flex bg-gradient-to-br rounded-r-md from-[#21465c] to-[#193C7D] sm:max-md:scale-[0.8] md:max-lg:w-[500px] h-[40vh] w-[600px]">
                        <div className='w-[35%]'>
                            <img src={ImageFourteen} alt="pic" className='object-cover h-[40dvh]' />
                        </div>
                        <article className='w-[65%] flex flex-col gap-3 justify-center'>
                            <p className='font-cantarell text-white text-[16px] uppercase'>Action, Adventure</p>
                            <h2 className='font-cantarell text-white text-[20px]'>Batman V Superman</h2>
                            <h2 className='text-white font-bold text-[20px]'>IMDB: <span className='text-[#F1C530]'>6.4</span></h2>
                            <p className='font-cantarell text-white text-[16px]'>Craignant que les actions de Superman ne soient pas contrôlées, Batman affronte l'homme d'acier, tandis que le monde débat du type de héros dont il a vraiment besoin.</p>
                        </article>
                    </div>
                </div>
                </SplideSlide>
            </Splide>
        </section>
        <section className='w-full h-[100dvh] flex justify-center items-center bg-gradient-to-br from-[#000000] to-[#06090e]'>
            <div className='w-[70%] h-[90dvh]'>
                <video src={Video} autoplay controls poster={ImageFiteen} className='object-cover' type="video/mp4"> </video>
            </div>
        </section>
        <section className='bgContact w-full h-[100dvh]'>
            <div className='w-full h-[100dvh] flex justify-center items-center bg-[#193C7D]/75 '>
                <section className='w-[66%] h-[100dvh]'>
                    <h1 className='text-white font-rajdhani text-[36px] text-center my-2'>PRENONS CONTACT</h1>
                    <form>
                        <div className='flex flex-col'>
                            <label for="email" className="text-white font-cantarell text-[22px] uppercase my-2">Adresse email</label>
                            <input type="email" name="depuis de l'email" id="email" placeholder="Adresse email" className='w-full h-[2rem] bg-transparent text-white font-cantarell outline-none border-b' required/>
                        </div>
                        <h1 className='text-white font-cantarell text-[22px] my-3'>NEWSLETTER</h1>
                        <div class="my-1">
                            <label for="news" className="font-cantarell text-[#C4C4C4]">En cochant cette case vous acceptez de recevoir l’actualité concernant les <br/> aventures de Batman :</label>
                            <input type="checkbox" name="verifier-nouvelle" value="news-letter" id="news" className='indent-0.5 accent-[#F1C530] mx-1'/>
                        </div>
                        <div className="flex flex-col my-1">
                        <label for="receive-news" title="recevoir du nouvelle"></label>
                            <select name="recevoir-nouvelle" className='w-full h-[2rem] bg-transparent outline-none border-b font-cantarell text-[#C1C1C1]'>
                                <option value="Choisissez la fréquence à laquelle vous souhaitez recevoir votre newsletter" selected>Choisissez la fréquence à laquelle vous souhaitez recevoir votre newsletter:</option>
                                <option value="Une fois par semaine">Une fois par semaine</option>
                                <option value="Une fois toutes les deux semaines (2 fois par mois)">Une fois toutes les deux semaines (2 fois par mois)</option>
                                <option value="Une fois par mois">Une fois par mois</option>
                                <option value="Une fois toutes les trois mois">Une fois toutes les trois mois</option>
                                <option value="Une fois toutes les six mois">Une fois toutes les six mois</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label for="ask-question-receive-news"></label>
                            <input className='my-2 w-full h-[2rem] bg-transparent outline-none border-b font-cantarell text-[#C1C1C1]' type="text" id="ask-question-receive-news" name="demande recevoir une nouvelle" placeholder="Souhaitez vous recevoir des news "/>
                        </div>
                        <div className="w-full h-[6rem] flex justify-center items-center">
                            <input type="button" value="Des films"/>
                            <input type="button" value="Des comics"/>
                            <input type="button" value="De tout"/>
                        </div>
                        <div className="flex flex-col my-2">
                            <label for="commentaire" className='text-white font-cantarell text-[22px] uppercase'>message</label>
                            <textarea name="commentaire pour les communaute" id="commentaire"  className="w-full resize-none h-[2rem] my-2 bg-transparent border-b text-[#C1C1C1]" placeholder="Laissez un commentaire pour la communauté"></textarea>
                        </div>
                        <div className="w-full h-[3rem] flex justify-center items-center">
                            <input type="submit" value="CONFIRMER" className="p-2.5 italic bg-[#07338C] rounded-md text-white cursor-pointer  font-rajdhani text-[20px]" />
                        </div>
                    </form>
                </section>
            </div>
        </section>
        <section className='w-full h-[70dvh] flex relative justify-center items-center bg-gradient-to-br from-[#21465c] to-[#193C7D]'>
            <div className='w-fit absolute top-[15%] left-[20%]'>
                <img src={GuillemetOne} alt="guillemet one" />
            </div>
            <Slides slides={slides} />
            <div className='w-fit absolute bottom-[15%] right-[20%]'>
                <img src={GuillemetTwo} alt="guillemet two" />
            </div>
        </section>
    </>
    
)
}

export default Main
