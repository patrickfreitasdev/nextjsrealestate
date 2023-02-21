export const Columns = ({ isStackedOnMobile, children, backgroundColorBlock, textColor }) => {

    const textColorStyle = textColor ? { color: textColor } : {};
    const backgroundColor = backgroundColorBlock ? { backgroundColor : backgroundColorBlock } : {};


    return (
        <div className="my-10" style={{...textColorStyle, ...backgroundColor}}>
            <div className={`max-w-5xl mx-auto ${isStackedOnMobile ? "block md:flex" : 'flex'} `}>
                {children}
            </div>
        </div>
    )
}