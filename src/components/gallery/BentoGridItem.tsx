interface Props {
    size?: 'normal' | 'wide' | 'tall';
}

function BentoGridItem({ size = 'normal' }: Props){
    return(
        <article className={`bento-item ${size}`}> 
            <div className="bento-placeholder"/>
        </article>
    );
}

export default BentoGridItem;

//article hace que el contenido sea independiente y semántico
//div con clase placeholder para simular una imagen o contenido
//placeholder porque aun no contiene las imagenes
