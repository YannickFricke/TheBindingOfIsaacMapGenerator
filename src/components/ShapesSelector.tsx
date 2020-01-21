import React from 'react';
import { ISelectionType } from '../App';
import { Images } from '../Images';
import { extractId } from '../Helper';
import { ImageContainer } from './ImageContainer';

interface IShapesSelectorProps {
    setSelection: React.Dispatch<React.SetStateAction<ISelectionType>>;
}

export const ShapesSelector: React.FC<IShapesSelectorProps> = (props) => {
    const handleClick = (event: React.MouseEvent<HTMLImageElement>): void => {
        const target = event.target as HTMLImageElement;
        const id = extractId(target.src);

        props.setSelection({
            type: 'shape',
            id,
        });
    };

    return <ImageContainer id="room-shapes">
        <div>
            <img src={Images.shapes['1x1']} onClick={handleClick}/>
        </div>
        <div>
            <img src={Images.shapes.IH} onClick={handleClick}/>
        </div>
        <div>
            <img src={Images.shapes.IV} onClick={handleClick}/>
        </div>
        <div>
            <img src={Images.shapes['1x2']} onClick={handleClick}/>
        </div>
        <div>
            <img src={Images.shapes.IIV} onClick={handleClick}/>
        </div>
        <div>
            <img src={Images.shapes['2x1']} onClick={handleClick}/>
        </div>
        <div>
            <img src={Images.shapes.IIH} onClick={handleClick}/>
        </div>
        <div>
            <img src={Images.shapes['2x2']} onClick={handleClick}/>
        </div>
        <div>
            <img src={Images.shapes.LTL} onClick={handleClick}/>
        </div>
        <div>
            <img src={Images.shapes.LTR} onClick={handleClick}/>
        </div>
        <div>
            <img src={Images.shapes.LBL} onClick={handleClick}/>
        </div>
        <div>
            <img src={Images.shapes.LBR} onClick={handleClick}/>
        </div>
    </ImageContainer>;
};
