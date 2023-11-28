//toda vez que criarmos um componente devemos importar para que ele aparace na view do projeto.

import './App.css';
import FisrtComponent from '../src/components/FirstComponent';
import SecondComponent from '../src/components/SecondComponent';
import ButtomComponent from './components/ButtomComponent';
import ImagemComponent from './components/ImagemComponent';
import Hooks from './components/Hooks';
import ListComponent from './components/ListComponent';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';


function App() {
  return (
    //comentarios jsx {/* */}
    <div className="App">
      <h2>Hello React !</h2>
        <FisrtComponent />
        {2 + 2}
        <SecondComponent />
        <ButtomComponent />
        <ImagemComponent />
        <Hooks />
        <ListComponent />
        <RenderCond x={10}/>
        <Fragment />
        <Container>
          <h1>Este é o filho do container.</h1>
        </Container>
    </div>
  );
}

export default App;

/**
 * CLASS NOS ELEMENTOS
 * 
 * Adicionando um classe a um component, sempre adicionando o seguinte complemento "ClassName"
 * 
 * Em imputs podemos adicionar htmlform='typeInput', para informar ao React sobre o tipo do campo.
 * 
 * TEMPLATES EXPRESSIONS
 * 
 * Ele nos permite exercutar regras de javascript no meio de nosso HTML5 Como exemplo acima na linha 12.
 * 
 * EVENTOS DE CLICK
 * 
 *  Sempre que formos trabalhar com componentes inserindo neles eventos, vamos ter que seguir a seguinte sintax:
 * 
 * <buttom onClick={Nome da função que vai transmitir o evento} > Cliquei </buttom>
 * 
 * Lembrando que o onClick é uma tipo de evento e que pode ser alterado pela ação desejavél
 * 
 * Como boa pratica todos os nomes de funções se a seguinte logica 'HandleNomeDaFunção'
 * 
 * 
 * TRABALHANDO COM IMAGENS EM REACT
 * 
 * Para trabalhar com imagens podemos usar a tag de img passando tamebm via templates imagens que vem de outra pasta.
 * 
 * 
 * HOOKS
 * 
 *  Usado para genrenciamento de stados dentro de react, em elementos, sendo assim podemos fazer alguns status com um elemento estado.
 * 
 * USEFFECT
 * 
 * É um status que utilizamos que faz a mudaça de status a qualquer momento, com uma variavel ou tipo de dado qualquer, sendo assim um pouco mais complexo.
 * 
 * RENDER 
 * 
 * Ultilizamos quando queremos que um elemento apareça assim que uma condição ou logica é atendida.
 * 
 * desestruturando uma props, ao ibvés de um fazer uma prop.x, eu simplesmente posso passar esse parametro como x entre {}, como exemplo:
 * 
 * function TestApp({x}){
 *  return(
 *    <div>
 *        { x > 10 ? <p>Realemnete o X é maior que 10.</p> :
 *                   <p>Infelizmente o x é menor que 10.</p>   
 *        }
 *    </div>
 *  )
 * }
 * 
 * fora o exemplo acima podemos passar mais de um parametro dentro do prop, inserindo somente a virgula como exemplo abaixo:
 * 
 *  function TestApp({x , y}){
 *  return(
 *    <div>
 *        { x > 10 ? <p>Realemnete o X é maior que 10.</p> :
 *                   <p>Infelizmente o x é menor que 10.</p>   
 *        }
 * 
 *        { y > 10 ? <p>Realemnete o Y é maior que 10.</p> :
 *                   <p>Infelizmente o Y é menor que 10.</p>   
 *        }
 *    </div>
 *  )
 * }
 * 
 * FRAGMENT
 * 
 * Fragment é um recurso mais recent do React JS, que nos permite assinalar varios elementos a raiz de nosso projeto, sem ter a necessidade ter um elemento pai.
 * 
 * 
 * 
 * 
 * 
 */