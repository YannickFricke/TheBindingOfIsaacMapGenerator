import React from 'react';
import { ISelectionType } from '../App';
import { ImageContainer } from './ImageContainer';
import { extractId } from '../Helper';
import { Images } from '../Images';

interface ITypesSelectorProps {
    setSelection: React.Dispatch<React.SetStateAction<ISelectionType>>;
}

export const TypesSelector: React.FC<ITypesSelectorProps> = (props) => {
    const handleClick = (event: React.MouseEvent<HTMLImageElement>): void => {
        const target = event.target as HTMLImageElement;
        const id = extractId(target.src);

        props.setSelection({
            type: 'type',
            id,
        });
    };

    return <div id="room-types">
        <ImageContainer>
            <div><img onClick={handleClick} src={Images.types.SHOP}/></div>
            <div><img onClick={handleClick} src={Images.types.TREASURE}/></div>
            <div><img onClick={handleClick} src={Images.types.BOSS}/></div>
            <div><img onClick={handleClick} src={Images.types.MINIBOSS}/></div>
            <div><img onClick={handleClick} src={Images.types.SECRET}/></div>
            <div><img onClick={handleClick} src={Images.types.SUPERSECRET}/></div>
            <div><img onClick={handleClick} src={Images.types.ARCADE}/></div>
            <div><img onClick={handleClick} src={Images.types.CURSE}/></div>
            <div><img onClick={handleClick} src={Images.types.CHALLENGE}/></div>
            <div><img onClick={handleClick} src={Images.types.LIBRARY}/></div>
            <div><img onClick={handleClick} src={Images.types.SACRIFICE}/></div>
            <div><img onClick={handleClick} src={Images.types.BOSSRUSH}/></div>
            <div><img onClick={handleClick} src={Images.types.ISAACS}/></div>
            <div><img onClick={handleClick} src={Images.types.BARREN}/></div>
            <div><img onClick={handleClick} src={Images.types.CHEST}/></div>
            <div><img onClick={handleClick} src={Images.types.DICE}/></div>
        </ImageContainer>
    </div>
};
