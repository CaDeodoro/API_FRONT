import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';

 export function Details() {
  
  return(
    <Container>
      <Header />

      <main>
        <Content>
 
      <ButtonText title="Excluir Nota" />

      <hi>Introdução ao React</hi>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Omnis amet aliquid veniam est eos expedita ipsa consequatur culpa repellendus distinctio veritatis debitis, 
        quo repellat hic ipsum tempora. Quam, officia quasi!</p>

      <Section  title="Links Utéis">
        <Links>
          <li><a href="#">http://www.rocketseat.com.br</a></li> 
          <li><a href="#">http://www.rocketseat.com.br</a></li> 
        </Links>
      </Section>

      <Section  title="Marcadores">
        <Tag title="express" />
        <Tag title="node" />
      </Section>


      <Button title="Voltar" />

       </Content>
      </main>
    </Container>
  );
}
