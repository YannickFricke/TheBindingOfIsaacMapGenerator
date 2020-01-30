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
            <div>
                <img onClick={handleClick} alt={'Shop logo'} src={Images.types.SHOP} data-tip={'Shop'}/>
            </div>
            <div>
                <img onClick={handleClick} alt={'Treasure logo'} src={Images.types.TREASURE} data-tip={'Treasure'}/>
            </div>
            <div>
                <img onClick={handleClick} alt={'Boss logo'} src={Images.types.BOSS} data-tip={'Boss'}/>
            </div>
            <div>
                <img onClick={handleClick} alt={'Miniboss logo'} src={Images.types.MINIBOSS} data-tip={'Miniboss'}/>
            </div>
            <div>
                <img onClick={handleClick} alt={'Secret logo'} src={Images.types.SECRET} data-tip={'Secret'}/>
            </div>
            <div>
                <img onClick={handleClick} alt={'Supersecret logo'} src={Images.types.SUPERSECRET}
                    data-tip={'Supersecret'}/>
            </div>
            <div>
                <img onClick={handleClick} alt={'Arcade logo'} src={Images.types.ARCADE} data-tip={'Arcade'}/>
            </div>
            <div>
                <img onClick={handleClick} alt={'Curse logo'} src={Images.types.CURSE} data-tip={'Curse'}/>
            </div>
            <div>
                <img onClick={handleClick} alt={'Challenge logo'} src={Images.types.CHALLENGE} data-tip={'Challenge'}/>
            </div>
            <div>
                <img onClick={handleClick} alt={'Library logo'} src={Images.types.LIBRARY} data-tip={'Library'}/>
            </div>
            <div>
                <img onClick={handleClick} alt={'Sacrifice logo'} src={Images.types.SACRIFICE} data-tip={'Sacrifice'}/>
            </div>
            <div>
                <img onClick={handleClick} alt={'Bossrush logo'} src={Images.types.BOSSRUSH} data-tip={'Bossrush'}/>
            </div>
            <div>
                <img onClick={handleClick} alt={'Isaacs logo'} src={Images.types.ISAACS} data-tip={'Isaacs'}/>
            </div>
            <div>
                <img onClick={handleClick} alt={'Barren logo'} src={Images.types.BARREN} data-tip={'Barren'}/>
            </div>
            <div>
                <img onClick={handleClick} alt={'Chest logo'} src={Images.types.CHEST} data-tip={'Chest'}/>
            </div>
            <div>
                <img onClick={handleClick} alt={'Dice logo'} src={Images.types.DICE} data-tip={'Dice'}/>
            </div>
        </ImageContainer>
    </div>
};
