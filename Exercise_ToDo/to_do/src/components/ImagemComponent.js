import img2 from '../assets/th.jpg'

function ImagemComponent(){
    return(
        <div>
            <img src="/OIP.jpg"></img>
            {/* Importando uma imagem de uma pasta espeficia ,podemos usar o import para poder passar como variavél usando o template*/}
            <img src={img2}></img>
        </div>
    )
}

export default ImagemComponent;