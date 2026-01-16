import BentoGridItem from "./BentoGridItem";

const items=[
    'wide',
    'normal',
    'tall',
    'normal',
    'normal',
    'wide',
    'normal',
    'tall',
] as const;

function BentoGrid() {
    return (
        <section className="bento-grid">
            {items.map((size, index) => (
                <BentoGridItem key={index} size={size} />
            ))}
        </section>
    );
}
export default BentoGrid;

//size para definir el tamaño de cada item en el grid
//map para iterar sobre los items y renderizar un BentoGridItem por cada uno