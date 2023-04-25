import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import Camisa1 from "../assets/camisetas/Variant6.png"
import Camisa2 from "../assets/camisetas/Variant8.png"
import Camisa3 from "../assets/camisetas/Variant7.png"


export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={Camisa1} alt="Produto" width={520} height={480} />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={Camisa2} alt="Produto" width={520} height={480} />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
