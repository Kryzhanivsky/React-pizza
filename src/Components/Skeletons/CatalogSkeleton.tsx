import React, {FC} from "react"
import ContentLoader from "react-content-loader"

const CatalogSkeleton:FC = (props) => {
    return(
        <ContentLoader
            speed={2}
            width={315}
            height={521}
            viewBox="0 0 315 521"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <circle cx="451" cy="435" r="15"/>
            <rect x="478" y="422" rx="2" ry="2" width="140" height="10"/>
            <rect x="478" y="438" rx="2" ry="2" width="140" height="10"/>
            <rect x="420" y="464" rx="2" ry="2" width="400" height="400"/>
            <circle cx="140" cy="130" r="130"/>
            <rect x="2" y="271" rx="10" ry="10" width="276" height="24"/>
            <rect x="0" y="317" rx="10" ry="10" width="280" height="84"/>
            <rect x="0" y="426" rx="10" ry="10" width="89" height="27"/>
            <rect x="125" y="419" rx="30" ry="30" width="155" height="40"/>
        </ContentLoader>
    )
}
export default CatalogSkeleton