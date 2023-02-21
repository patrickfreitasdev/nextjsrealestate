import { v4 as uuid } from 'uuid';

export const cleanAndTransfor = (blocksJSON) => {
    const blocks = JSON.parse(blocksJSON);


    const assignId = (b) => {
        b.forEach(block => {
            block.id = uuid();
            if (block.innerBlocks?.length) {
                assignId(block.innerBlocks);
            }
        });
    }

    assignId(blocks);


    return blocks;

}