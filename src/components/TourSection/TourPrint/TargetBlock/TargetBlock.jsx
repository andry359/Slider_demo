import './TargetBlock.scss';
import { useContext } from 'react';
import { ListIndexContext } from '../../../../context/ListIndexContext';
import TargetBlockItem from './TargetBlockItem/TargetBlockItem';

const TargetBlock = () => {

    const { setHoverIndex } = useContext(ListIndexContext);

    const arrNames = [
        [
            // ['block__cabinetOfPeter1', 5, ''],
            ['block__münzkabinet', 4, '', './images/print/png/previewMap/münzkabinet.png'],
        ],
        [
            ['block__artifialia3rdFloor', 10, '', './images/print/png/previewMap/artifialia3rdFloor.png'],
            ['block__naturalia2ndFloor', 7, '', './images/print/png/previewMap/naturalia2ndFloor.png'],
            ['block__naturalia1ndFloor', 6, '/tour?stage=2', './images/print/png/previewMap/naturalia1ndFloor.png'],
        ],
        [
            ['block__gottorpGlobe', 9, '', './images/print/png/previewMap/gottorpGlobe.png'],
            ['block__gallery', 8, '', './images/print/png/previewMap/gallery.png'],
            ['block__anatomicalTheater', 0, '/tour?stage=1', './images/print/png/previewMap/anatomicalTheater.png'],
        ],
        [
            ['block__library3rdFloor', 3, '', './images/print/png/previewMap/library3rdFloor.png'],
            ['block__library2rdFloor', 2, '', './images/print/png/previewMap/library2rdFloor.png'],
            ['block__library1rdFloor', 1, '/tour?stage=3', './images/print/png/previewMap/library1rdFloor.png'],
        ],
    ];

    return (
        <div className='targetBlock blockPrint'>
            {arrNames.map((block, index) => {
                return (
                    <div className={`blockPrint${++index} blockPrint-section`} key={index}>
                        {block.map(([item, id, link, img]) => <TargetBlockItem
                            key={id}
                            className={item}
                            onMouseEnter={() => setHoverIndex(id)}
                            onMouseLeave={() => setHoverIndex(null)}
                            link={link}
                            img={img}
                        />)}
                    </div>
                )
            })}
        </div>
    );
};

export default TargetBlock;