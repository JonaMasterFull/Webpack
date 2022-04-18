import '../css/componentes.css';
// import  webpackLogo  from '../assets/img/webpack-logo.png';

export const saludar = (nombre) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}!!!`;

    document.body.append(h1);


    //img
    // console.log(webpackLogo);
    // const image  = document.createElement('img');
    // image.src = webpackLogo;
    // document.body.append(image);
}

// Para usarlo afuera nesecita poner el Export