import { BlockRender } from "Components/BlockRender"
import { MainMenu } from "Components/MainMenu"
import { PageWrapper } from "Context/Page"
import Head from "next/head"

export const Page = (props) => {
    return (
        <PageWrapper value={{
            propertyFeatures: props.propertyFeatures
        }}>
            <Head>
                <title>{props.seo.title}</title>
                <meta name="description" content={props.seo.metaDesc} />
            </Head>
            <MainMenu items={props.mainMenuItems} callToActionLabel={props.callToActionLabel} callToActionDestination={props.callToActionDestination} />
            <BlockRender blocks={props.blocks} />
        </PageWrapper>
    )
}