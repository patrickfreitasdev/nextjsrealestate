import { CallToAction } from "Components/CallToAction"
import { Column } from "Components/Column"
import { Columns } from "Components/Columns"
import { Cover } from "Components/Cover/Cover"
import { FormspreeForm } from "Components/FormspreeForm"
import { Gallery } from "Components/Gallery"
import { Heading } from "Components/Heading"
import { Paragraph } from "Components/Paragraph"
import { PropertyFeature } from "Components/PropertyFeatures"
import { PropertySearch } from "Components/PropertySearch"
import { TickItem } from "Components/TickItem"
import Image from "next/image"
import { theme } from "theme"

export const BlockRender = ({ blocks }) => {
    return blocks.map((block) => {
        switch (block.name) {
            case 'core/columns': {
                return <Columns key={block.id} isStackedOnMobile={block.attributes.isStackedOnMobile}
                    textColor={theme[block.attributes.textColor] || block.attributes.style?.color?.text}
                    backgroundColorBlock={theme[block.attributes.backgroundColor] || block.attributes.style?.color?.background} >
                    <BlockRender blocks={block.innerBlocks} />
                </Columns>
            }

            case 'acf/ctabutton': {
                return <CallToAction key={block.id} buttonLabel={block.attributes.data.label} destination={block.attributes.data.destination || "/"} align={block.attributes.data.align} />
            }
            case 'core/paragraph': {
                return <Paragraph key={block.id} textColor={theme[block.attributes.textColor] || block.attributes.style?.color?.text} textAlign={block.attributes.align} content={block.attributes.content} />
            }

            case 'acf/tickitem': {

                return <TickItem key={block.id}> <BlockRender blocks={block.innerBlocks} /></TickItem>
            }

            case 'core/column': {
                console.log(block.attributes)
                return <Column key={block.id} width={block.attributes.width}
                    backgroundColorBlock={theme[block.attributes.backgroundColor] || block.attributes.style?.color?.background}>
                    <BlockRender blocks={block.innerBlocks} />
                </Column>
            }

            case 'acf/propertysearch': {
                return <PropertySearch key={block.id} />
            }

            case 'core/group':
            case 'core/block': {
                return <BlockRender key={block.id} blocks={block.innerBlocks} />
            }

            case 'core/image': {
                return <Image key={block.id} src={block.attributes.url} height={block.attributes.height} width={block.attributes.width} alt={block.attributes.alt || ""} />
            }
            case 'core/post-title':
            case 'core/heading': {
                return <Heading key={block.id} textAlign={block.attributes.textAlign} level={block.attributes.level} content={block.attributes.content} />
            }

            case 'acf/formspreeform': {
                return <FormspreeForm key={block.id} formId={block.attributes.data.form_id} />
            }

            case 'acf/propertyfeatures': {
                return <PropertyFeature key={block.id} />
            }

            case 'core/gallery': {

                return <Gallery crop={block.attributes.imageCrop} columns={block.attributes.columns || 3} key={block.id} items={block.innerBlocks} />
            }

            case 'core/cover': {

                return <Cover key={block.id} background={block.attributes.url} >
                    <BlockRender blocks={block.innerBlocks} />
                </Cover>
            }
            default: {
                console.log("UNKOWN ", block);
                return null
            }
        }
    })
}