
//import '../css/estilos.css';
import wplogo from '../img/image.png';
export const saludar = (nombre)=>{
    console.log('creando un pinche titulo');
    const h1 =document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;
    document.body.append(h1);

    const img  =document.createElement('img');
    img.src =wplogo
    document.body.append(img);

}