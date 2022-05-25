import '../Comphome/comphome.css';
import  ImgU from '../Comphome/images/indexproductos1.png';
import ImgD from '../Comphome/images/indexproductos2.png';
import ImgT from '../Comphome/images/indexproductos3.png';
import ImgC from '../Comphome/images/indextalleres2.png';
import ImdCi from '../Comphome/images/indextarlleres1.png';

function Chome(){
    return(
        <div>
 
 <section id="slider">
    <input type="radio" name="slider" id="slider1" checked/>
    <input type="radio" name="slider" id="slider2"/>
    <input type="radio" name="slider" id="slider3"/>
    <input type="radio" name="slider" id="slider4"/>
    
    <div id="slides">
    <div class="inner">
        <div class="slide slide_1">
            <div class="slide-contenido"> 
                <h1>SLIDE 1</h1>
                <p>Parrafo 1</p>
            </div>
        </div>
    
        <div class="slide slide_2">
            <div class="slide-contenido"> 
                <h1>SLIDE 2</h1>
                <p>Parrafo 2</p>
            </div>
        </div>
    
        <div class="slide slide_3">
            <div class="slide-contenido"> 
                <h1>SLIDE 3</h1>
                <p>Parrafo 2</p>
            </div>
        </div>
    
        <div class="slide slide_4">
            <div class="slide-contenido"> 
                <h1>SLIDE 4</h1>
                <p>Parrafo 2</p>
            </div>
        </div>
    
    </div>
    </div>
    <div class="controles">
        <label for="slider1">1</label>
        <label for="slider2">2</label>
        <label for="slider3">3</label>
        <label for="slider4">4</label>
    </div>
    
    <div class="bullets">
        <label for="slider1"></label>
        <label for="slider2"></label>
        <label for="slider3"></label>
        <label for="slider4"></label>
    </div>
    </section>
    
    <section>
    <div class="i-titulo-sec">
        <h1><a href="src/pages/productos/productos.html">Productos</a></h1>
        <h3>"Un buen artista siempre usa las mejores herramientas"</h3>
    </div>
    
    <div class="i-index-sec">
    <div class="i-img-galeria-one">
        <img src={ImgU} alt=""/>
    </div>

    <div class="i-img-galeria">
        <img src={ImgD} alt=""/>
    </div>

    <div class="i-img-galeria">
        <img src={ImgT} alt=""/>
    </div>
</div>
</section>

<section>
    <div class="i-titulo-sec">
        <h1><a href="src/pages/talleres.html">Talleres</a></h1>
        <h3>"El aprendizaje continuo es el camino al éxito"</h3>
    </div>
    
    <div class="i-index-sec-talleres">
    <div class="i-img-galeria-one">
        <div class="contenedor">
            <figure>
                <img src={ImgC} alt=""/>
                <div class="capa">
                    <h1>Clases Presenciales</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aperiam dolore obcaecati ipsa explicabo, praesentium.</p>
                </div>
            </figure>
        </div>
    </div>
    </div>

    <div>
        <div class="contenedor">
            <figure>
                <img src={ImdCi} alt=""/>
                <div class="capa">
                    <h1>Clases Virtuales</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aperiam dolore.</p>
                </div>
            </figure>
    </div>
</div>
</section>
    <section>
        <div class="i-titulo-sec">
            <h1><a href="src/pages/galeria.html">Sobre Nosotros</a></h1>
            <h3>"Conoce un poco de nuestro trabajo"</h3>
        </div>
        <div class="i-video">
            <iframe width="320" height="215" src="https://www.youtube.com/embed/NdIjV1OHLWI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </section>
        </div>
    );
    }
export default Chome;