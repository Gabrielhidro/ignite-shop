import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import Camisa1 from "../assets/camisetas/Variant6.png"
import Camisa2 from "../assets/camisetas/Variant8.png"
import Camisa3 from "../assets/camisetas/Variant7.png"

import {useKeenSlider} from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'


export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={Camisa1} alt="Produto" width={520} height={480} />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={Camisa2} alt="Produto" width={520} height={480} />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={Camisa3} alt="Produto" width={520} height={480} />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={Camisa3} alt="Produto" width={520} height={480} />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
